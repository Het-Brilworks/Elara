import { MeditationAudio, MeditationCategory } from "@/types/meditation";
import firestore from "@react-native-firebase/firestore";

const MEDITATION_COLLECTION = "meditation";
const CATEGORIES_COLLECTION = "meditationCategories";
const METADATA_COLLECTION = "meditationMetadata";

/**
 * Get all meditation sessions
 */
export const getAllMeditations = async (): Promise<MeditationAudio[]> => {
  try {
    const snapshot = await firestore()
      .collection(MEDITATION_COLLECTION)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as MeditationAudio[];
  } catch (error) {
    console.error("Error fetching meditations:", error);
    throw error;
  }
};

/**
 * Get meditation by ID
 */
export const getMeditationById = async (
  id: string,
): Promise<MeditationAudio | null> => {
  try {
    const doc = await firestore()
      .collection(MEDITATION_COLLECTION)
      .doc(id)
      .get();

    if (!doc.exists) {
      return null;
    }

    return {
      id: doc.id,
      ...doc.data(),
    } as MeditationAudio;
  } catch (error) {
    console.error(`Error fetching meditation ${id}:`, error);
    throw error;
  }
};

/**
 * Get meditations by category
 */
export const getMeditationsByCategory = async (
  category: string,
): Promise<MeditationAudio[]> => {
  try {
    const snapshot = await firestore()
      .collection(MEDITATION_COLLECTION)
      .where("category", "==", category)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as MeditationAudio[];
  } catch (error) {
    console.error(
      `Error fetching meditations for category ${category}:`,
      error,
    );
    throw error;
  }
};

/**
 * Get meditations by pregnancy stage
 */
export const getMeditationsByPregnancyStage = async (
  stage: "prenatal" | "perinatal" | "postnatal",
): Promise<MeditationAudio[]> => {
  try {
    const snapshot = await firestore()
      .collection(MEDITATION_COLLECTION)
      .where("pregnancyStage", "==", stage)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as MeditationAudio[];
  } catch (error) {
    console.error(`Error fetching meditations for stage ${stage}:`, error);
    throw error;
  }
};

/**
 * Get meditations by difficulty
 */
export const getMeditationsByDifficulty = async (
  difficulty: "beginner" | "intermediate" | "advanced",
): Promise<MeditationAudio[]> => {
  try {
    const snapshot = await firestore()
      .collection(MEDITATION_COLLECTION)
      .where("difficulty", "==", difficulty)
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as MeditationAudio[];
  } catch (error) {
    console.error(
      `Error fetching meditations for difficulty ${difficulty}:`,
      error,
    );
    throw error;
  }
};

/**
 * Get all meditation categories
 */
export const getAllCategories = async (): Promise<MeditationCategory[]> => {
  try {
    const snapshot = await firestore().collection(CATEGORIES_COLLECTION).get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as MeditationCategory[];
  } catch (error) {
    console.error("Error fetching meditation categories:", error);
    throw error;
  }
};

/**
 * Get meditation metadata (tags, pregnancy stages)
 */
export const getMeditationMetadata = async (): Promise<{
  tags: string[];
  pregnancyStages: any[];
  lastUpdated?: any;
}> => {
  try {
    const doc = await firestore()
      .collection(METADATA_COLLECTION)
      .doc("config")
      .get();

    if (!doc.exists) {
      return { tags: [], pregnancyStages: [] };
    }

    return doc.data() as {
      tags: string[];
      pregnancyStages: any[];
      lastUpdated?: any;
    };
  } catch (error) {
    console.error("Error fetching meditation metadata:", error);
    throw error;
  }
};

/**
 * Search meditations by title or description
 */
export const searchMeditations = async (
  query: string,
): Promise<MeditationAudio[]> => {
  try {
    // Note: This is a simple search. For production, consider using Algolia or similar
    const snapshot = await firestore().collection(MEDITATION_COLLECTION).get();

    const allMeditations = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as MeditationAudio[];

    // Filter by search query
    const searchLower = query.toLowerCase();
    return allMeditations.filter(
      (meditation) =>
        meditation.title.toLowerCase().includes(searchLower) ||
        meditation.description.toLowerCase().includes(searchLower),
    );
  } catch (error) {
    console.error("Error searching meditations:", error);
    throw error;
  }
};

/**
 * Get featured meditation (first by creation date)
 */
export const getFeaturedMeditation =
  async (): Promise<MeditationAudio | null> => {
    try {
      const snapshot = await firestore()
        .collection(MEDITATION_COLLECTION)
        .orderBy("createdAt", "desc")
        .limit(1)
        .get();

      if (snapshot.empty) {
        return null;
      }

      const doc = snapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
      } as MeditationAudio;
    } catch (error) {
      console.error("Error fetching featured meditation:", error);
      throw error;
    }
  };
