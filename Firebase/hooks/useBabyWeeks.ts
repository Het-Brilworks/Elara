import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    BabyWeek,
    getAllBabyWeeks,
    getBabyWeekByNumber,
    uploadBabyWeek,
} from "../services/BabyWeekService";

export const BABY_WEEKS_QUERY_KEY = "babyWeeks";

/**
 * Hook to get all baby weeks
 */
export const useAllBabyWeeks = () => {
  return useQuery<BabyWeek[], Error>({
    queryKey: [BABY_WEEKS_QUERY_KEY],
    queryFn: getAllBabyWeeks,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

/**
 * Hook to get a specific baby week by number
 */
export const useBabyWeekByNumber = (week: number) => {
  return useQuery<BabyWeek | null, Error>({
    queryKey: [BABY_WEEKS_QUERY_KEY, week],
    queryFn: () => getBabyWeekByNumber(week),
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: week > 0 && week <= 43,
  });
};

/**
 * Hook to upload a baby week image and create document
 */
export const useUploadBabyWeek = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ imageUri, week }: { imageUri: string; week: number }) =>
      uploadBabyWeek(imageUri, week),
    onSuccess: () => {
      // Invalidate all baby weeks queries
      queryClient.invalidateQueries({ queryKey: [BABY_WEEKS_QUERY_KEY] });
    },
  });
};
