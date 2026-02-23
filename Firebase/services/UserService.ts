import firestore from "@react-native-firebase/firestore";
// import storage from "@react-native-firebase/storage";

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  photoURL?: string;
  pregnancyWeek?: number;
  dueDate?: Date;
  createdAt: any;
  isVerified: boolean;
  isProfileCompleted: boolean;
  selectedJourney?: string;
}

// Helper function to parse Firestore errors
const parseFirestoreError = (error: any): string => {
  const code = error?.code || "";

  switch (code) {
    case "permission-denied":
      return "You don't have permission to perform this action.";
    case "not-found":
      return "User profile not found.";
    case "unavailable":
      return "Service temporarily unavailable. Please try again.";
    default:
      return error?.message || "An error occurred. Please try again.";
  }
};

export const getUserProfile = async (uid: string) => {
  try {
    const doc = await firestore().collection("users").doc(uid).get();
    if (!doc.exists()) {
      return { success: false, error: "User profile not found" };
    }
    return { success: true, data: { uid, ...doc.data() } as UserProfile };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

export const updateUserProfile = async (
  uid: string,
  updates: Partial<UserProfile>,
) => {
  try {
    await firestore()
      .collection("users")
      .doc(uid)
      .update({
        ...updates,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

export const updatePregnancyWeek = async (uid: string, week: number) => {
  try {
    await firestore().collection("users").doc(uid).update({
      pregnancyWeek: week,
      updatedAt: firestore.FieldValue.serverTimestamp(),
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

export const uploadProfilePicture = async (uid: string, imageUri: string) => {
  try {
    // Note: Requires @react-native-firebase/storage to be installed
    // const filename = `profile_${uid}_${Date.now()}.jpg`;
    // const reference = storage().ref(`users/${uid}/${filename}`);
    // await reference.putFile(imageUri);
    // const photoURL = await reference.getDownloadURL();

    // For now, update with the provided URI (TODO: implement storage upload)
    await firestore().collection("users").doc(uid).update({
      photoURL: imageUri,
      updatedAt: firestore.FieldValue.serverTimestamp(),
    });

    return { success: true, photoURL: imageUri };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

export const subscribeToUserProfile = (
  uid: string,
  onUpdate: (profile: UserProfile | null) => void,
) => {
  return firestore()
    .collection("users")
    .doc(uid)
    .onSnapshot(
      (doc) => {
        if (doc.exists()) {
          onUpdate({ uid, ...doc.data() } as UserProfile);
        } else {
          onUpdate(null);
        }
      },
      (error) => {
        console.error("Error subscribing to user profile:", error);
        onUpdate(null);
      },
    );
};
