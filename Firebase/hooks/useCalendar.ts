import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CalendarEvent,
  createEvent,
  deleteEvent,
  getEventsByDate,
  getUserEvents,
  updateEvent,
} from "../services/CalendarService";

export const CALENDAR_QUERY_KEY = "calendar";

/**
 * Hook to get all user events
 */
export const useUserEvents = (userId: string | undefined) => {
  return useQuery<CalendarEvent[], Error>({
    queryKey: [CALENDAR_QUERY_KEY, userId, "all"],
    queryFn: () => getUserEvents(userId!),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to get events for a specific date
 */
export const useEventsByDate = (
  userId: string | undefined,
  date: string | undefined,
) => {
  return useQuery<CalendarEvent[], Error>({
    queryKey: [CALENDAR_QUERY_KEY, userId, "date", date],
    queryFn: () => getEventsByDate(userId!, date!),
    enabled: !!userId && !!date,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to create a new event
 */
export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      eventData,
    }: {
      userId: string;
      eventData: Omit<CalendarEvent, "id" | "userId" | "createdAt">;
    }) => createEvent(userId, eventData),
    onSuccess: (data, variables) => {
      // Invalidate all calendar queries for this user
      queryClient.invalidateQueries({
        queryKey: [CALENDAR_QUERY_KEY, variables.userId],
      });
    },
  });
};

/**
 * Hook to update an event
 */
export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      eventId,
      updates,
      userId,
    }: {
      eventId: string;
      updates: Partial<Omit<CalendarEvent, "id" | "userId" | "createdAt">>;
      userId: string;
    }) => updateEvent(eventId, updates),
    onSuccess: (data, variables) => {
      // Invalidate calendar queries
      queryClient.invalidateQueries({
        queryKey: [CALENDAR_QUERY_KEY, variables.userId],
      });
    },
  });
};

/**
 * Hook to delete an event
 */
export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ eventId, userId }: { eventId: string; userId: string }) =>
      deleteEvent(eventId),
    onMutate: async ({ eventId, userId }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({
        queryKey: [CALENDAR_QUERY_KEY, userId],
      });

      // Snapshot previous value
      const previousEvents = queryClient.getQueryData<CalendarEvent[]>([
        CALENDAR_QUERY_KEY,
        userId,
        "all",
      ]);

      // Optimistically update
      queryClient.setQueryData<CalendarEvent[]>(
        [CALENDAR_QUERY_KEY, userId, "all"],
        (old) => old?.filter((event) => event.id !== eventId) || [],
      );

      return { previousEvents };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousEvents) {
        queryClient.setQueryData(
          [CALENDAR_QUERY_KEY, variables.userId, "all"],
          context.previousEvents,
        );
      }
    },
    onSettled: (data, error, variables) => {
      // Refetch to ensure consistency
      queryClient.invalidateQueries({
        queryKey: [CALENDAR_QUERY_KEY, variables.userId],
      });
    },
  });
};
