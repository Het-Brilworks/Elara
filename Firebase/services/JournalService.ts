import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "@react-native-firebase/firestore";
import { firestore } from "../firebase";

export interface JournalEntry {
  mood: string;
  info?: string;
  created_at: any;
  updated_at?: any;
}

// Helper function to format date as DD-MM-YYYY
const formatDateAsDocId = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Helper function to parse Firestore errors
const parseFirestoreError = (error: any): string => {
  const code = error?.code || "";

  switch (code) {
    case "permission-denied":
      return "You don't have permission to perform this action.";
    case "not-found":
      return "Journal entry not found.";
    case "unavailable":
      return "Service temporarily unavailable. Please try again.";
    default:
      return error?.message || "An error occurred. Please try again.";
  }
};

// Create or update journal entry for today
export const saveMoodEntry = async (
  uid: string,
  mood: string,
  info?: string,
) => {
  try {
    const today = new Date();
    const docId = formatDateAsDocId(today);

    const journalRef = doc(firestore, "users", uid, "journal", docId);
    await setDoc(
      journalRef,
      {
        mood,
        info: info || "",
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      },
      { merge: true },
    );

    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

// Update journal info for today
export const updateJournalInfo = async (uid: string, info: string) => {
  try {
    const today = new Date();
    const docId = formatDateAsDocId(today);

    const journalRef = doc(firestore, "users", uid, "journal", docId);
    await setDoc(
      journalRef,
      {
        info,
        updated_at: serverTimestamp(),
      },
      { merge: true },
    );

    return { success: true };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

// Get journal entry for a specific date
export const getJournalEntry = async (uid: string, date: Date) => {
  try {
    const docId = formatDateAsDocId(date);
    const journalRef = doc(firestore, "users", uid, "journal", docId);
    const docSnap = await getDoc(journalRef);

    if (!docSnap.exists()) {
      return { success: true, data: null };
    }

    return { success: true, data: docSnap.data() as JournalEntry };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

// Get journal entry for today
export const getTodayJournalEntry = async (uid: string) => {
  return getJournalEntry(uid, new Date());
};

// Get all journal entries for a user
export const getAllJournalEntries = async (uid: string) => {
  try {
    const journalCol = collection(firestore, "users", uid, "journal");
    const q = query(journalCol, orderBy("created_at", "desc"));
    const snapshot = await getDocs(q);

    const entries = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { success: true, data: entries };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

// Subscribe to today's journal entry
export const subscribeToTodayJournal = (
  uid: string,
  onUpdate: (entry: JournalEntry | null) => void,
) => {
  const today = new Date();
  const docId = formatDateAsDocId(today);

  const journalRef = doc(firestore, "users", uid, "journal", docId);
  return onSnapshot(
    journalRef,
    (doc) => {
      if (doc.exists()) {
        onUpdate(doc.data() as JournalEntry);
      } else {
        onUpdate(null);
      }
    },
    (error) => {
      console.error("Error subscribing to journal entry:", error);
      onUpdate(null);
    },
  );
};

// Get journal entries for the last N days
export const getLastNDaysJournal = async (uid: string, days: number = 7) => {
  try {
    const entries: { [key: string]: JournalEntry } = {};
    const today = new Date();

    // Fetch entries for the last N days
    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const docId = formatDateAsDocId(date);

      const journalRef = doc(firestore, "users", uid, "journal", docId);
      const docSnap = await getDoc(journalRef);

      if (docSnap.exists()) {
        entries[docId] = docSnap.data() as JournalEntry;
      }
    }

    return { success: true, data: entries };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};

// Calculate streak statistics
export const calculateStreakStats = async (uid: string) => {
  try {
    // Get all journal entries
    const result = await getAllJournalEntries(uid);
    if (!result.success || !result.data) {
      return { success: true, currentStreak: 0, previousBest: 0 };
    }

    const entries = result.data;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Create a set of all dates with entries
    const entryDates = new Set(
      entries.map((entry: any) => entry.id), // id is the date in DD-MM-YYYY format
    );

    // Calculate current streak (counting backwards from today)
    let currentStreak = 0;
    let checkDate = new Date(today);

    while (true) {
      const dateStr = formatDateAsDocId(checkDate);
      if (entryDates.has(dateStr)) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    // Calculate previous best streak
    let maxStreak = currentStreak;
    let tempStreak = 0;
    const sortedDates = Array.from(entryDates).sort().reverse(); // Sort dates in descending order

    // Convert DD-MM-YYYY to Date for comparison
    const parseDateStr = (dateStr: string): Date => {
      const [day, month, year] = dateStr.split("-").map(Number);
      return new Date(year, month - 1, day);
    };

    for (let i = 0; i < sortedDates.length; i++) {
      if (i === 0) {
        tempStreak = 1;
      } else {
        const currentDate = parseDateStr(sortedDates[i]);
        const prevDate = parseDateStr(sortedDates[i - 1]);
        const dayDiff = Math.floor(
          (prevDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24),
        );

        if (dayDiff === 1) {
          tempStreak++;
          maxStreak = Math.max(maxStreak, tempStreak);
        } else {
          tempStreak = 1;
        }
      }
    }

    return { success: true, currentStreak, previousBest: maxStreak };
  } catch (error: any) {
    return { success: false, error: parseFirestoreError(error) };
  }
};
