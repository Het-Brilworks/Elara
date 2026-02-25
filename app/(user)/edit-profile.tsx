import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import {
    useUpdateUserProfile,
    useUploadProfilePicture,
    useUserProfile,
} from "@/Firebase/hooks/useUser";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import {
    Calendar,
    Camera,
    ChevronLeft,
    Mail,
    User as UserIcon,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  const router = useRouter();
  const { user } = useAuthState();
  const { data: userProfile, isLoading: profileLoading } = useUserProfile(
    user?.uid,
  );
  const updateProfileMutation = useUpdateUserProfile();
  const uploadPhotoMutation = useUploadProfilePicture();

  const [name, setName] = useState("");
  const [pregnancyWeek, setPregnancyWeek] = useState("");
  const [dueDate, setDueDate] = useState<Date | undefined>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [profilePhotoUri, setProfilePhotoUri] = useState<string | undefined>();
  const [hasChanges, setHasChanges] = useState(false);
  const [requestingPermission, setRequestingPermission] = useState(false);

  // Initialize form with user profile data
  useEffect(() => {
    if (userProfile) {
      setName(userProfile.name || "");
      setPregnancyWeek(userProfile.pregnancyWeek?.toString() || "");

      if (userProfile.dueDate) {
        // Convert Firestore timestamp to date
        const date =
          userProfile.dueDate instanceof Date
            ? userProfile.dueDate
            : userProfile.dueDate.toDate?.() || new Date(userProfile.dueDate);
        setDueDate(date);
      }

      setProfilePhotoUri(userProfile.photoURL);
    }
  }, [userProfile]);

  // Track changes
  useEffect(() => {
    if (!userProfile) return;

    const hasNameChanged = name !== (userProfile.name || "");
    const hasWeekChanged =
      pregnancyWeek !== (userProfile.pregnancyWeek?.toString() || "");
    const hasPhotoChanged = profilePhotoUri !== userProfile.photoURL;

    let hasDateChanged = false;
    if (userProfile.dueDate) {
      const currentDate =
        userProfile.dueDate instanceof Date
          ? userProfile.dueDate
          : userProfile.dueDate.toDate?.() || new Date(userProfile.dueDate);
      const currentDateStr = currentDate.toISOString().split("T")[0];
      const newDateStr = dueDate?.toISOString().split("T")[0];
      hasDateChanged = currentDateStr !== newDateStr;
    } else {
      hasDateChanged = dueDate !== undefined;
    }

    setHasChanges(
      hasNameChanged || hasWeekChanged || hasDateChanged || hasPhotoChanged,
    );
  }, [name, pregnancyWeek, dueDate, profilePhotoUri, userProfile]);

  const requestMediaLibraryPermission = async () => {
    if (requestingPermission) return null;

    setRequestingPermission(true);
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setRequestingPermission(false);

      if (status !== "granted") {
        Alert.alert(
          "Permission Required",
          "Please grant photo library access to change your profile picture.",
        );
        return null;
      }
      return status;
    } catch (error) {
      setRequestingPermission(false);
      console.error("Permission error:", error);
      return null;
    }
  };

  const pickImage = async () => {
    const permission = await requestMediaLibraryPermission();
    if (!permission) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setProfilePhotoUri(result.assets[0].uri);
      }
    } catch (error: any) {
      Alert.alert("Error", "Failed to pick image. Please try again.");
      console.error("Image picker error:", error);
    }
  };

  const handleSave = async () => {
    if (!user?.uid) return;

    // Validate name
    if (!name.trim()) {
      Alert.alert("Validation Error", "Name is required");
      return;
    }

    // Validate pregnancy week if provided
    if (
      pregnancyWeek &&
      (isNaN(Number(pregnancyWeek)) ||
        Number(pregnancyWeek) < 1 ||
        Number(pregnancyWeek) > 42)
    ) {
      Alert.alert(
        "Validation Error",
        "Pregnancy week must be between 1 and 42",
      );
      return;
    }

    try {
      // Upload photo if changed
      if (profilePhotoUri && profilePhotoUri !== userProfile?.photoURL) {
        const photoResult = await uploadPhotoMutation.mutateAsync({
          uid: user.uid,
          imageUri: profilePhotoUri,
        });

        if (!photoResult.success) {
          Alert.alert("Error", photoResult.error || "Failed to upload photo");
          return;
        }
      }

      // Prepare updates
      const updates: any = {
        name: name.trim(),
      };

      if (pregnancyWeek) {
        updates.pregnancyWeek = Number(pregnancyWeek);
      }

      if (dueDate) {
        updates.dueDate = dueDate;
      }

      // Update profile
      const result = await updateProfileMutation.mutateAsync({
        uid: user.uid,
        updates,
      });

      if (result.success) {
        Alert.alert("Success", "Profile updated successfully", [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ]);
      } else {
        Alert.alert("Error", result.error || "Failed to update profile");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to update profile");
      console.error("Update profile error:", error);
    }
  };

  const handleCancel = () => {
    if (hasChanges) {
      Alert.alert(
        "Discard Changes",
        "Are you sure you want to discard your changes?",
        [
          { text: "Continue Editing", style: "cancel" },
          {
            text: "Discard",
            style: "destructive",
            onPress: () => router.back(),
          },
        ],
      );
    } else {
      router.back();
    }
  };

  if (profileLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      </View>
    );
  }

  const isSaving =
    updateProfileMutation.isPending || uploadPhotoMutation.isPending;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            onPress={handleCancel}
            style={({ pressed }) => [
              styles.headerButton,
              pressed && styles.headerButtonPressed,
            ]}
            disabled={isSaving}
          >
            <ChevronLeft size={24} color="#1A1A1A" strokeWidth={2} />
          </Pressable>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <Pressable
            onPress={handleSave}
            style={({ pressed }) => [
              styles.saveButton,
              pressed && styles.saveButtonPressed,
              (!hasChanges || isSaving) && styles.saveButtonDisabled,
            ]}
            disabled={!hasChanges || isSaving}
          >
            {isSaving ? (
              <ActivityIndicator size="small" color={COLORS.PRIMARY} />
            ) : (
              <Text
                style={[
                  styles.saveButtonText,
                  (!hasChanges || isSaving) && styles.saveButtonTextDisabled,
                ]}
              >
                Save
              </Text>
            )}
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Profile Photo Section */}
          <View style={styles.photoSection}>
            <View style={styles.photoContainer}>
              {profilePhotoUri ? (
                <Image
                  source={{ uri: profilePhotoUri }}
                  style={styles.profilePhoto}
                />
              ) : (
                <View style={styles.profilePhotoPlaceholder}>
                  <Text style={styles.profilePhotoInitial}>
                    {name ? name[0].toUpperCase() : "U"}
                  </Text>
                </View>
              )}
              <Pressable
                style={({ pressed }) => [
                  styles.cameraButton,
                  pressed && styles.cameraButtonPressed,
                ]}
                onPress={pickImage}
                disabled={isSaving}
              >
                <Camera size={18} color="#FFF" strokeWidth={2} />
              </Pressable>
            </View>
            <Text style={styles.photoHint}>Tap to change profile photo</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.formSection}>
            {/* Name Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputIcon}>
                  <UserIcon
                    size={20}
                    color={theme.colors.light.secondary_text}
                    strokeWidth={2}
                  />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor={theme.colors.light.hint}
                  value={name}
                  onChangeText={setName}
                  editable={!isSaving}
                  autoCapitalize="words"
                />
              </View>
            </View>

            {/* Email Input (Read-only) */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <View style={[styles.inputContainer, styles.inputDisabled]}>
                <View style={styles.inputIcon}>
                  <Mail
                    size={20}
                    color={theme.colors.light.secondary_text}
                    strokeWidth={2}
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.inputTextDisabled]}
                  value={userProfile?.email || ""}
                  editable={false}
                />
              </View>
              <Text style={styles.inputHint}>Email cannot be changed</Text>
            </View>

            {/* Pregnancy Week Input */}
            {userProfile?.selectedJourney === "pregnancy" && (
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Pregnancy Week</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIcon}>
                    <Calendar
                      size={20}
                      color={theme.colors.light.secondary_text}
                      strokeWidth={2}
                    />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="e.g., 24"
                    placeholderTextColor={theme.colors.light.hint}
                    value={pregnancyWeek}
                    onChangeText={setPregnancyWeek}
                    keyboardType="number-pad"
                    editable={!isSaving}
                    maxLength={2}
                  />
                  <Text style={styles.inputSuffix}>weeks</Text>
                </View>
                <Text style={styles.inputHint}>Between 1 and 42 weeks</Text>
              </View>
            )}

            {/* Due Date Input */}
            {userProfile?.selectedJourney === "pregnancy" && (
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Due Date</Text>
                <Pressable
                  style={({ pressed }) => [
                    styles.inputContainer,
                    pressed && styles.inputPressed,
                  ]}
                  onPress={() => setShowDatePicker(true)}
                  disabled={isSaving}
                >
                  <View style={styles.inputIcon}>
                    <Calendar
                      size={20}
                      color={theme.colors.light.secondary_text}
                      strokeWidth={2}
                    />
                  </View>
                  <Text
                    style={[styles.input, !dueDate && styles.placeholderText]}
                  >
                    {dueDate ? dueDate.toLocaleDateString() : "Select due date"}
                  </Text>
                </Pressable>
                {showDatePicker && (
                  <DateTimePicker
                    value={dueDate || new Date()}
                    mode="date"
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={(event, selectedDate) => {
                      setShowDatePicker(Platform.OS === "ios");
                      if (selectedDate) {
                        setDueDate(selectedDate);
                      }
                      if (Platform.OS === "android") {
                        setShowDatePicker(false);
                      }
                    }}
                    minimumDate={new Date()}
                    maximumDate={
                      new Date(Date.now() + 280 * 24 * 60 * 60 * 1000)
                    } // ~9 months
                  />
                )}
                <Text style={styles.inputHint}>
                  Select your expected due date
                </Text>
              </View>
            )}

            {/* Journey Tag (Read-only) */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Journey Type</Text>
              <View style={styles.journeyTagContainer}>
                <View style={styles.journeyTag}>
                  <Text style={styles.journeyTagText}>
                    {userProfile?.selectedJourney
                      ? userProfile.selectedJourney.charAt(0).toUpperCase() +
                        userProfile.selectedJourney.slice(1)
                      : "Not Selected"}
                  </Text>
                </View>
              </View>
              <Text style={styles.inputHint}>
                Journey type cannot be changed
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  headerButtonPressed: {
    backgroundColor: "#F5F5F5",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  saveButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: COLORS.PINK,
  },
  saveButtonPressed: {
    opacity: 0.8,
  },
  saveButtonDisabled: {
    backgroundColor: "#F0F0F0",
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.PRIMARY,
  },
  saveButtonTextDisabled: {
    color: "#CCC",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  photoSection: {
    alignItems: "center",
    paddingVertical: 32,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  photoContainer: {
    position: "relative",
    marginBottom: 12,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#EEE",
  },
  profilePhotoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.PINK,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePhotoInitial: {
    fontSize: 48,
    fontWeight: "700",
    color: COLORS.PRIMARY,
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cameraButtonPressed: {
    opacity: 0.8,
  },
  photoHint: {
    fontSize: 14,
    color: "#999",
  },
  formSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  inputDisabled: {
    backgroundColor: "#F8F8F8",
  },
  inputPressed: {
    backgroundColor: "#F8F8F8",
  },
  inputIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1A1A1A",
    paddingVertical: 12,
  },
  inputTextDisabled: {
    color: "#999",
  },
  placeholderText: {
    color: theme.colors.light.hint,
  },
  inputSuffix: {
    fontSize: 14,
    color: "#999",
    marginLeft: 8,
  },
  inputHint: {
    fontSize: 12,
    color: "#999",
    marginTop: 6,
    marginLeft: 4,
  },
  journeyTagContainer: {
    paddingVertical: 8,
  },
  journeyTag: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.PINK,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  journeyTagText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.PRIMARY,
  },
});
