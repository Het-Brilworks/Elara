import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface TabSwitchProps {
  activeTab: "signup" | "login";
  onTabChange: (tab: "signup" | "login") => void;
}

export const TabSwitch: React.FC<TabSwitchProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.tab, activeTab === "signup" && styles.activeTab]}
        onPress={() => onTabChange("signup")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "signup" && styles.activeTabText,
          ]}
        >
          Sign Up
        </Text>
      </Pressable>
      <Pressable
        style={[styles.tab, activeTab === "login" && styles.activeTab]}
        onPress={() => onTabChange("login")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "login" && styles.activeTabText,
          ]}
        >
          Login
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  tab: {
    flex: 1,
    paddingVertical: theme.spacing.md + 2,
    backgroundColor: "transparent",
    borderRadius: theme.radii.full,
    borderWidth: 2,
    borderColor: theme.colors.light.border,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },
  tabText: {
    ...theme.textStyles.label_large,
    color: theme.colors.light.secondary_text,
    fontWeight: "600",
  },
  activeTabText: {
    color: COLORS.ON_PRIMARY,
  },
});
