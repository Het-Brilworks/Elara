import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

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
    await auth().signInWithEmailAndPassword(email, password);
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
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;

    // Update profile with display name
    await user.updateProfile({
      displayName: name,
    });

    // Create user document in Firestore
    await firestore().collection("users").doc(user.uid).set({
      email: email,
      name: name,
      createdAt: firestore.FieldValue.serverTimestamp(),
      isVerified: false,
      isProfileCompleted: false,
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseAuthError(error) };
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseAuthError(error) };
  }
};

export const getUserData = async (uid: string) => {
  try {
    const doc = await firestore().collection("users").doc(uid).get();
    return { success: true, data: doc.data() };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const updateProfileCompletion = async (uid: string, stage: string) => {
  try {
    await firestore().collection("users").doc(uid).update({
      isProfileCompleted: true,
      selectedJourney: stage,
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

