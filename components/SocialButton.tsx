import { theme } from "@/constants/theme";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface SocialButtonProps {
  provider: "google" | "apple";
  onPress: () => void;
}

const GoogleIcon = () => (
  <View style={styles.iconCircle}>
    <Text style={styles.googleIcon}>G</Text>
  </View>
);

const AppleIcon = () => (
  <View style={styles.iconCircle}>
    <Text style={styles.appleIcon}></Text>
  </View>
);

export const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      {provider === "google" ? <GoogleIcon /> : <AppleIcon />}
      <Text style={styles.text}>
        {provider === "google" ? "Google" : "Apple"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.md + 2,
    backgroundColor: theme.colors.dark.surface,
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: "rgba(168, 181, 160, 0.2)",
    gap: theme.spacing.sm,
  },
  pressed: {
    opacity: 0.7,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  googleIcon: {
    fontSize: 18,
    fontWeight: "700",
    color: theme.colors.dark.primary_text,
  },
  appleIcon: {
    fontSize: 20,
    fontWeight: "400",
    color: theme.colors.dark.primary_text,
  },
  text: {
    ...theme.textStyles.label_large,
    color: theme.colors.dark.primary_text,
  },
});
