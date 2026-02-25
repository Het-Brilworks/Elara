import { theme } from "@/constants/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import {
    ArrowLeft,
    CheckCircle2,
    Clock,
    Play,
    Star,
} from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const yogaVideo = require("@/assets/videos/3760968-uhd_3840_2160_25fps.mp4");

export default function YogaSessionScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const title = (params.title as string) || "First Trimester Gentle Stretch";
  const duration = (params.duration as string) || "15 Minutes";
  const type = (params.type as string) || "Gentle";
  const stage = (params.stage as string) || "First Trimester";

  const player = useVideoPlayer(yogaVideo, (player) => {
    player.loop = true;
    player.play();
  });

  const benefits = [
    "Eases nausea",
    "Boosts energy",
    "Gentle movement",
    "Reduces stress",
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1A1A1A" />
        </Pressable>
        <Text style={styles.headerTitle}>Session</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Video Player */}
        <View style={styles.videoContainer}>
          <VideoView
            style={styles.video}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
          />
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Clock size={16} color="#666" />
              <Text style={styles.metaText}>{duration}</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: "#F0F9F4" }]}>
              <Text style={[styles.badgeText, { color: "#2E8B6E" }]}>
                {type}
              </Text>
            </View>
            <View style={styles.metaItem}>
              <Star size={16} color="#666" />
              <Text style={styles.metaText}>{stage}</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Safe, gentle stretches perfect for the {stage.toLowerCase()}. Helps
            with morning sickness and fatigue while maintaining flexibility and
            connection with your body.
          </Text>

          {/* Benefits */}
          <View style={styles.benefitsSection}>
            <Text style={styles.sectionTitle}>Benefits</Text>
            {benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <CheckCircle2
                  size={24}
                  color={theme.colors.light.success}
                  fill={`${theme.colors.light.success}20`}
                />
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Action Button */}
      <View style={styles.footer}>
        <Pressable style={styles.completeButton}>
          <View style={styles.playIconContainer}>
            <Play
              size={16}
              color={theme.colors.light.primary}
              fill={theme.colors.light.primary}
            />
          </View>
          <Text style={styles.completeButtonText}>Mark as Complete</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  infoSection: {
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: theme.spacing.md,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: theme.spacing.xl,
  },
  benefitsSection: {
    marginTop: theme.spacing.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: theme.spacing.md,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  benefitText: {
    fontSize: 16,
    color: "#4A4A4A",
    fontWeight: "500",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  completeButton: {
    backgroundColor: "#ECEBFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 16,
    gap: theme.spacing.sm,
  },
  playIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  completeButtonText: {
    color: theme.colors.light.primary,
    fontSize: 16,
    fontWeight: "700",
  },
});
