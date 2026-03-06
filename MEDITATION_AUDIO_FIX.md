# Meditation Audio Fix Guide

## Issues Fixed

### 1. ✅ Time Display Format

- **Problem**: Seconds were showing incorrectly (e.g., 0:80 instead of 1:20)
- **Fix**: Changed from milliseconds to seconds format (expo-audio uses seconds)
- **Result**: Time now displays correctly as `minutes:seconds`

### 2. ✅ Volume Control

- **Problem**: `player.setVolume is not a function`
- **Fix**: Use `player.volume = val` instead of `player.setVolume(val)`
- **Result**: Volume slider now works properly

### 3. ✅ Player Cleanup

- **Problem**: Error when navigating away from meditation session
- **Fix**: Use `player.remove()` instead of `player.pause()` in cleanup
- **Result**: No more errors when leaving the screen

## Audio Not Playing?

If you can't hear the audio, check the following:

### Check 1: Verify Audio URLs in Firebase

1. Open Firebase Console → Firestore Database
2. Go to `meditation` collection
3. Check if documents have `audioUrl` field populated
4. The URLs should look like: `https://storage.googleapis.com/elara-29e5c.firebasestorage.app/meditations/...`

### Check 2: Console Logs

Check the console for these logs:

```
Meditation Session - Audio URL: [should show URL]
Title: [meditation title]
Player status: [should show playing: true/false]
```

### Check 3: Re-upload Audio Files (If needed)

If the audioUrl field is empty or audio files weren't uploaded:

```bash
npm run upload:meditations
```

This will:

- Upload all MP3 files from `songs/` folder to Firebase Storage
- Update Firestore with proper `audioUrl` fields
- Make files publicly accessible

### Check 4: Firebase Storage Rules

Make sure your Firebase Storage rules allow public read access:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /meditations/{audioFile} {
      allow read: if true;  // Public read access
      allow write: if false;  // Only admin can write
    }
  }
}
```

## Testing

1. Navigate to Meditation tab
2. Click on any meditation
3. Audio should start playing automatically
4. Time should display correctly (e.g., `0:00` to `20:00`)
5. Play/Pause button should work
6. Volume slider should control audio volume
7. Skip forward/backward (15 seconds) should work

## Fallback Behavior

If meditation audio URL is missing or fails to load:

- App will show an error message
- A demo audio will play instead
- Error message: "No audio URL available - Playing demo audio instead"

## Next Steps

If audio still doesn't play:

1. Check browser/app console for error messages
2. Verify Firebase Storage has the audio files
3. Test with the dummy URL to confirm player works
4. Check network connectivity
5. Verify Firebase Storage bucket is accessible
