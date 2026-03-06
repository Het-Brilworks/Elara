import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "@react-native-firebase/auth";
import {
    doc,
    getDoc,
    serverTimestamp,
    setDoc,
    updateDoc,
} from "@react-native-firebase/firestore";
import { auth, firestore } from "../firebase";
import { cleanupFCM, initializeFCM } from "./NotificationService";

// Helper function to parse Firebase auth errors
const parseAuthError = (error: any): string => {
  const code = error?.code || "";

  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already registered. Please login instead.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Please check your connection.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    default:
      return error?.message || "An error occurred. Please try again.";
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Initialize FCM and save token (non-blocking)
    // If FCM fails, we still allow login to succeed
    initializeFCM(user.uid).catch((error) => {
      console.warn("FCM initialization failed, but login succeeded:", error);
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseAuthError(error) };
  }
};

export const register = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Update profile with display name
    await updateProfile(user, {
      displayName: name,
    });

    // Create user document in Firestore
    const userRef = doc(firestore, "users", user.uid);
    await setDoc(userRef, {
      email: email,
      name: name,
      createdAt: serverTimestamp(),
      isVerified: false,
      isProfileCompleted: false,
      isDeleted: false,
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseAuthError(error) };
  }
};

export const logout = async () => {
  try {
    const user = auth.currentUser;

    // Remove FCM token before signing out (non-blocking)
    // If FCM cleanup fails, we still allow logout to succeed
    if (user) {
      cleanupFCM(user.uid).catch((error) => {
        console.warn("FCM cleanup failed, but logout succeeded:", error);
      });
    }

    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseAuthError(error) };
  }
};

export const getUserData = async (uid: string) => {
  try {
    const userRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(userRef);
    return { success: true, data: docSnap.data() };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const updateProfileCompletion = async (uid: string, stage: string) => {
  try {
    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, {
      isProfileCompleted: true,
      selectedJourney: stage,
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseAuthError(error) };
  }
};
