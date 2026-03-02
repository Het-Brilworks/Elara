import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import { useUserProfile } from "@/Firebase/hooks/useUser";
import { uploadAllBabyWeeks } from "@/scripts/uploadBabyWeeks";
import { Baby, Upload } from "lucide-react-native";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BabyScreen() {
  const { user } = useAuthState();
  const { data: userProfile } = useUserProfile(user?.uid);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({
    current: 0,
    total: 0,
    week: 0,
  });

  const handleUploadAllWeeks = async () => {
    Alert.alert(
      "Upload Baby Weeks",
      "This will upload all 43 baby week images to Firebase. This may take a few minutes. Continue?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Upload",
          onPress: async () => {
            setUploading(true);
            setUploadProgress({ current: 0, total: 43, week: 0 });

            try {
              await uploadAllBabyWeeks(
                (current, total, week) => {
                  setUploadProgress({ current, total, week });
                },
                (successful, failed) => {
                  setUploading(false);
                  Alert.alert(
                    "Upload Complete",
                    `Successfully uploaded: ${successful}\nFailed: ${failed}`,
                  );
                  setUploadProgress({ current: 0, total: 0, week: 0 });
                },
              );
            } catch (error: any) {
              setUploading(false);
              Alert.alert(
                "Error",
                "Failed to upload baby weeks. Please try again.",
              );
              console.error("Upload error:", error);
              setUploadProgress({ current: 0, total: 0, week: 0 });
            }
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Baby Growth</Text>
        </View>

        {/* Upload Button */}
        <TouchableOpacity
          style={[
            styles.uploadButton,
            uploading && styles.uploadButtonDisabled,
          ]}
          onPress={handleUploadAllWeeks}
          disabled={uploading}
        >
          {uploading ? (
            <View style={styles.uploadButtonContent}>
              <ActivityIndicator color={COLORS.WHITE} size="small" />
              <Text style={styles.uploadButtonText}>
                Uploading Week {uploadProgress.week} ({uploadProgress.current}/
                {uploadProgress.total})
              </Text>
            </View>
          ) : (
            <View style={styles.uploadButtonContent}>
              <Upload size={20} color={COLORS.WHITE} />
              <Text style={styles.uploadButtonText}>
                Upload All Baby Week Images
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Baby size={48} color={COLORS.PRIMARY} />
          </View>
          <Text style={styles.cardTitle}>
            Week {userProfile?.pregnancyWeek || "24"}
          </Text>
          <Text style={styles.cardSubtitle}>
            Your baby is about the size of a Cantaloupe!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Tips</Text>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>
              Drink plenty of water today to stay hydrated. Proper hydration is
              essential for you and your baby's health.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Development</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              Your baby's organs are developing rapidly. Those little kicks you
              feel are a sign of healthy movement!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light.background,
  },
  scrollContent: {
    padding: theme.spacing.lg,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: theme.colors.light.primary_text,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.PINK,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.light.primary_text,
    marginBottom: 12,
  },
  tipCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.PRIMARY,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 1,
  },
  tipText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
  infoCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 1,
  },
  infoText: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
  },
  uploadButton: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  uploadButtonDisabled: {
    opacity: 0.7,
  },
  uploadButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  uploadButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
