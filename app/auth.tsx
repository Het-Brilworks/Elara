import { InputField } from "@/components/InputField";
import { TabSwitch } from "@/components/TabSwitch";
import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useLogin, useRegister } from "@/Firebase/hooks/useAuth";
import { Stack, useRouter } from "expo-router";
import { Lock, Mail, User } from "lucide-react-native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"signup" | "login">("signup");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Firebase hooks
  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const handleCreateAccount = async () => {
    // Validation
    if (!fullName.trim()) {
      Alert.alert("Error", "Please enter your full name");
      return;
    }
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    if (!password || password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    try {
      const result = await registerMutation.mutateAsync({
        email: email.trim(),
        password,
        name: fullName.trim(),
      });

      if (result.success) {
        // Navigate to onboarding
        router.replace("/onboarding");
      } else {
        Alert.alert("Registration Failed", result.error || "Please try again");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to create account");
    }
  };

  const handleLogin = async () => {
    // Validation
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    if (!password) {
      Alert.alert("Error", "Please enter your password");
      return;
    }

    try {
      const result = await loginMutation.mutateAsync({
        email: email.trim(),
        password,
      });

      if (result.success) {
        router.replace("/(user)/(tabs)/home");
      } else {
        Alert.alert(
          "Login Failed",
          result.error || "Please check your credentials",
        );
      }
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to login");
    }
  };

  const isLoading = loginMutation.isPending || registerMutation.isPending;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container} edges={["top"]}>
        <StatusBar barStyle="dark-content" />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo and Title */}
          <View style={styles.header}>
            <Image
              source={require("@/assets/images/splash-icon.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.subtitle}>
              Your companion through every stage of motherhood
            </Text>
          </View>

          {/* Tab Switch */}
          <TabSwitch activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Form */}
          <View style={styles.form}>
            {activeTab === "signup" && (
              <>
                <InputField
                  label="Full Name"
                  placeholder="Enter your name"
                  Icon={User}
                  value={fullName}
                  onChangeText={setFullName}
                  editable={!isLoading}
                />
                <InputField
                  label="Email Address"
                  placeholder="hello@example.com"
                  Icon={Mail}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  editable={!isLoading}
                />
                <InputField
                  label="Password"
                  placeholder="Create a password"
                  Icon={Lock}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  editable={!isLoading}
                />

                {/* Create Account Button */}
                <Pressable
                  style={({ pressed }) => [
                    styles.primaryButton,
                    (pressed || isLoading) && styles.primaryButtonPressed,
                    isLoading && styles.primaryButtonDisabled,
                  ]}
                  onPress={handleCreateAccount}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator color={theme.colors.dark.on_primary} />
                  ) : (
                    <Text style={styles.primaryButtonText}>Create Account</Text>
                  )}
                </Pressable>
              </>
            )}

            {activeTab === "login" && (
              <>
                <InputField
                  label="Email Address"
                  placeholder="hello@example.com"
                  Icon={Mail}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  editable={!isLoading}
                />
                <InputField
                  label="Password"
                  placeholder="Enter your password"
                  Icon={Lock}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  editable={!isLoading}
                />

                {/* Forgot Password Link */}
                <Pressable
                  onPress={() => router.push("/forgot-password")}
                  style={styles.forgotPasswordContainer}
                >
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [
                    styles.primaryButton,
                    (pressed || isLoading) && styles.primaryButtonPressed,
                    isLoading && styles.primaryButtonDisabled,
                  ]}
                  onPress={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator color={theme.colors.dark.on_primary} />
                  ) : (
                    <Text style={styles.primaryButtonText}>Login</Text>
                  )}
                </Pressable>
              </>
            )}

            {/* Sign In Link */}
            <View style={styles.signInContainer}>
              {activeTab === "signup" ? (
                <>
                  <Text style={styles.signInText}>
                    Already have an account?{" "}
                  </Text>
                  <Pressable onPress={() => setActiveTab("login")}>
                    <Text style={styles.signInLink}>Sign in</Text>
                  </Pressable>
                </>
              ) : (
                <>
                  <Text style={styles.signInText}>Don't have an account? </Text>
                  <Pressable onPress={() => setActiveTab("signup")}>
                    <Text style={styles.signInLink}>Sign up</Text>
                  </Pressable>
                </>
              )}
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
    alignItems: "center",
    marginVertical: theme.spacing.xl,
    marginTop: theme.spacing.xl + theme.spacing.lg,
  },
  logo: {
    width: 180,
    height: 180,
    // marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: theme.colors.light.primary_text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.textStyles.body_medium,
    color: theme.colors.light.secondary_text,
    textAlign: "center",
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
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: theme.spacing.lg,
  },
  signInText: {
    ...theme.textStyles.body_medium,
    color: theme.colors.light.secondary_text,
  },
  signInLink: {
    ...theme.textStyles.body_medium,
    color: COLORS.PRIMARY,
    fontWeight: "600",
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginTop: theme.spacing.xs,
  },
  forgotPasswordText: {
    ...theme.textStyles.body_medium,
    color: COLORS.PRIMARY,
    fontWeight: "600",
  },
});
