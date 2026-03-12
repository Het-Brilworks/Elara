import { COLORS } from "@/constants/colors";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import {
    useAllJournalEntries,
    useJournalEntry,
} from "@/Firebase/hooks/useJournal";
import { useRouter } from "expo-router";
import {
    ArrowLeft,
    BookOpen,
    ChevronLeft,
    ChevronRight,
} from "lucide-react-native";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JournalHistoryScreen() {
  const router = useRouter();
  const { user } = useAuthState();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Fetch all journal entries to show dots on calendar
  const { data: allJournalEntries = [], isLoading: entriesLoading } =
    useAllJournalEntries(user?.uid);

  // Fetch journal entry for selected date
  const { data: selectedJournalEntry, isLoading: entryLoading } =
    useJournalEntry(user?.uid, selectedDate);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const formatDateAsDocId = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return formatDate(date1) === formatDate(date2);
  };

  const isToday = (day: number | null) => {
    if (!day) return false;
    const checkDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    return isSameDay(checkDate, new Date());
  };

  const isSelectedDay = (day: number | null) => {
    if (!day) return false;
    const checkDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    return isSameDay(checkDate, selectedDate);
  };

  const hasJournalEntry = (day: number | null) => {
    if (!day) return false;
    const checkDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    const dateString = formatDateAsDocId(checkDate);
    return allJournalEntries.some((entry: any) => entry.id === dateString);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleDayPress = (day: number | null) => {
    if (!day) return;
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    setSelectedDate(newDate);
  };

  const getMoodEmoji = (mood: string) => {
    const moodMap: { [key: string]: string } = {
      Happy: "😄",
      Tired: "😴",
      Stressed: "😰",
      Sad: "😔",
      Nauseous: "🤢",
      Lazy: "😴",
      Excited: "😊",
      Anxious: "😰",
      Calm: "😌",
      Energetic: "⚡",
      Angry: "😠",
    };
    return moodMap[mood] || "😊";
  };

  const getMoodColor = (mood: string) => {
    const colorMap: { [key: string]: string } = {
      Happy: "#FFD54F",
      Tired: "#9FA8DA",
      Stressed: "#EF9A9A",
      Sad: "#90CAF9",
      Nauseous: "#A5D6A7",
      Lazy: "#BCAAA4",
      Excited: "#FFB74D",
      Anxious: "#CE93D8",
      Calm: "#80CBC4",
      Energetic: "#FFF176",
      Angry: "#FF5252",
    };
    return colorMap[mood] || COLORS.PRIMARY;
  };

  const days = getDaysInMonth(currentDate);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed,
          ]}
        >
          <ArrowLeft size={24} color={COLORS.PRIMARY} strokeWidth={2.5} />
        </Pressable>
        <Text style={styles.headerTitle}>Journal History</Text>
        <View style={styles.placeholderButton} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Calendar */}
        <View style={styles.calendarCard}>
          {/* Month Navigation */}
          <View style={styles.monthHeader}>
            <Pressable onPress={goToPreviousMonth} style={styles.monthButton}>
              <ChevronLeft size={24} color={COLORS.PRIMARY} />
            </Pressable>
            <Text style={styles.monthText}>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </Text>
            <Pressable onPress={goToNextMonth} style={styles.monthButton}>
              <ChevronRight size={24} color={COLORS.PRIMARY} />
            </Pressable>
          </View>

          {/* Day Names */}
          <View style={styles.dayNamesRow}>
            {dayNames.map((day) => (
              <View key={day} style={styles.dayNameCell}>
                <Text style={styles.dayNameText}>{day}</Text>
              </View>
            ))}
          </View>

          {/* Calendar Grid */}
          <View style={styles.calendarGrid}>
            {days.map((day, index) => (
              <Pressable
                key={index}
                style={[
                  styles.dayCell,
                  !day && styles.emptyDayCell,
                  isToday(day) && styles.todayCell,
                  isSelectedDay(day) && styles.selectedDayCell,
                ]}
                onPress={() => handleDayPress(day)}
                disabled={!day}
              >
                {day && (
                  <>
                    <Text
                      style={[
                        styles.dayText,
                        isToday(day) && styles.todayText,
                        isSelectedDay(day) && styles.selectedDayText,
                      ]}
                    >
                      {day}
                    </Text>
                    {hasJournalEntry(day) && (
                      <View style={styles.journalEntryDot} />
                    )}
                  </>
                )}
              </Pressable>
            ))}
          </View>
        </View>

        {/* Journal Entry for Selected Date */}
        <View style={styles.journalSection}>
          <View style={styles.journalSectionHeader}>
            <BookOpen size={20} color={COLORS.PRIMARY} />
            <Text style={styles.journalSectionTitle}>
              Journal for{" "}
              {selectedDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </Text>
          </View>

          {entryLoading ? (
            <View style={styles.loadingCard}>
              <ActivityIndicator size="large" color={COLORS.PRIMARY} />
              <Text style={styles.loadingText}>Loading journal...</Text>
            </View>
          ) : !selectedJournalEntry ? (
            <View style={styles.noJournalCard}>
              <Text style={styles.noJournalEmoji}>📝</Text>
              <Text style={styles.noJournalText}>No journal entry</Text>
              <Text style={styles.noJournalSubtext}>
                No journal was written on this day
              </Text>
            </View>
          ) : (
            <View style={styles.journalEntryCard}>
              {/* Mood Section */}
              {selectedJournalEntry.mood && (
                <View
                  style={[
                    styles.moodSection,
                    {
                      backgroundColor:
                        getMoodColor(selectedJournalEntry.mood) + "20",
                    },
                  ]}
                >
                  <Text style={styles.moodEmoji}>
                    {getMoodEmoji(selectedJournalEntry.mood)}
                  </Text>
                  <View style={styles.moodTextContainer}>
                    <Text style={styles.moodLabel}>Mood</Text>
                    <Text
                      style={[
                        styles.moodValue,
                        { color: getMoodColor(selectedJournalEntry.mood) },
                      ]}
                    >
                      {selectedJournalEntry.mood}
                    </Text>
                  </View>
                </View>
              )}

              {/* Journal Notes */}
              {selectedJournalEntry.info && (
                <View style={styles.notesSection}>
                  <Text style={styles.notesLabel}>Notes</Text>
                  <Text style={styles.notesText}>
                    {selectedJournalEntry.info}
                  </Text>
                </View>
              )}

              {/* Timestamp */}
              {selectedJournalEntry.created_at && (
                <Text style={styles.timestampText}>
                  Written on{" "}
                  {selectedJournalEntry.created_at.toDate &&
                    selectedJournalEntry.created_at
                      .toDate()
                      .toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                </Text>
              )}
            </View>
          )}
        </View>

        {/* Stats Section */}
        {entriesLoading ? (
          <View style={styles.statsCard}>
            <ActivityIndicator size="small" color={COLORS.PRIMARY} />
          </View>
        ) : allJournalEntries.length > 0 ? (
          <View style={styles.statsCard}>
            <Text style={styles.statsTitle}>Your Journey</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{allJournalEntries.length}</Text>
                <Text style={styles.statLabel}>Total Entries</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {
                    allJournalEntries.filter(
                      (entry: any) => entry.mood === "Happy",
                    ).length
                  }
                </Text>
                <Text style={styles.statLabel}>Happy Days</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <View style={styles.dateValueContainer}>
                  <Text style={styles.dateMonth}>
                    {new Date(
                      Math.min(
                        ...allJournalEntries.map((entry: any) => {
                          const [day, month, year] = entry.id.split("-");
                          return new Date(
                            parseInt(year),
                            parseInt(month) - 1,
                            parseInt(day),
                          ).getTime();
                        }),
                      ),
                    ).toLocaleDateString("en-US", {
                      month: "short",
                    })}
                  </Text>
                  <Text style={styles.dateYear}>
                    {new Date(
                      Math.min(
                        ...allJournalEntries.map((entry: any) => {
                          const [day, month, year] = entry.id.split("-");
                          return new Date(
                            parseInt(year),
                            parseInt(month) - 1,
                            parseInt(day),
                          ).getTime();
                        }),
                      ),
                    ).getFullYear()}
                  </Text>
                </View>
                <Text style={styles.statLabel}>Started</Text>
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  backButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  placeholderButton: {
    width: 40,
    height: 40,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  calendarCard: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  monthHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  monthButton: {
    padding: 8,
  },
  monthText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  dayNamesRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  dayNameCell: {
    flex: 1,
    alignItems: "center",
  },
  dayNameText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#999",
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayCell: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 8,
  },
  emptyDayCell: {
    backgroundColor: "transparent",
  },
  todayCell: {
    backgroundColor: COLORS.PINK,
  },
  selectedDayCell: {
    backgroundColor: COLORS.PRIMARY,
  },
  dayText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  todayText: {
    color: COLORS.PRIMARY,
  },
  selectedDayText: {
    color: "#FFF",
  },
  journalEntryDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.PRIMARY,
    marginTop: 2,
  },
  journalSection: {
    marginBottom: 24,
  },
  journalSectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 8,
  },
  journalSectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  loadingCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  loadingText: {
    fontSize: 14,
    color: "#999",
    marginTop: 12,
  },
  noJournalCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  noJournalEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  noJournalText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  noJournalSubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
  journalEntryCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  moodSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  moodEmoji: {
    fontSize: 40,
    marginRight: 16,
  },
  moodTextContainer: {
    flex: 1,
  },
  moodLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#999",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  moodValue: {
    fontSize: 20,
    fontWeight: "700",
  },
  notesSection: {
    marginBottom: 16,
  },
  notesLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#999",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  notesText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  timestampText: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
    marginTop: 8,
  },
  statsCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 24,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 20,
    textAlign: "center",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.PRIMARY,
    marginBottom: 4,
  },
  dateValueContainer: {
    alignItems: "center",
    marginBottom: 4,
  },
  dateMonth: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.PRIMARY,
    lineHeight: 20,
  },
  dateYear: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.PRIMARY,
    lineHeight: 20,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#999",
    textAlign: "center",
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#E0E0E0",
  },
});
