import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface StageCardProps {
  stageNumber: 1 | 2 | 3;
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  image: any;
  selected?: boolean;
  onPress?: () => void;
}

export const StageCard: React.FC<StageCardProps> = ({
  stageNumber,
  title,
  description,
  backgroundColor,
  borderColor,
  image,
  selected = false,
  onPress,
}) => {
  const stageColors = {
    1: COLORS.FERTILITY.label,
    2: COLORS.PRENATAL.label,
    3: COLORS.POSTNATAL.label,
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor, borderColor },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.stageLabel, { color: stageColors[stageNumber] }]}>
            Stage {stageNumber}
          </Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>

        <View style={styles.radioContainer}>
          <View
            style={[
              styles.radio,
              {
                borderColor: selected
                  ? stageColors[stageNumber]
                  : "rgba(0,0,0,0.1)",
              },
            ]}
          >
            {selected && (
              <View
                style={[
                  styles.radioInner,
                  { backgroundColor: stageColors[stageNumber] },
                ]}
              />
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    ...theme.shadows.sm,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  stageLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#8E8E8E",
    lineHeight: 20,
  },
  radioContainer: {
    position: "absolute",
    top: 4,
    right: 4,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  radioInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});

