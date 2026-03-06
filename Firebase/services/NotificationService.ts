import firestore from "@react-native-firebase/firestore";
import messaging from "@react-native-firebase/messaging";

/**
 * Request notification permissions
 */
export const requestNotificationPermission = async (): Promise<boolean> => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    return enabled;
  } catch (error) {
    console.error("Error requesting notification permission:", error);
    return false;
  }
};

/**
 * Get FCM token
 */
export const getFCMToken = async (): Promise<string | null> => {
  try {
    const token = await messaging().getToken();
    return token;
  } catch (error) {
    console.error("Error getting FCM token:", error);
    return null;
  }
};

/**
 * Save FCM token to user document
 */
export const saveFCMToken = async (
  userId: string,
  token: string,
): Promise<{ success: boolean; error?: string }> => {
  try {
    await firestore().collection("users").doc(userId).update({
      fcmToken: token,
      fcmTokenUpdatedAt: firestore.FieldValue.serverTimestamp(),
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error saving FCM token:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Remove FCM token from user document
 */
export const removeFCMToken = async (
  userId: string,
): Promise<{ success: boolean; error?: string }> => {
  try {
    await firestore().collection("users").doc(userId).update({
      fcmToken: null,
      fcmTokenUpdatedAt: firestore.FieldValue.serverTimestamp(),
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error removing FCM token:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Initialize FCM for a user (called on login)
 */
export const initializeFCM = async (
  userId: string,
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Request permission
    const hasPermission = await requestNotificationPermission();
    if (!hasPermission) {
      return { success: false, error: "Notification permission denied" };
    }

    // Get token
    const token = await getFCMToken();
    if (!token) {
      return { success: false, error: "Failed to get FCM token" };
    }

    // Save token to user document
    await saveFCMToken(userId, token);

    // Listen for token refresh
    messaging().onTokenRefresh(async (newToken: string) => {
      await saveFCMToken(userId, newToken);
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error initializing FCM:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Clean up FCM on logout
 */
export const cleanupFCM = async (
  userId: string,
): Promise<{ success: boolean; error?: string }> => {
  try {
    await removeFCMToken(userId);
    return { success: true };
  } catch (error: any) {
    console.error("Error cleaning up FCM:", error);
    return { success: false, error: error.message };
  }
};
