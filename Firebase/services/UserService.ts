import {
    doc,
    getDoc,
    onSnapshot,
    serverTimestamp,
    updateDoc,
} from "@react-native-firebase/firestore";
import { firestore } from "../firebase";
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
    const userRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      return { success: false, error: "User profile not found" };
    }
    return { success: true, data: { uid, ...docSnap.data() } as UserProfile };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

export const updateUserProfile = async (
  uid: string,
  updates: Partial<UserProfile>,
) => {
  try {
    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

export const updatePregnancyWeek = async (uid: string, week: number) => {
  try {
    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, {
      pregnancyWeek: week,
      updatedAt: serverTimestamp(),
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
    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, {
      photoURL: imageUri,
      updatedAt: serverTimestamp(),
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
  const userRef = doc(firestore, "users", uid);
  return onSnapshot(
    userRef,
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
