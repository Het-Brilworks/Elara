# Yoga Videos Database Upload Guide

This guide explains how to add and upload yoga videos with YouTube URLs to your Firebase database.

## Files Created

1. **`data/yogaVideos.json`** - JSON file containing all yoga video data
2. **`scripts/uploadYogaVideos.js`** - Script to upload videos to Firebase Firestore
3. **npm script** - `upload:yoga` command added to package.json

## Video Data Structure

Each video in the JSON file has the following fields:

```json
{
  "id": "1",
  "title": "Video Title",
  "duration": 1800, // in seconds
  "durationText": "30 min",
  "youtubeUrl": "https://youtu.be/VIDEO_ID",
  "thumbnailUrl": "auto-generated from YouTube",
  "instructor": "Instructor Name",
  "level": "Beginner", // Beginner, Intermediate, Advanced
  "type": "Gentle", // Gentle, Vinyasa, Hatha, etc.
  "category": "prenatal_yoga",
  "pregnancyStage": "all_trimesters",
  "trimester": ["first", "second", "third"],
  "description": "Video description...",
  "benefits": ["benefit1", "benefit2"],
  "instructions": "Practice instructions...",
  "bestFor": ["morning", "evening"],
  "difficulty": "beginner",
  "tags": ["tag1", "tag2"],
  "isActive": true
}
```

## How to Add Your YouTube Videos

### Step 1: Add Video to JSON

Open `data/yogaVideos.json` and add your video data. The first video is already configured:

```json
{
  "id": "1",
  "title": "Pregnancy Yoga With Classical Music For Baby Brain Development",
  "youtubeUrl": "https://youtu.be/61fn83zkpoc",
  ...
}
```

### Step 2: YouTube URL Formats (All Supported)

You can use any of these YouTube URL formats:

- `https://www.youtube.com/watch?v=61fn83zkpoc`
- `https://youtu.be/61fn83zkpoc`
- `https://youtu.be/61fn83zkpoc?si=uh66Sxqfv3qE_5NI` (with tracking)
- `61fn83zkpoc` (just the video ID)

The script automatically extracts the video ID and generates thumbnail URLs.

### Step 3: Replace Placeholder URLs

Replace all instances of `YOUR_YOUTUBE_URL_HERE` with actual YouTube URLs:

```json
{
  "id": "2",
  "title": "Morning Energy Flow",
  "youtubeUrl": "https://youtu.be/YOUR_VIDEO_ID",  // ← Replace this
  ...
}
```

### Step 4: Customize Video Details

Update other fields as needed:

- **duration** - Video length in seconds (30 min = 1800)
- **instructor** - Instructor name
- **level** - Beginner, Intermediate, or Advanced
- **type** - Gentle, Vinyasa, Hatha, Therapeutic, etc.
- **trimester** - Array: ["first"], ["second"], or ["first", "second", "third"]
- **benefits** - Array of benefits
- **tags** - Array of searchable tags

## Upload to Firebase

### Prerequisites

1. **Firebase Admin SDK Key**
   - Go to Firebase Console → Project Settings → Service Accounts
   - Click "Generate New Private Key"
   - Save as `serviceAccountKey.json` in the `scripts` folder

2. **Firebase Storage Bucket**
   - Already configured in the script: `elara-29e5c.firebasestorage.app`

### Run Upload Script

```bash
npm run upload:yoga
```

### What the Script Does

1. ✅ Validates YouTube URLs
2. ✅ Extracts video IDs
3. ✅ Auto-generates thumbnail URLs from YouTube
4. ✅ Uploads to Firestore collection `yogaVideos`
5. ✅ Adds metadata (views, likes, timestamps)
6. ⚠️ Skips videos without valid URLs
7. 📊 Shows upload summary

### Output Example

```
=== Uploading Yoga Videos Data to Firestore ===

✓ Uploaded: Pregnancy Yoga With Classical Music For Baby Brain Development
  ID: 1
  YouTube ID: 61fn83zkpoc
  Duration: 30 min
  Trimester: first, second, third

⚠ Skipping "Morning Energy Flow" - No valid YouTube URL

=== Upload Summary ===
Total videos: 7
Successfully uploaded: 1
Skipped (no URL): 6
Failed: 0
```

## Integration with App

The videos are automatically available in your app through the yoga session screen:

```typescript
// Videos are fetched from Firestore collection: yogaVideos
// Each video includes youtubeVideoId for the YouTube player
```

### App Features

- ✅ YouTube player integration
- ✅ Video metadata display
- ✅ Thumbnail previews
- ✅ Filter by trimester
- ✅ Search and tags
- ✅ Track views/completions

## Firestore Collection Structure

```
yogaVideos/
  ├── 1/
  │   ├── title: "Pregnancy Yoga..."
  │   ├── youtubeUrl: "https://youtu.be/..."
  │   ├── youtubeVideoId: "61fn83zkpoc"
  │   ├── thumbnailUrl: "https://img.youtube.com/..."
  │   ├── duration: 1800
  │   ├── trimester: ["first", "second", "third"]
  │   ├── benefits: [...]
  │   ├── views: 0
  │   ├── likes: 0
  │   └── createdAt: Timestamp
  └── 2/
      └── ...
```

## Tips

1. **Video Duration**: Calculate in seconds (e.g., 20 min = 1200 seconds)
2. **Thumbnails**: Auto-generated from YouTube (maxresdefault quality)
3. **Testing**: Upload one video first to test before bulk upload
4. **Updates**: Re-run script to update existing videos (uses merge: true)
5. **Inactive Videos**: Set `isActive: false` to hide without deleting

## Example: Adding a New Video

1. Get your YouTube URL: `https://youtu.be/abc123xyz`
2. Add to `yogaVideos.json`:

```json
{
  "id": "8",
  "title": "Third Trimester Gentle Flow",
  "duration": 900,
  "durationText": "15 min",
  "youtubeUrl": "https://youtu.be/abc123xyz",
  "instructor": "Your Name",
  "level": "Beginner",
  "type": "Gentle",
  "category": "prenatal_yoga",
  "pregnancyStage": "third_trimester",
  "trimester": ["third"],
  "description": "Gentle movements for late pregnancy...",
  "benefits": ["Safe for third trimester", "Gentle stretching"],
  "instructions": "Use props for support...",
  "bestFor": ["third_trimester", "evening"],
  "difficulty": "beginner",
  "tags": ["gentle", "third_trimester"],
  "isActive": true
}
```

3. Run: `npm run upload:yoga`
4. Video appears in your app! 🎉

## Troubleshooting

**Script fails to initialize:**

- Check `serviceAccountKey.json` exists in `scripts` folder
- Verify Firebase Admin SDK credentials

**Video skipped:**

- Ensure YouTube URL is valid
- Remove `YOUR_YOUTUBE_URL_HERE` placeholder

**Thumbnail not loading:**

- Some videos don't have maxresdefault - URL auto-updates
- Can manually set custom thumbnail in JSON

## Need Help?

Contact your development team or check Firebase Console for uploaded data.
