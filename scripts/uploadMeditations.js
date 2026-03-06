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
const bucket = admin.storage().bucket();

// Load meditation data
const meditationsData = require("../data/meditationAudios.json");

async function uploadAudioFile(fileName) {
  const filePath = path.join(__dirname, "../songs", fileName);

  if (!fs.existsSync(filePath)) {
    console.error(`Audio file not found: ${filePath}`);
    return null;
  }

  try {
    const destination = `meditations/${fileName}`;
    console.log(`Uploading ${fileName}...`);

    await bucket.upload(filePath, {
      destination: destination,
      metadata: {
        contentType: "audio/mpeg",
      },
      public: true,
    });

    // Get the public URL
    const file = bucket.file(destination);
    await file.makePublic();

    // Use proper encoded URL format
    const encodedFileName = encodeURIComponent(fileName);
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/meditations/${encodedFileName}`;
    console.log(`✓ Uploaded: ${fileName}`);
    console.log(`  URL: ${publicUrl}`);

    return publicUrl;
  } catch (error) {
    console.error(`Error uploading ${fileName}:`, error.message);
    return null;
  }
}

async function uploadMeditationData() {
  console.log("Starting meditation upload process...\n");

  // Upload all audio files first
  console.log("=== Uploading Audio Files ===");
  const meditations = meditationsData.meditations;

  for (let meditation of meditations) {
    const audioUrl = await uploadAudioFile(meditation.fileName);

    if (audioUrl) {
      meditation.audioUrl = audioUrl;
      // Keep the fileName for reference, but the audioUrl is what will be used
    } else {
      console.error(`Failed to upload audio for: ${meditation.title}`);
    }
  }

  console.log("\n=== Uploading Meditation Data to Firestore ===");

  // Upload meditation documents to Firestore
  for (let meditation of meditations) {
    try {
      await db
        .collection("meditation")
        .doc(meditation.id)
        .set({
          id: meditation.id,
          title: meditation.title,
          duration: meditation.duration,
          durationText: meditation.durationText,
          fileName: meditation.fileName,
          audioUrl: meditation.audioUrl || "",
          coverImage: meditation.coverImage,
          category: meditation.category,
          type: meditation.type,
          pregnancyStage: meditation.pregnancyStage,
          description: meditation.description,
          benefits: meditation.benefits,
          instructions: meditation.instructions,
          bestFor: meditation.bestFor,
          difficulty: meditation.difficulty,
          thumbnailColor: meditation.thumbnailColor,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });

      console.log(`✓ Uploaded to Firestore: ${meditation.title}`);
    } catch (error) {
      console.error(
        `Error uploading ${meditation.title} to Firestore:`,
        error.message,
      );
    }
  }

  // Upload categories
  console.log("\n=== Uploading Categories ===");
  for (let category of meditationsData.categories) {
    try {
      await db
        .collection("meditationCategories")
        .doc(category.id)
        .set(category);
      console.log(`✓ Uploaded category: ${category.name}`);
    } catch (error) {
      console.error(
        `Error uploading category ${category.name}:`,
        error.message,
      );
    }
  }

  // Upload metadata
  console.log("\n=== Uploading Metadata ===");
  try {
    await db.collection("meditationMetadata").doc("config").set({
      tags: meditationsData.tags,
      pregnancyStages: meditationsData.pregnancyStages,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log("✓ Uploaded metadata");
  } catch (error) {
    console.error("Error uploading metadata:", error.message);
  }

  console.log("\n✅ Upload process completed!");
}

// Run the upload
uploadMeditationData()
  .then(() => {
    console.log("\nAll done! You can now close this process.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Upload process failed:", error);
    process.exit(1);
  });
