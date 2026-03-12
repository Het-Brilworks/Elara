import { theme } from "@/constants/theme";
import { useMeditationPlayer } from "@/contexts/MeditationPlayerContext";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import {
    useIsFavorited,
    useToggleFavorite,
} from "@/Firebase/hooks/useFavorites";
import Slider from "@react-native-community/slider";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    ChevronDown,
    FastForward,
    Heart,
    Pause,
    Play,
    Rewind,
    Volume2,
} from "lucide-react-native";
import React, { useEffect } from "react";
import {
    Alert,
    Dimensions,
    ImageBackground,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const DUMMY_AUDIO_URL =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export default function MeditationSessionScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuthState();

  const {
    play,
    pause,
    resume,
    isPlaying,
    currentTime,
    duration: playerDuration,
    seekTo,
    setVolume,
    skipForward: contextSkipForward,
    skipBackward: contextSkipBackward,
    currentTrack,
    volume,
  } = useMeditationPlayer();

  const id = (params.id as string) || "";
  const title = (params.title as string) || "Morning Clarity";
  const durationText = (params.duration as string) || "10 min";
  const image =
    (params.image as string) ||
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800";
  const audioUrl = (params.audioUrl as string) || DUMMY_AUDIO_URL;
  const fromMiniPlayer = params.fromMiniPlayer === "true";

  // Favorite functionality using Firebase hooks
  const isFavorite = useIsFavorited(user?.uid, id, "meditation");
  const toggleFavoriteMutation = useToggleFavorite();

  useEffect(() => {
    // Only start playing if not coming from mini player
    if (!fromMiniPlayer) {
      console.log("Starting meditation:", { id, title, audioUrl });
      play({
        id,
        title,
        duration: durationText,
        coverImage: image,
        audioUrl,
      });
    }
  }, [id]);

  const togglePlayback = () => {
    if (isPlaying) {
      pause();
    } else {
      resume();
    }
  };

  const handleToggleFavorite = () => {
    if (!user?.uid) {
      Alert.alert(
        "Not Logged In",
        "Please log in to add meditations to your favorites",
      );
      return;
    }

    if (!id) {
      Alert.alert(
        "Error",
        "Unable to favorite this meditation. Meditation ID is missing.",
      );
      return;
    }

    toggleFavoriteMutation.mutate(
      {
        userId: user.uid,
        itemId: id,
        itemType: "meditation",
      },
      {
        onSuccess: (data) => {
          console.log("Favorite toggled successfully:", data);
        },
        onError: (error) => {
          console.error("Error toggling favorite:", error);
          Alert.alert("Error", "Failed to update favorites. Please try again.");
        },
      },
    );
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const onSliderValueChange = (value: number) => {
    seekTo(value);
  };

  return (
    <ImageBackground
      source={{ uri: image }}
      style={styles.backgroundImage}
      blurRadius={Platform.OS === "ios" ? 40 : 10}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Pressable onPress={() => router.back()} style={styles.iconButton}>
              <ChevronDown size={28} color="#FFF" />
            </Pressable>
            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Now Playing</Text>
            </View>
            <Pressable
              onPress={handleToggleFavorite}
              style={[
                styles.iconButton,
                toggleFavoriteMutation.isPending && styles.iconButtonDisabled,
              ]}
              disabled={toggleFavoriteMutation.isPending}
            >
              <Heart
                size={24}
                color={isFavorite ? "#FF6B6B" : "#FFF"}
                fill={isFavorite ? "#FF6B6B" : "transparent"}
              />
            </Pressable>
          </View>

          {/* Album Art / Center Piece */}
          <View style={styles.centerContainer}>
            <ImageBackground
              source={{ uri: image }}
              style={styles.artwork}
              imageStyle={styles.artworkImage}
            />
          </View>

          {/* Info Section */}
          <View style={styles.infoSection}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.instructor}>{durationText}</Text>
          </View>

          {/* Player Section */}
          <View style={styles.playerSection}>
            {/* Progress Slider */}
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={playerDuration || 1}
                value={currentTime}
                onSlidingComplete={onSliderValueChange}
                minimumTrackTintColor="#FFF"
                maximumTrackTintColor="rgba(255,255,255,0.3)"
                thumbTintColor="#FFF"
              />
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                <Text style={styles.timeText}>
                  {formatTime(playerDuration || 0)}
                </Text>
              </View>
            </View>

            {/* Controls */}
            <View style={styles.controlsContainer}>
              <Pressable onPress={contextSkipBackward}>
                <Rewind size={32} color="#FFF" fill="#FFF" />
              </Pressable>

              <Pressable onPress={togglePlayback} style={styles.playButton}>
                {isPlaying ? (
                  <Pause
                    size={40}
                    color={theme.colors.light.primary}
                    fill={theme.colors.light.primary}
                  />
                ) : (
                  <Play
                    size={40}
                    color={theme.colors.light.primary}
                    fill={theme.colors.light.primary}
                  />
                )}
              </Pressable>

              <Pressable onPress={contextSkipForward}>
                <FastForward size={32} color="#FFF" fill="#FFF" />
              </Pressable>
            </View>

            {/* Volume Control */}
            <View style={styles.volumeContainer}>
              <Volume2 size={20} color="rgba(255,255,255,0.7)" />
              <Slider
                style={styles.volumeSlider}
                minimumValue={0}
                maximumValue={1}
                value={volume}
                onValueChange={(val) => {
                  setVolume(val);
                }}
                minimumTrackTintColor="rgba(255,255,255,0.5)"
                maximumTrackTintColor="rgba(255,255,255,0.2)"
                thumbTintColor="#FFF"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: theme.spacing.md,
    iconButtonDisabled: {
      opacity: 0.5,
    },
  },
  iconButton: {
    padding: 8,
  },
  headerInfo: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255,255,255,0.7)",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  artwork: {
    width: width * 0.75,
    height: width * 0.75,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  artworkImage: {
    borderRadius: 24,
  },
  infoSection: {
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 8,
  },
  instructor: {
    fontSize: 18,
    color: "rgba(255,255,255,0.8)",
    fontWeight: "500",
  },
  playerSection: {
    marginBottom: theme.spacing.xl * 2,
  },
  sliderContainer: {
    marginBottom: theme.spacing.lg,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  timeText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
    fontWeight: "600",
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    marginBottom: theme.spacing.xl,
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  volumeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 20,
  },
  volumeSlider: {
    flex: 1,
    height: 30,
  },
});
