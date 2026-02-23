import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
    getUserProfile,
    subscribeToUserProfile,
    updatePregnancyWeek,
    updateUserProfile,
    uploadProfilePicture,
    UserProfile,
} from "../services/UserService";

// Hook to fetch user profile
export const useUserProfile = (uid: string | undefined) => {
  return useQuery({
    queryKey: ["userProfile", uid],
    queryFn: async () => {
      if (!uid) return null;
      const result = await getUserProfile(uid);
      return result.success ? result.data : null;
    },
    enabled: !!uid,
  });
};

// Hook to subscribe to real-time user profile updates
export const useUserProfileSubscription = (uid: string | undefined) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = subscribeToUserProfile(uid, (updatedProfile) => {
      setProfile(updatedProfile);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [uid]);

  return { profile, loading };
};

// Hook to update user profile
export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      uid,
      updates,
    }: {
      uid: string;
      updates: Partial<UserProfile>;
    }) => updateUserProfile(uid, updates),
    onSuccess: (_, variables) => {
      // Invalidate and refetch user profile
      queryClient.invalidateQueries({
        queryKey: ["userProfile", variables.uid],
      });
    },
  });
};

// Hook to update pregnancy week
export const useUpdatePregnancyWeek = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ uid, week }: { uid: string; week: number }) =>
      updatePregnancyWeek(uid, week),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["userProfile", variables.uid],
      });
    },
  });
};

// Hook to upload profile picture
export const useUploadProfilePicture = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ uid, imageUri }: { uid: string; imageUri: string }) =>
      uploadProfilePicture(uid, imageUri),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["userProfile", variables.uid],
      });
    },
  });
};
