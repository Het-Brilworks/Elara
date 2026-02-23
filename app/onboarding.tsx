import { StageCard } from "@/components/StageCard";
import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import {
  useAuthState,
  useUpdateProfileCompletion,
} from "@/Firebase/hooks/useAuth";
import { Stack, useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const router = useRouter();
  const { user } = useAuthState();
  const updateProfileMutation = useUpdateProfileCompletion();
  const [selectedStage, setSelectedStage] = React.useState<string | null>(null);

  const handleStageSelect = (stage: string) => {
    setSelectedStage(stage);
  };

  const handleContinue = async () => {
    if (!selectedStage) {
      Alert.alert(
        "Selection Required",
        "Please select a journey stage to continue.",
      );
      return;
    }

    if (!user) {
      router.replace("/auth");
      return;
    }

    try {
      const result = await updateProfileMutation.mutateAsync({
        uid: user.uid,
        stage: selectedStage,
      });

      if (result.success) {
        router.replace("/(user)/(tabs)/home");
      } else {
        Alert.alert(
          "Error",
          "Failed to save your selection. Please try again.",
        );
      }
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred.");
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container} edges={["top"]}>
        <StatusBar barStyle="dark-content" />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.yourText}>Your</Text>
            <Text style={styles.titleText}>Journey</Text>
            <Text style={styles.beginsText}>begins here.</Text>
            <Text style={styles.subtitle}>
              Choose the stage that reflects where you are. We'll personalize
              every session for you.
            </Text>
          </View>

          {/* Stage Cards */}
          <View style={styles.cardsContainer}>
            <StageCard
              stageNumber={1}
              title="Fertility Support"
              description="Nurturing practices to support your body on the path to conception"
              backgroundColor={COLORS.FERTILITY.background}
              borderColor={COLORS.FERTILITY.label}
              image={require("@/assets/images/2187480 1.png")}
              onPress={() => handleStageSelect("fertility")}
              selected={selectedStage === "fertility"}
            />
            <StageCard
              stageNumber={2}
              title="Prenatal Yoga"
              description="Gentle movement and breathwork for a calm, healthy pregnancy"
              backgroundColor={COLORS.PRENATAL.background}
              borderColor={COLORS.PRENATAL.label}
              image={require("@/assets/images/3061416 1.png")}
              onPress={() => handleStageSelect("prenatal")}
              selected={selectedStage === "prenatal"}
            />
            <StageCard
              stageNumber={3}
              title="Postnatal Recovery"
              description="Restore strength and well-being after your baby's arrival"
              backgroundColor={COLORS.POSTNATAL.background}
              borderColor={COLORS.POSTNATAL.label}
              image={require("@/assets/images/20341 1.png")}
              onPress={() => handleStageSelect("postnatal")}
              selected={selectedStage === "postnatal"}
            />
          </View>

          {/* Continue Button */}
          <View style={styles.bottomSection}>
            <Pressable
              style={({ pressed }) => [
                styles.continueButton,
                (pressed || updateProfileMutation.isPending) &&
                styles.continueButtonPressed,
                updateProfileMutation.isPending &&
                styles.continueButtonDisabled,
              ]}
              onPress={handleContinue}
              disabled={updateProfileMutation.isPending}
            >
              {updateProfileMutation.isPending ? (
                <ActivityIndicator color={theme.colors.light.on_primary} />
              ) : (
                <Text style={styles.continueButtonText}>Begin My Journey</Text>
              )}
            </Pressable>

            {/* Terms */}
            <Text style={styles.termsText}>
              By continuing, you agree to our Terms of Service
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  titleSection: {
    alignItems: "center",
    marginBottom: 32,
    marginTop: 40,
  },
  yourText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#666",
    textAlign: "center",
    marginBottom: 4,
  },
  titleText: {
    fontSize: 72,
    fontWeight: "700",
    color: COLORS.PRIMARY,
    textAlign: "center",
    lineHeight: 72,
    marginTop: -10,
  },
  beginsText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  cardsContainer: {
    marginBottom: 32,
  },
  bottomSection: {
    alignItems: "center",
    marginTop: "auto",
  },
  continueButton: {
    backgroundColor: theme.colors.light.primary,
    borderRadius: 100,
    paddingVertical: 18,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  continueButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  continueButtonDisabled: {
    opacity: 0.6,
  },
  continueButtonText: {
    color: theme.colors.light.on_primary,
    fontSize: 18,
    fontWeight: "600",
  },
  termsText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});

