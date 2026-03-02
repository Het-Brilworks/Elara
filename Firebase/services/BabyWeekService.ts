import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";

export interface BabyWeek {
  id?: string;
  week: number;
  imageUrl: string;
  createdAt: Date;
}

const COLLECTION_NAME = "baby";
const STORAGE_FOLDER = "baby";

/**
 * Upload a baby week image to Firebase Storage
 * @param imageUri Local file URI of the image
 * @param week Week number
 * @returns Download URL of the uploaded image
 */
export const uploadBabyWeekImage = async (
  imageUri: string,
  week: number,
): Promise<string> => {
  try {
    console.log(`[Week ${week}] Starting upload...`);
    console.log(`[Week ${week}] File URI:`, imageUri);

    const filename = `week_${week}.png`;
    const reference = storage().ref(`baby_weeks/${filename}`);
    
    console.log(`[Week ${week}] Storage path:`, `baby_weeks/${filename}`);

    // Upload the file
    console.log(`[Week ${week}] Uploading file...`);
    await reference.putFile(imageUri);

    console.log(`[Week ${week}] Upload success! Getting download URL...`);

    // Get the download URL
    const downloadURL = await reference.getDownloadURL();
    
    console.log(`[Week ${week}] Download URL:`, downloadURL);
    
    return downloadURL;
  } catch (error) {
    console.error(`[Week ${week}] Upload failed:`, error);
    throw error;
  }
};

/**
 * Create a baby week document in Firestore
 * @param week Week number
 * @param imageUrl Firebase Storage URL of the image
 */
export const createBabyWeekDocument = async (
  week: number,
  imageUrl: string,
): Promise<void> => {
  try {
    await firestore().collection(COLLECTION_NAME).add({
      week,
      imageUrl,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    console.log(`Created document for week ${week}`);
  } catch (error) {
    console.error(`Error creating document for week ${week}:`, error);
    throw error;
  }
};

/**
 * Upload baby week image and create Firestore document
 * @param imageUri Local file URI of the image
 * @param week Week number
 */
export const uploadBabyWeek = async (
  imageUri: string,
  week: number,
): Promise<void> => {
  try {
    console.log(`\n========== Week ${week} Upload Start ==========`);
    console.log(`File URI check:`, imageUri);
    
    // Validate fileUri
    if (!imageUri) {
      throw new Error(`Invalid fileUri: ${imageUri}`);
    }
    
    if (!imageUri.startsWith('file://')) {
      console.warn(`[Week ${week}] Warning: fileUri doesn't start with file://`);
      console.warn(`[Week ${week}] Received:`, imageUri);
    }

    // Upload image to Storage
    const imageUrl = await uploadBabyWeekImage(imageUri, week);

    // Create Firestore document
    await createBabyWeekDocument(week, imageUrl);

    console.log(`✓ Week ${week} fully uploaded (Storage + Firestore)`);
    console.log(`========== Week ${week} Upload Complete ==========\n`);
  } catch (error) {
    console.error(`\n✗ Week ${week} upload failed:`, error);
    console.error(`========== Week ${week} Upload Failed ==========\n`);
    throw error;
  }
};

/**
 * Get all baby week documents
 * @returns Array of baby week documents
 */
export const getAllBabyWeeks = async (): Promise<BabyWeek[]> => {
  try {
    const snapshot = await firestore()
      .collection(COLLECTION_NAME)
      .orderBy("week", "asc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
    })) as BabyWeek[];
  } catch (error) {
    console.error("Error fetching baby weeks:", error);
    throw error;
  }
};

/**
 * Get baby week by week number
 * @param week Week number
 * @returns Baby week document or null
 */
export const getBabyWeekByNumber = async (
  week: number,
): Promise<BabyWeek | null> => {
  try {
    const snapshot = await firestore()
      .collection(COLLECTION_NAME)
      .where("week", "==", week)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
    } as BabyWeek;
  } catch (error) {
    console.error(`Error fetching week ${week}:`, error);
    throw error;
  }
};
