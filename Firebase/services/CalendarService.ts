import firestore from "@react-native-firebase/firestore";

const EVENTS_COLLECTION = "events";
const NOTIFICATIONS_COLLECTION = "notifications";

export interface CalendarEvent {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD format
  title: string;
  time: string;
  type: "appointment" | "milestone" | "reminder" | "personal";
  createdAt: any;
}

export interface EventNotification {
  id?: string;
  userId: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  notificationDate: string; // YYYY-MM-DD format
  notificationType: "day_before" | "same_day";
  isRead: boolean;
  createdAt: any;
}

/**
 * Create a calendar event
 */
export const createEvent = async (
  userId: string,
  eventData: Omit<CalendarEvent, "id" | "userId" | "createdAt">,
): Promise<{ success: boolean; eventId?: string; error?: string }> => {
  try {
    // Create the event
    const eventRef = await firestore()
      .collection(EVENTS_COLLECTION)
      .add({
        userId,
        ...eventData,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

    // Create notifications for the event
    await createEventNotifications(
      userId,
      eventRef.id,
      eventData.title,
      eventData.date,
    );

    return { success: true, eventId: eventRef.id };
  } catch (error: any) {
    console.error("Error creating event:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Create notification documents for an event
 * - One for the day before
 * - One for the same day
 */
const createEventNotifications = async (
  userId: string,
  eventId: string,
  eventTitle: string,
  eventDate: string,
): Promise<void> => {
  try {
    const eventDateObj = new Date(eventDate);

    // Create notification for the day before
    const dayBefore = new Date(eventDateObj);
    dayBefore.setDate(dayBefore.getDate() - 1);
    const dayBeforeString = dayBefore.toISOString().split("T")[0];

    await firestore().collection(NOTIFICATIONS_COLLECTION).add({
      userId,
      eventId,
      eventTitle,
      eventDate,
      notificationDate: dayBeforeString,
      notificationType: "day_before",
      isRead: false,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });

    // Create notification for the same day
    await firestore().collection(NOTIFICATIONS_COLLECTION).add({
      userId,
      eventId,
      eventTitle,
      eventDate,
      notificationDate: eventDate,
      notificationType: "same_day",
      isRead: false,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error("Error creating event notifications:", error);
  }
};

/**
 * Get all events for a user
 */
export const getUserEvents = async (
  userId: string,
): Promise<CalendarEvent[]> => {
  try {
    const snapshot = await firestore()
      .collection(EVENTS_COLLECTION)
      .where("userId", "==", userId)
      .orderBy("date", "asc")
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as CalendarEvent[];
  } catch (error) {
    console.error("Error fetching user events:", error);
    return [];
  }
};

/**
 * Get events for a specific date
 */
export const getEventsByDate = async (
  userId: string,
  date: string,
): Promise<CalendarEvent[]> => {
  try {
    const snapshot = await firestore()
      .collection(EVENTS_COLLECTION)
      .where("userId", "==", userId)
      .where("date", "==", date)
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as CalendarEvent[];
  } catch (error) {
    console.error("Error fetching events by date:", error);
    return [];
  }
};

/**
 * Update an event
 */
export const updateEvent = async (
  eventId: string,
  updates: Partial<Omit<CalendarEvent, "id" | "userId" | "createdAt">>,
): Promise<{ success: boolean; error?: string }> => {
  try {
    await firestore()
      .collection(EVENTS_COLLECTION)
      .doc(eventId)
      .update(updates);

    // If date changed, update notifications
    if (updates.date) {
      const eventDoc = await firestore()
        .collection(EVENTS_COLLECTION)
        .doc(eventId)
        .get();
      const eventData = eventDoc.data();

      if (eventData) {
        // Delete old notifications
        await deleteEventNotifications(eventId);

        // Create new notifications
        await createEventNotifications(
          eventData.userId,
          eventId,
          updates.title || eventData.title,
          updates.date,
        );
      }
    }

    return { success: true };
  } catch (error: any) {
    console.error("Error updating event:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete an event
 */
export const deleteEvent = async (
  eventId: string,
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Delete the event
    await firestore().collection(EVENTS_COLLECTION).doc(eventId).delete();

    // Delete associated notifications
    await deleteEventNotifications(eventId);

    return { success: true };
  } catch (error: any) {
    console.error("Error deleting event:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete all notifications for an event
 */
const deleteEventNotifications = async (eventId: string): Promise<void> => {
  try {
    const snapshot = await firestore()
      .collection(NOTIFICATIONS_COLLECTION)
      .where("eventId", "==", eventId)
      .get();

    const batch = firestore().batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
  } catch (error) {
    console.error("Error deleting event notifications:", error);
  }
};

/**
 * Get notifications for a specific date
 */
export const getNotificationsByDate = async (
  userId: string,
  date: string,
): Promise<EventNotification[]> => {
  try {
    const snapshot = await firestore()
      .collection(NOTIFICATIONS_COLLECTION)
      .where("userId", "==", userId)
      .where("notificationDate", "==", date)
      .where("isRead", "==", false)
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as EventNotification[];
  } catch (error) {
    console.error("Error fetching notifications by date:", error);
    return [];
  }
};

/**
 * Mark notification as read
 */
export const markNotificationAsRead = async (
  notificationId: string,
): Promise<{ success: boolean; error?: string }> => {
  try {
    await firestore()
      .collection(NOTIFICATIONS_COLLECTION)
      .doc(notificationId)
      .update({
        isRead: true,
      });

    return { success: true };
  } catch (error: any) {
    console.error("Error marking notification as read:", error);
    return { success: false, error: error.message };
  }
};
