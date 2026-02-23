import { CHIP_COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface JourneyChipProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export const JourneyChip: React.FC<JourneyChipProps> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <Pressable
      style={[styles.chip, selected && styles.selectedChip]}
      onPress={onPress}
    >
      <Text style={[styles.chipText, selected && styles.selectedChipText]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingVertical: theme.spacing.sm + 4,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: CHIP_COLORS.UNSELECTED.background,
    borderRadius: theme.radii.full,
    marginRight: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  selectedChip: {
    backgroundColor: CHIP_COLORS.SELECTED.background,
  },
  chipText: {
    ...theme.textStyles.body_medium,
    color: CHIP_COLORS.UNSELECTED.text,
    fontWeight: "600",
  },
  selectedChipText: {
    color: CHIP_COLORS.SELECTED.text,
  },
});
