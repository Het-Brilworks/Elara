import {
  setAudioModeAsync,
  useAudioPlayer,
  useAudioPlayerStatus,
} from "expo-audio";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface MeditationTrack {
  id: string;
  title: string;
  duration: string;
  coverImage: string;
  audioUrl: string;
}

interface MeditationPlayerContextType {
  currentTrack: MeditationTrack | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  play: (track: MeditationTrack) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  seekTo: (position: number) => void;
  setVolume: (volume: number) => void;
  skipForward: () => void;
  skipBackward: () => void;
}

const MeditationPlayerContext = createContext<
  MeditationPlayerContextType | undefined
>(undefined);

export const useMeditationPlayer = () => {
  const context = useContext(MeditationPlayerContext);
  if (!context) {
    throw new Error(
      "useMeditationPlayer must be used within MeditationPlayerProvider",
    );
  }
  return context;
};

interface MeditationPlayerProviderProps {
  children: ReactNode;
}

export const MeditationPlayerProvider: React.FC<
  MeditationPlayerProviderProps
> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<MeditationTrack | null>(
    null,
  );
  const [volume, setVolumeState] = useState(1.0);
  const playerRef = useRef<any>(null);

  // Create player without initial URL
  const player = useAudioPlayer("");
  const status = useAudioPlayerStatus(player);

  // Configure audio session for background playback
  useEffect(() => {
    const setupAudioMode = async () => {
      try {
        await setAudioModeAsync({
          playsInSilentMode: true,
          shouldPlayInBackground: true,
          staysActiveInBackground: true,
        });
        console.log("Audio mode configured for background playback");
      } catch (error) {
        console.error("Error setting audio mode:", error);
      }
    };

    setupAudioMode();
  }, []);

  useEffect(() => {
    playerRef.current = player;
    return () => {
      try {
        player.clearLockScreenControls();
        player.remove();
      } catch (error) {
        console.error("Error removing player:", error);
      }
    };
  }, []);

  useEffect(() => {
    if (player) {
      player.volume = volume;
    }
  }, [volume]);

  // Update lock screen metadata when track or playback state changes
  useEffect(() => {
    if (currentTrack && status.isLoaded) {
      try {
        player.updateLockScreenMetadata({
          title: currentTrack.title,
          artist: "Elara Meditation",
          artworkUrl: currentTrack.coverImage,
        });
      } catch (error) {
        console.log("Lock screen metadata update (non-critical):", error);
      }
    }
  }, [currentTrack, status.playing, status.currentTime]);

  const play = async (track: MeditationTrack) => {
    try {
      console.log("Playing track:", track.title, track.audioUrl);

      // Stop current playback
      if (playerRef.current) {
        try {
          playerRef.current.pause();
        } catch (e) {
          console.log("No active playback to stop");
        }
      }

      // Update track info
      setCurrentTrack(track);

      // Replace the source and play
      await player.replace(track.audioUrl);
      await player.play();

      // Set up lock screen controls with metadata
      player.setActiveForLockScreen(true, {
        title: track.title,
        artist: "Elara Meditation",
        artworkUrl: track.coverImage,
      });

      console.log("Track playing with lock screen controls");
    } catch (error) {
      console.error("Error in play function:", error);
    }
  };

  const pause = () => {
    try {
      player.pause();
    } catch (error) {
      console.error("Error pausing:", error);
    }
  };

  const resume = async () => {
    try {
      await player.play();
    } catch (error) {
      console.error("Error resuming:", error);
    }
  };

  const stop = () => {
    try {
      player.pause();
      player.seekTo(0);
      player.clearLockScreenControls();
      setCurrentTrack(null);
    } catch (error) {
      console.error("Error stopping:", error);
    }
  };

  const seekTo = (position: number) => {
    try {
      player.seekTo(position);
    } catch (error) {
      console.error("Error seeking:", error);
    }
  };

  const setVolume = (vol: number) => {
    try {
      setVolumeState(vol);
      player.volume = vol;
    } catch (error) {
      console.error("Error setting volume:", error);
    }
  };

  const skipForward = () => {
    try {
      const newTime = Math.min(
        status.currentTime + 15,
        status.duration || status.currentTime + 15,
      );
      player.seekTo(newTime);
    } catch (error) {
      console.error("Error skipping forward:", error);
    }
  };

  const skipBackward = () => {
    try {
      const newTime = Math.max(0, status.currentTime - 15);
      player.seekTo(newTime);
    } catch (error) {
      console.error("Error skipping backward:", error);
    }
  };

  const value: MeditationPlayerContextType = {
    currentTrack,
    isPlaying: status.playing,
    currentTime: status.currentTime || 0,
    duration: status.duration || 0,
    volume,
    play,
    pause,
    resume,
    stop,
    seekTo,
    setVolume,
    skipForward,
    skipBackward,
  };

  return (
    <MeditationPlayerContext.Provider value={value}>
      {children}
    </MeditationPlayerContext.Provider>
  );
};
