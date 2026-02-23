import { CHIP_COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { LucideIcon } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface FilterChipProps {
  label: string;
  icon?: LucideIcon;
  selected?: boolean;
  onPress?: () => void;
}

export default function FilterChip({
  label,
  icon: Icon,
  selected = false,
  onPress,
}: FilterChipProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        selected && styles.selected,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      {Icon && (
        <Icon
          size={16}
          color={
            selected ? CHIP_COLORS.SELECTED.text : CHIP_COLORS.UNSELECTED.text
          }
          strokeWidth={2}
        />
      )}
      <Text style={[styles.label, selected && styles.selectedLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CHIP_COLORS.UNSELECTED.background,
    paddingHorizontal: theme.spacing.md + 4,
    paddingVertical: theme.spacing.sm + 2,
    borderRadius: theme.radii.full,
    gap: theme.spacing.sm,
    marginRight: theme.spacing.sm,
  },
  selected: {
    backgroundColor: CHIP_COLORS.SELECTED.background,
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    fontSize: theme.textStyles.label_medium.fontSize,
    fontWeight: "600",
    color: CHIP_COLORS.UNSELECTED.text,
  },
  selectedLabel: {
    color: CHIP_COLORS.SELECTED.text,
  },
});
