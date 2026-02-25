import { theme } from "@/constants/theme";
import Slider from "@react-native-community/slider";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    ChevronDown,
    FastForward,
    Heart,
    Pause,
    Play,
    Rewind,
    Volume2
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
    Dimensions,
    ImageBackground,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const DUMMY_AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export default function MeditationSessionScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [isFavorite, setIsFavorite] = useState(false);
    const [volume, setVolume] = useState(1.0);

    const title = (params.title as string) || "Morning Clarity";
    const instructor = (params.instructor as string) || "Sarah Jenkins";
    const image = (params.image as string) || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800";

    const player = useAudioPlayer(DUMMY_AUDIO_URL);
    const status = useAudioPlayerStatus(player);

    useEffect(() => {
        player.play();
        return () => {
            player.pause();
        };
    }, []);

    const togglePlayback = () => {
        if (status.playing) {
            player.pause();
        } else {
            player.play();
        }
    };

    const skipForward = () => {
        player.seekTo(status.currentTime + 15000);
    };

    const skipBackward = () => {
        player.seekTo(Math.max(0, status.currentTime - 15000));
    };

    const formatTime = (millis: number) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
    };

    const onSliderValueChange = (value: number) => {
        player.seekTo(value);
    };

    return (
        <ImageBackground
            source={{ uri: image }}
            style={styles.backgroundImage}
            blurRadius={Platform.OS === 'ios' ? 40 : 10}
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
                        <Pressable onPress={() => setIsFavorite(!isFavorite)} style={styles.iconButton}>
                            <Heart size={24} color={isFavorite ? "#FF6B6B" : "#FFF"} fill={isFavorite ? "#FF6B6B" : "transparent"} />
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
                        <Text style={styles.instructor}>{instructor}</Text>
                    </View>

                    {/* Player Section */}
                    <View style={styles.playerSection}>
                        {/* Progress Slider */}
                        <View style={styles.sliderContainer}>
                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={status.duration || 1}
                                value={status.currentTime}
                                onSlidingComplete={onSliderValueChange}
                                minimumTrackTintColor="#FFF"
                                maximumTrackTintColor="rgba(255,255,255,0.3)"
                                thumbTintColor="#FFF"
                            />
                            <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>{formatTime(status.currentTime)}</Text>
                                <Text style={styles.timeText}>{formatTime(status.duration || 0)}</Text>
                            </View>
                        </View>

                        {/* Controls */}
                        <View style={styles.controlsContainer}>
                            <Pressable onPress={skipBackward}>
                                <Rewind size={32} color="#FFF" fill="#FFF" />
                            </Pressable>

                            <Pressable onPress={togglePlayback} style={styles.playButton}>
                                {status.playing ? (
                                    <Pause size={40} color={theme.colors.light.primary} fill={theme.colors.light.primary} />
                                ) : (
                                    <Play size={40} color={theme.colors.light.primary} fill={theme.colors.light.primary} />
                                )}
                            </Pressable>

                            <Pressable onPress={skipForward}>
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
                                    player.setVolume(val);
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
        backgroundColor: 'rgba(0,0,0,0.45)',
    },
    container: {
        flex: 1,
        paddingHorizontal: theme.spacing.lg,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: theme.spacing.md,
    },
    iconButton: {
        padding: 8,
    },
    headerInfo: {
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(255,255,255,0.7)',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    artwork: {
        width: width * 0.75,
        height: width * 0.75,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
    },
    artworkImage: {
        borderRadius: 24,
    },
    infoSection: {
        alignItems: 'center',
        marginBottom: theme.spacing.xl,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 8,
    },
    instructor: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.8)',
        fontWeight: '500',
    },
    playerSection: {
        marginBottom: theme.spacing.xl * 2,
    },
    sliderContainer: {
        marginBottom: theme.spacing.lg,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 4,
    },
    timeText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 12,
        fontWeight: '600',
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        marginBottom: theme.spacing.xl,
    },
    playButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    volumeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        paddingHorizontal: 20,
    },
    volumeSlider: {
        flex: 1,
        height: 30,
    },
});
