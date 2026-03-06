const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

// Initialize Firebase Admin
// You need to download your service account key from Firebase Console
// Go to Project Settings > Service Accounts > Generate New Private Key
// Save it as serviceAccountKey.json in the scripts folder

try {
  const serviceAccount = require("./serviceAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "elara-29e5c.firebasestorage.app",
  });
} catch (error) {
  console.error(
    "Error initializing Firebase Admin. Make sure you have serviceAccountKey.json in the scripts folder.",
  );
  console.error(
    "Download it from: Firebase Console > Project Settings > Service Accounts > Generate New Private Key",
  );
  process.exit(1);
}

const db = admin.firestore();

// Load yoga videos data
const yogaVideosData = require("../data/yogaVideos.json");

// Helper function to extract YouTube video ID
function getYoutubeVideoId(url) {
  if (!url || url.includes("YOUR_YOUTUBE_URL_HERE")) {
    return null;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return url; // Assume it's already a video ID
}

// Helper function to get YouTube thumbnail
function getYoutubeThumbnail(videoId) {
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

async function uploadYogaVideosData() {
  console.log("Starting yoga videos upload process...\n");
  console.log("=== Uploading Yoga Videos Data to Firestore ===\n");

  const videos = yogaVideosData.yogaVideos;
  let successCount = 0;
  let skippedCount = 0;

  for (let video of videos) {
    try {
      // Extract video ID and validate YouTube URL
      const videoId = getYoutubeVideoId(video.youtubeUrl);

      if (!videoId) {
        console.log(`⚠ Skipping "${video.title}" - No valid YouTube URL`);
        skippedCount++;
        continue;
      }

      // Generate thumbnail URL if not provided
      if (!video.thumbnailUrl || video.thumbnailUrl.includes("unsplash.com")) {
        video.thumbnailUrl = getYoutubeThumbnail(videoId);
      }

      // Prepare the document data
      const yogaVideoDoc = {
        id: video.id,
        title: video.title,
        duration: video.duration,
        durationText: video.durationText,
        youtubeUrl: video.youtubeUrl,
        youtubeVideoId: videoId,
        thumbnailUrl: video.thumbnailUrl,
        instructor: video.instructor,
        level: video.level,
        type: video.type,
        category: video.category,
        pregnancyStage: video.pregnancyStage,
        trimester: video.trimester,
        description: video.description,
        benefits: video.benefits,
        instructions: video.instructions,
        bestFor: video.bestFor,
        difficulty: video.difficulty,
        tags: video.tags,
        isActive: video.isActive,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        views: 0,
        likes: 0,
        completions: 0,
      };

      // Upload to Firestore
      await db
        .collection("yogaVideos")
        .doc(video.id)
        .set(yogaVideoDoc, { merge: true });

      console.log(`✓ Uploaded: ${video.title}`);
      console.log(`  ID: ${video.id}`);
      console.log(`  YouTube ID: ${videoId}`);
      console.log(`  Duration: ${video.durationText}`);
      console.log(`  Trimester: ${video.trimester.join(", ")}`);
      console.log("");

      successCount++;
    } catch (error) {
      console.error(`✗ Error uploading ${video.title}:`, error.message);
    }
  }

  console.log("\n=== Upload Summary ===");
  console.log(`Total videos: ${videos.length}`);
  console.log(`Successfully uploaded: ${successCount}`);
  console.log(`Skipped (no URL): ${skippedCount}`);
  console.log(`Failed: ${videos.length - successCount - skippedCount}`);

  console.log("\n✅ Yoga videos upload process completed!");
  console.log(
    "\n💡 Note: Videos marked with YOUR_YOUTUBE_URL_HERE were skipped.",
  );
  console.log(
    "   Update the URLs in data/yogaVideos.json and re-run the script.",
  );
}

// Run the upload
uploadYogaVideosData()
  .then(() => {
    console.log("\n🎉 All done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Upload failed:", error);
    process.exit(1);
  });
