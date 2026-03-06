import { InputField } from "@/components/InputField";
import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useForgotPassword } from "@/Firebase/hooks/useAuth";
import { Stack, useRouter } from "expo-router";
import { ArrowLeft, Mail } from "lucide-react-native";
import React, { useState } from "react";
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

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const forgotPasswordMutation = useForgotPassword();

  const handleResetPassword = async () => {
    // Validation
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    try {
      const result = await forgotPasswordMutation.mutateAsync({
        email: email.trim(),
      });

      if (result.success) {
        Alert.alert(
          "Email Sent",
          "Password reset instructions have been sent to your email. Please check your inbox.",
          [
            {
              text: "OK",
              onPress: () => router.back(),
            },
          ],
        );
      } else {
        Alert.alert(
          "Error",
          result.error || "Failed to send reset email. Please try again.",
        );
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to send reset email");
    }
  };

  const isLoading = forgotPasswordMutation.isPending;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container} edges={["top"]}>
        <StatusBar barStyle="dark-content" />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header with Back Button */}
          <View style={styles.header}>
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => [
                styles.backButton,
                pressed && styles.backButtonPressed,
              ]}
            >
              <ArrowLeft
                size={24}
                color={theme.colors.light.primary_text}
                strokeWidth={2}
              />
            </Pressable>
          </View>

          {/* Title and Description */}
          <View style={styles.content}>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.description}>
              Enter your email address and we'll send you instructions to reset
              your password.
            </Text>

            {/* Email Input */}
            <View style={styles.form}>
              <InputField
                label="Email Address"
                placeholder="hello@example.com"
                Icon={Mail}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                editable={!isLoading}
              />

              {/* Reset Password Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.primaryButton,
                  (pressed || isLoading) && styles.primaryButtonPressed,
                  isLoading && styles.primaryButtonDisabled,
                ]}
                onPress={handleResetPassword}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color={theme.colors.dark.on_primary} />
                ) : (
                  <Text style={styles.primaryButtonText}>Send Reset Link</Text>
                )}
              </Pressable>

              {/* Back to Login */}
              <View style={styles.backToLoginContainer}>
                <Text style={styles.backToLoginText}>
                  Remember your password?{" "}
                </Text>
                <Pressable onPress={() => router.back()}>
                  <Text style={styles.backToLoginLink}>Back to Login</Text>
                </Pressable>
              </View>
            </View>
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
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  header: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.light.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.light.border,
  },
  backButtonPressed: {
    opacity: 0.7,
  },
  content: {
    marginTop: theme.spacing.lg,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: theme.colors.light.primary_text,
    marginBottom: theme.spacing.md,
  },
  description: {
    ...theme.textStyles.body_large,
    color: theme.colors.light.secondary_text,
    lineHeight: 24,
  },
  form: {
    marginTop: theme.spacing.xl,
  },
  primaryButton: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: theme.radii.full,
    paddingVertical: theme.spacing.md + 4,
    alignItems: "center",
    marginTop: theme.spacing.lg,
  },
  primaryButtonPressed: {
    opacity: 0.8,
  },
  primaryButtonDisabled: {
    opacity: 0.6,
  },
  primaryButtonText: {
    ...theme.textStyles.label_large,
    color: COLORS.ON_PRIMARY,
    fontSize: 17,
    fontWeight: "600",
  },
  backToLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: theme.spacing.lg,
  },
  backToLoginText: {
    ...theme.textStyles.body_medium,
    color: theme.colors.light.secondary_text,
  },
  backToLoginLink: {
    ...theme.textStyles.body_medium,
    color: COLORS.PRIMARY,
    fontWeight: "600",
  },
});
