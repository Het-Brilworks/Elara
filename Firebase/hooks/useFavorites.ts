import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    addToFavorites,
    getAllUserFavorites,
    getUserFavorites,
    removeFromFavorites,
    toggleFavorite,
} from "../services/FavoriteService";

export const FAVORITES_QUERY_KEY = "favorites";

/**
 * Hook to get user's meditation favorites
 */
export const useMeditationFavorites = (userId: string | undefined) => {
  return useQuery<string[], Error>({
    queryKey: [FAVORITES_QUERY_KEY, userId, "meditation"],
    queryFn: () => getUserFavorites(userId!, "meditation"),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to get user's yoga favorites
 */
export const useYogaFavorites = (userId: string | undefined) => {
  return useQuery<string[], Error>({
    queryKey: [FAVORITES_QUERY_KEY, userId, "yoga"],
    queryFn: () => getUserFavorites(userId!, "yoga"),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to get all user favorites
 */
export const useAllFavorites = (userId: string | undefined) => {
  return useQuery({
    queryKey: [FAVORITES_QUERY_KEY, userId, "all"],
    queryFn: () => getAllUserFavorites(userId!),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to add item to favorites
 */
export const useAddToFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      itemId,
      itemType,
    }: {
      userId: string;
      itemId: string;
      itemType: "meditation" | "yoga";
    }) => addToFavorites(userId, itemId, itemType),
    onMutate: async ({ userId, itemId, itemType }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({
        queryKey: [FAVORITES_QUERY_KEY, userId, itemType],
      });

      // Snapshot previous value
      const previousFavorites = queryClient.getQueryData<string[]>([
        FAVORITES_QUERY_KEY,
        userId,
        itemType,
      ]);

      // Optimistically update
      queryClient.setQueryData<string[]>(
        [FAVORITES_QUERY_KEY, userId, itemType],
        (old) => (old ? [itemId, ...old] : [itemId]),
      );

      return { previousFavorites };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousFavorites) {
        queryClient.setQueryData(
          [FAVORITES_QUERY_KEY, variables.userId, variables.itemType],
          context.previousFavorites,
        );
      }
    },
    onSettled: (data, error, variables) => {
      // Refetch to ensure consistency
      queryClient.invalidateQueries({
        queryKey: [FAVORITES_QUERY_KEY, variables.userId, variables.itemType],
      });
      queryClient.invalidateQueries({
        queryKey: [FAVORITES_QUERY_KEY, variables.userId, "all"],
      });
    },
  });
};

/**
 * Hook to remove item from favorites
 */
export const useRemoveFromFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      itemId,
      itemType,
    }: {
      userId: string;
      itemId: string;
      itemType: "meditation" | "yoga";
    }) => removeFromFavorites(userId, itemId, itemType),
    onMutate: async ({ userId, itemId, itemType }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({
        queryKey: [FAVORITES_QUERY_KEY, userId, itemType],
      });

      // Snapshot previous value
      const previousFavorites = queryClient.getQueryData<string[]>([
        FAVORITES_QUERY_KEY,
        userId,
        itemType,
      ]);

      // Optimistically update
      queryClient.setQueryData<string[]>(
        [FAVORITES_QUERY_KEY, userId, itemType],
        (old) => (old ? old.filter((id) => id !== itemId) : []),
      );

      return { previousFavorites };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousFavorites) {
        queryClient.setQueryData(
          [FAVORITES_QUERY_KEY, variables.userId, variables.itemType],
          context.previousFavorites,
        );
      }
    },
    onSettled: (data, error, variables) => {
      // Refetch to ensure consistency
      queryClient.invalidateQueries({
        queryKey: [FAVORITES_QUERY_KEY, variables.userId, variables.itemType],
      });
      queryClient.invalidateQueries({
        queryKey: [FAVORITES_QUERY_KEY, variables.userId, "all"],
      });
    },
  });
};

/**
 * Hook to toggle favorite status with optimistic updates
 */
export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      itemId,
      itemType,
    }: {
      userId: string;
      itemId: string;
      itemType: "meditation" | "yoga";
    }) => toggleFavorite(userId, itemId, itemType),
    onMutate: async ({ userId, itemId, itemType }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({
        queryKey: [FAVORITES_QUERY_KEY, userId, itemType],
      });

      // Snapshot previous value
      const previousFavorites = queryClient.getQueryData<string[]>([
        FAVORITES_QUERY_KEY,
        userId,
        itemType,
      ]);

      // Optimistically update (toggle)
      queryClient.setQueryData<string[]>(
        [FAVORITES_QUERY_KEY, userId, itemType],
        (old) => {
          if (!old) return [itemId];
          if (old.includes(itemId)) {
            return old.filter((id) => id !== itemId);
          } else {
            return [itemId, ...old];
          }
        },
      );

      return { previousFavorites };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousFavorites) {
        queryClient.setQueryData(
          [FAVORITES_QUERY_KEY, variables.userId, variables.itemType],
          context.previousFavorites,
        );
      }
    },
    onSettled: (data, error, variables) => {
      // Refetch to ensure consistency
      queryClient.invalidateQueries({
        queryKey: [FAVORITES_QUERY_KEY, variables.userId, variables.itemType],
      });
      queryClient.invalidateQueries({
        queryKey: [FAVORITES_QUERY_KEY, variables.userId, "all"],
      });
    },
  });
};

/**
 * Hook to check if item is favorited (using cached data for instant response)
 */
export const useIsFavorited = (
  userId: string | undefined,
  itemId: string,
  itemType: "meditation" | "yoga",
): boolean => {
  const { data: favorites = [] } = useQuery<string[], Error>({
    queryKey: [FAVORITES_QUERY_KEY, userId, itemType],
    queryFn: () => getUserFavorites(userId!, itemType),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return favorites.includes(itemId);
};
