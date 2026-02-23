import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  calculateStreakStats,
  getAllJournalEntries,
  getJournalEntry,
  getLastNDaysJournal,
  getTodayJournalEntry,
  JournalEntry,
  saveMoodEntry,
  subscribeToTodayJournal,
  updateJournalInfo,
} from "../services/JournalService";

// Hook to update journal info
export const useUpdateJournalInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ uid, info }: { uid: string; info: string }) =>
      updateJournalInfo(uid, info),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["todayJournal", variables.uid],
      });
      queryClient.invalidateQueries({
        queryKey: ["lastNDaysJournal", variables.uid],
      });
    },
  });
};

// Hook to save mood entry
export const useSaveMoodEntry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      uid,
      mood,
      info,
    }: {
      uid: string;
      mood: string;
      info?: string;
    }) => saveMoodEntry(uid, mood, info),
    onSuccess: (_, variables) => {
      // Invalidate today's journal entry
      queryClient.invalidateQueries({
        queryKey: ["todayJournal", variables.uid],
      });
      queryClient.invalidateQueries({
        queryKey: ["allJournals", variables.uid],
      });
      queryClient.invalidateQueries({
        queryKey: ["lastNDaysJournal", variables.uid],
      });
      queryClient.invalidateQueries({
        queryKey: ["streakStats", variables.uid],
      });
    },
  });
};

// Hook to get today's journal entry
export const useTodayJournal = (uid: string | undefined) => {
  return useQuery({
    queryKey: ["todayJournal", uid],
    queryFn: async () => {
      if (!uid) return null;
      const result = await getTodayJournalEntry(uid);
      return result.success ? result.data : null;
    },
    enabled: !!uid,
  });
};

// Hook to get journal entry for a specific date
export const useJournalEntry = (uid: string | undefined, date: Date) => {
  return useQuery({
    queryKey: ["journalEntry", uid, date.toISOString()],
    queryFn: async () => {
      if (!uid) return null;
      const result = await getJournalEntry(uid, date);
      return result.success ? result.data : null;
    },
    enabled: !!uid,
  });
};

// Hook to get all journal entries
export const useAllJournalEntries = (uid: string | undefined) => {
  return useQuery({
    queryKey: ["allJournals", uid],
    queryFn: async () => {
      if (!uid) return null;
      const result = await getAllJournalEntries(uid);
      return result.success ? result.data : null;
    },
    enabled: !!uid,
  });
};

// Hook to subscribe to today's journal entry in real-time
export const useTodayJournalSubscription = (uid: string | undefined) => {
  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = subscribeToTodayJournal(uid, (updatedEntry) => {
      setEntry(updatedEntry);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [uid]);

  return { entry, loading };
};

// Hook to get last N days journal entries
export const useLastNDaysJournal = (
  uid: string | undefined,
  days: number = 7,
) => {
  return useQuery({
    queryKey: ["lastNDaysJournal", uid, days],
    queryFn: async () => {
      if (!uid) return null;
      const result = await getLastNDaysJournal(uid, days);
      return result.success ? result.data : null;
    },
    enabled: !!uid,
  });
};

// Hook to get streak statistics
export const useStreakStats = (uid: string | undefined) => {
  return useQuery({
    queryKey: ["streakStats", uid],
    queryFn: async () => {
      if (!uid) return { currentStreak: 0, previousBest: 0 };
      const result = await calculateStreakStats(uid);
      return result.success
        ? {
          currentStreak: result.currentStreak,
          previousBest: result.previousBest,
        }
        : { currentStreak: 0, previousBest: 0 };
    },
    enabled: !!uid,
  });
};
