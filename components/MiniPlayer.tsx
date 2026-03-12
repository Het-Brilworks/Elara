import { theme } from "@/constants/theme";
import { useMeditationPlayer } from "@/contexts/MeditationPlayerContext";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pause, Play, X } from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function MiniPlayer() {
  const router = useRouter();
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    pause,
    resume,
    stop,
  } = useMeditationPlayer();

  // Don't show if no track is playing
  if (!currentTrack) return null;

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handlePress = () => {
    // Navigate to meditation session with current track info
    router.push({
      pathname: "/(user)/meditation-session",
      params: {
        id: currentTrack.id,
        title: currentTrack.title,
        duration: currentTrack.duration,
        image: currentTrack.coverImage,
        audioUrl: currentTrack.audioUrl,
        fromMiniPlayer: "true",
      },
    });
  };

  const togglePlayback = () => {
    if (isPlaying) {
      pause();
    } else {
      resume();
    }
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      {/* Mini Player Content */}
      <Pressable style={styles.content} onPress={handlePress}>
        <Image
          source={{ uri: currentTrack.coverImage }}
          style={styles.artwork}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {currentTrack.title}
          </Text>
          <Text style={styles.subtitle}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </Text>
        </View>

        <View style={styles.controls}>
          <Pressable
            onPress={(e) => {
              e.stopPropagation();
              togglePlayback();
            }}
            style={styles.playButton}
          >
            {isPlaying ? (
              <Pause size={24} color="#1A1A1A" fill="#1A1A1A" />
            ) : (
              <Play size={24} color="#1A1A1A" fill="#1A1A1A" />
            )}
          </Pressable>

          <Pressable
            onPress={(e) => {
              e.stopPropagation();
              stop();
            }}
            style={styles.closeButton}
          >
            <X size={20} color="#666" />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 80 : 115,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    zIndex: 1000,
  },
  progressBarContainer: {
    height: 2,
    backgroundColor: "#E0E0E0",
    width: "100%",
  },
  progressBar: {
    height: "100%",
    backgroundColor: theme.colors.light.primary,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    gap: theme.spacing.sm,
  },
  artwork: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    padding: 8,
  },
});
