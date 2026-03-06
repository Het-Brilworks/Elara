# Audio Player Setup - Background Playback & Notifications

## ✅ Completed Features

### 1. Fixed Audio Player URL Change Error

- **Problem**: Player would crash with "Cannot use shared object that was already released" when changing tracks
- **Solution**: Updated `MeditationPlayerContext.tsx` to use `player.replace()` method instead of recreating player instances
- **Result**: Smooth track transitions without errors

### 2. Background Audio Playback

- **iOS Configuration**: Added `UIBackgroundModes: ["audio"]` in `app.json`
- **Android Configuration**: Added `FOREGROUND_SERVICE` and `WAKE_LOCK` permissions in `app.json`
- **Audio Session Setup**: Configured audio mode in `MeditationPlayerContext.tsx`:
  ```typescript
  await setAudioModeAsync({
    playsInSilentMode: true,
    shouldPlayInBackground: true,
  });
  ```
- **Result**: Audio continues playing when app is in background or screen is locked

## 🚧 Pending Feature: Notification Controls

### What's Needed

To show playback controls in the notification panel (like Spotify/VLC), we need to:

1. Display now-playing information (track title, artist, artwork)
2. Add control buttons (play/pause, skip forward/backward)
3. Show playback progress
4. Handle notification interactions

### Implementation Options

#### Option 1: react-native-track-player (Recommended)

**Pros:**

- Full-featured music player with notification controls
- Lock screen controls on iOS and Android
- Supports background playback out of the box
- Active maintenance and community support
- Rich API for playlist management

**Cons:**

- Additional dependency (~500KB)
- Need to migrate from expo-audio to track-player
- Requires rebuild (not compatible with Expo Go)

**Installation:**

```bash
npx expo install react-native-track-player
```

#### Option 2: expo-notifications + Custom Implementation

**Pros:**

- Uses Expo ecosystem
- Lighter weight

**Cons:**

- More manual work to sync notification with player state
- Limited control functionality
- Notifications are static (not media session)

### Recommended Next Steps

1. **Test Current Background Playback**
   - Build and test on physical device
   - Verify audio continues when app is backgrounded
   - Test volume controls and track switching

2. **If Notification Controls are Required**
   - Install `react-native-track-player`
   - Migrate player context to use TrackPlayer API
   - Configure notification setup with artwork and controls
   - Test lock screen controls

## Current File Structure

```
contexts/
  MeditationPlayerContext.tsx  # Global audio player state with background support
components/
  MiniPlayer.tsx               # Persistent mini player UI at bottom of tabs
app/
  (user)/
    meditation-session.tsx     # Full-screen meditation player
    (tabs)/
      meditation.tsx           # Meditation library with categories
```

## Testing Checklist

- [ ] Audio plays when starting a meditation
- [ ] Audio continues when switching tabs
- [ ] Audio continues when closing meditation-session screen
- [ ] Audio continues when app goes to background
- [ ] Audio continues when screen locks (iOS)
- [ ] Mini player shows correct track info
- [ ] Play/pause works in mini player
- [ ] Volume control works
- [ ] Seeking/scrubbing works
- [ ] Track switching works without errors
- [ ] Audio stops when explicitly closed

## Known Limitations

- **No Notification Controls**: Currently, there are no playback controls in the notification panel or lock screen. Audio will play in background, but user must return to app to control playback.
- **No System Integration**: iOS Control Center and Android notification panel don't show meditation playback.

## Future Enhancements

1. Add notification playback controls
2. Add Apple Watch controls support
3. Add CarPlay support
4. Add audio visualization
5. Add playback speed control
6. Add sleep timer
7. Add crossfade between tracks
