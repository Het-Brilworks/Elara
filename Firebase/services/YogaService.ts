import { YogaVideo } from "@/types/yoga";
import firestore from "@react-native-firebase/firestore";

const YOGA_COLLECTION = "yoga";

/**
 * Get all yoga videos
 */
export const getAllYogaVideos = async (): Promise<YogaVideo[]> => {
  try {
    const snapshot = await firestore()
      .collection(YOGA_COLLECTION)
      .where("isActive", "==", true)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as YogaVideo[];
  } catch (error) {
    console.error("Error fetching yoga videos:", error);
    throw error;
  }
};

/**
 * Get yoga video by ID
 */
export const getYogaVideoById = async (
  id: string,
): Promise<YogaVideo | null> => {
  try {
    const doc = await firestore().collection(YOGA_COLLECTION).doc(id).get();

    if (!doc.exists) {
      return null;
    }

    return {
      id: doc.id,
      ...doc.data(),
    } as YogaVideo;
  } catch (error) {
    console.error(`Error fetching yoga video ${id}:`, error);
    throw error;
  }
};

/**
 * Get yoga videos by trimester
 */
export const getYogaVideosByTrimester = async (
  trimester: string,
): Promise<YogaVideo[]> => {
  try {
    const snapshot = await firestore()
      .collection(YOGA_COLLECTION)
      .where("isActive", "==", true)
      .where("trimester", "array-contains", trimester)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as YogaVideo[];
  } catch (error) {
    console.error(
      `Error fetching yoga videos for trimester ${trimester}:`,
      error,
    );
    throw error;
  }
};

/**
 * Get yoga videos by category
 */
export const getYogaVideosByCategory = async (
  category: string,
): Promise<YogaVideo[]> => {
  try {
    const snapshot = await firestore()
      .collection(YOGA_COLLECTION)
      .where("isActive", "==", true)
      .where("category", "==", category)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as YogaVideo[];
  } catch (error) {
    console.error(
      `Error fetching yoga videos for category ${category}:`,
      error,
    );
    throw error;
  }
};

/**
 * Get yoga videos by difficulty
 */
export const getYogaVideosByDifficulty = async (
  difficulty: "beginner" | "intermediate" | "advanced",
): Promise<YogaVideo[]> => {
  try {
    const snapshot = await firestore()
      .collection(YOGA_COLLECTION)
      .where("isActive", "==", true)
      .where("difficulty", "==", difficulty)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as YogaVideo[];
  } catch (error) {
    console.error(
      `Error fetching yoga videos for difficulty ${difficulty}:`,
      error,
    );
    throw error;
  }
};

/**
 * Get yoga videos by type
 */
export const getYogaVideosByType = async (
  type: string,
): Promise<YogaVideo[]> => {
  try {
    const snapshot = await firestore()
      .collection(YOGA_COLLECTION)
      .where("isActive", "==", true)
      .where("type", "==", type)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as YogaVideo[];
  } catch (error) {
    console.error(`Error fetching yoga videos for type ${type}:`, error);
    throw error;
  }
};

/**
 * Search yoga videos by title or description
 */
export const searchYogaVideos = async (query: string): Promise<YogaVideo[]> => {
  try {
    // Note: This is a simple search. For production, consider using Algolia or similar
    const snapshot = await firestore()
      .collection(YOGA_COLLECTION)
      .where("isActive", "==", true)
      .get();

    const allVideos = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as YogaVideo[];

    // Filter by search query
    const searchLower = query.toLowerCase();
    return allVideos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchLower) ||
        video.description.toLowerCase().includes(searchLower) ||
        video.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
    );
  } catch (error) {
    console.error("Error searching yoga videos:", error);
    throw error;
  }
};

/**
 * Get featured/recommended yoga videos
 */
export const getFeaturedYogaVideos = async (
  limit: number = 5,
): Promise<YogaVideo[]> => {
  try {
    const snapshot = await firestore()
      .collection(YOGA_COLLECTION)
      .where("isActive", "==", true)
      .orderBy("createdAt", "desc")
      .limit(limit)
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as YogaVideo[];
  } catch (error) {
    console.error("Error fetching featured yoga videos:", error);
    throw error;
  }
};
