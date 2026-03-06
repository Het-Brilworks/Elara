import firestore from "@react-native-firebase/firestore";

const FAVORITES_COLLECTION = "favorites";

export interface Favorite {
  id: string;
  userId: string;
  itemId: string;
  itemType: "meditation" | "yoga";
  favoritedAt: any;
}

/**
 * Add item to favorites
 */
export const addToFavorites = async (
  userId: string,
  itemId: string,
  itemType: "meditation" | "yoga",
): Promise<{ success: boolean; error?: string }> => {
  try {
    const favoriteId = `${userId}_${itemType}_${itemId}`;

    await firestore().collection(FAVORITES_COLLECTION).doc(favoriteId).set({
      userId,
      itemId,
      itemType,
      favoritedAt: firestore.FieldValue.serverTimestamp(),
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error adding to favorites:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Remove item from favorites
 */
export const removeFromFavorites = async (
  userId: string,
  itemId: string,
  itemType: "meditation" | "yoga",
): Promise<{ success: boolean; error?: string }> => {
  try {
    const favoriteId = `${userId}_${itemType}_${itemId}`;

    await firestore().collection(FAVORITES_COLLECTION).doc(favoriteId).delete();

    return { success: true };
  } catch (error: any) {
    console.error("Error removing from favorites:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Check if item is favorited
 */
export const checkIsFavorited = async (
  userId: string,
  itemId: string,
  itemType: "meditation" | "yoga",
): Promise<boolean> => {
  try {
    const favoriteId = `${userId}_${itemType}_${itemId}`;

    const docSnapshot = await firestore()
      .collection(FAVORITES_COLLECTION)
      .doc(favoriteId)
      .get();

    return docSnapshot.data() !== undefined;
  } catch (error) {
    console.error("Error checking favorite status:", error);
    return false;
  }
};

/**
 * Get all user favorites by type
 */
export const getUserFavorites = async (
  userId: string,
  itemType: "meditation" | "yoga",
): Promise<string[]> => {
  try {
    const snapshot = await firestore()
      .collection(FAVORITES_COLLECTION)
      .where("userId", "==", userId)
      .where("itemType", "==", itemType)
      .get();

    return snapshot.docs.map((doc) => doc.data().itemId);
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    return [];
  }
};

/**
 * Get all user favorites (both types)
 */
export const getAllUserFavorites = async (
  userId: string,
): Promise<Favorite[]> => {
  try {
    const snapshot = await firestore()
      .collection(FAVORITES_COLLECTION)
      .where("userId", "==", userId)
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Favorite[];
  } catch (error) {
    console.error("Error fetching all favorites:", error);
    return [];
  }
};

/**
 * Toggle favorite status
 */
export const toggleFavorite = async (
  userId: string,
  itemId: string,
  itemType: "meditation" | "yoga",
): Promise<{ success: boolean; isFavorited: boolean; error?: string }> => {
  try {
    const favorited = await checkIsFavorited(userId, itemId, itemType);

    if (favorited) {
      const result = await removeFromFavorites(userId, itemId, itemType);
      return { ...result, isFavorited: false };
    } else {
      const result = await addToFavorites(userId, itemId, itemType);
      return { ...result, isFavorited: true };
    }
  } catch (error: any) {
    console.error("Error toggling favorite:", error);
    return { success: false, isFavorited: false, error: error.message };
  }
};

// Backward compatibility export
export const isFavorited = checkIsFavorited;
