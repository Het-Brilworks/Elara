import { Asset } from "expo-asset";
import { uploadBabyWeek } from "../Firebase/services/BabyWeekService";

// Import all baby week images
const babyWeekAssets = {
  1: require("../assets/baby/Week - 1 & 2.png"),
  3: require("../assets/baby/Week - 3.png"),
  4: require("../assets/baby/Week - 4.png"),
  5: require("../assets/baby/Week - 5.png"),
  6: require("../assets/baby/Week - 6.png"),
  7: require("../assets/baby/Week - 7.png"),
  8: require("../assets/baby/Week - 8.png"),
  9: require("../assets/baby/Week - 9.png"),
  10: require("../assets/baby/Week - 10.png"),
  11: require("../assets/baby/Week - 11.png"),
  12: require("../assets/baby/Week - 12.png"),
  13: require("../assets/baby/Week - 13.png"),
  14: require("../assets/baby/Week - 14.png"),
  15: require("../assets/baby/Week - 15.png"),
  16: require("../assets/baby/Week - 16.png"),
  17: require("../assets/baby/Week - 17.png"),
  18: require("../assets/baby/Week - 18.png"),
  19: require("../assets/baby/Week - 19.png"),
  20: require("../assets/baby/Week - 20.png"),
  21: require("../assets/baby/Week - 21.png"),
  22: require("../assets/baby/Week - 22.png"),
  23: require("../assets/baby/Week - 23.png"),
  24: require("../assets/baby/Week - 24.png"),
  25: require("../assets/baby/Week - 25.png"),
  26: require("../assets/baby/Week - 26.png"),
  27: require("../assets/baby/Week - 27.png"),
  28: require("../assets/baby/Week - 28.png"),
  29: require("../assets/baby/Week - 29.png"),
  30: require("../assets/baby/Week - 30.png"),
  31: require("../assets/baby/Week - 31.png"),
  32: require("../assets/baby/Week - 32.png"),
  33: require("../assets/baby/Week - 33.png"),
  34: require("../assets/baby/Week - 34.png"),
  35: require("../assets/baby/Week - 35.png"),
  36: require("../assets/baby/Week - 36.png"),
  37: require("../assets/baby/Week - 37.png"),
  38: require("../assets/baby/Week - 38.png"),
  39: require("../assets/baby/Week - 39.png"),
  40: require("../assets/baby/Week - 40.png"),
  41: require("../assets/baby/Week - 41.png"),
  42: require("../assets/baby/Week - 42.png"),
  43: require("../assets/baby/Week - 43.png"),
};

type WeekNumber = keyof typeof babyWeekAssets;

/**
 * Upload all baby week images to Firebase
 * This script should be run once to populate the baby collection
 */
export const uploadAllBabyWeeks = async (
  onProgress?: (current: number, total: number, week: number) => void,
  onComplete?: (successful: number, failed: number) => void,
): Promise<void> => {
  const weeks = Object.keys(babyWeekAssets).map(Number) as WeekNumber[];
  const total = weeks.length;
  let successful = 0;
  let failed = 0;

  console.log(`Starting upload of ${total} baby week images...`);

  for (let i = 0; i < weeks.length; i++) {
    const week = weeks[i];

    try {
      // Get the asset URI
      const asset = Asset.fromModule(babyWeekAssets[week]);

      // Download/load the asset if needed
      await asset.downloadAsync();

      if (!asset.localUri) {
        throw new Error(`Could not load asset for week ${week}`);
      }

      // Upload to Firebase
      console.log(`Uploading week ${week}...`);
      await uploadBabyWeek(asset.localUri, week);

      successful++;
      console.log(`✓ Week ${week} uploaded successfully (${i + 1}/${total})`);

      // Call progress callback
      if (onProgress) {
        onProgress(i + 1, total, week);
      }
    } catch (error) {
      failed++;
      console.error(`✗ Failed to upload week ${week}:`, error);
    }
  }

  console.log(`\nUpload complete!`);
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);

  // Call completion callback
  if (onComplete) {
    onComplete(successful, failed);
  }
};

/**
 * Upload a single baby week image
 * @param week Week number to upload
 */
export const uploadSingleBabyWeek = async (week: number): Promise<void> => {
  if (!(week in babyWeekAssets)) {
    throw new Error(`Week ${week} not found in assets`);
  }

  try {
    const asset = Asset.fromModule(babyWeekAssets[week as WeekNumber]);

    await asset.downloadAsync();

    if (!asset.localUri) {
      throw new Error(`Could not load asset for week ${week}`);
    }

    await uploadBabyWeek(asset.localUri, week);
    console.log(`✓ Week ${week} uploaded successfully`);
  } catch (error) {
    console.error(`✗ Failed to upload week ${week}:`, error);
    throw error;
  }
};
