import Toast from "@/components/Toast";
import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import {
    useLastNDaysJournal,
    useSaveMoodEntry,
    useStreakStats,
    useTodayJournal,
    useUpdateJournalInfo,
} from "@/Firebase/hooks/useJournal";
import { useAllMeditations } from "@/Firebase/hooks/useMeditations";
import { useUserProfile } from "@/Firebase/hooks/useUser";
import { useAllYogaVideos } from "@/Firebase/hooks/useYogas";
import {
    getTodaysRecommendedMeditation,
    getTodaysRecommendedYoga,
} from "@/utils/dailyRecommendations";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Helper function to calculate current pregnancy week based on start date
const calculateCurrentWeek = (pregnancyStartDate: string): number => {
  const startDate = new Date(pregnancyStartDate);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const currentWeek = Math.floor(diffDays / 7) + 1; // +1 because week 1 starts from day 0
  return Math.min(Math.max(currentWeek, 1), 43); // Clamp between 1 and 43
};

export default function HomeScreen() {
  const router = useRouter();
  const { user } = useAuthState();
  const { data: userProfile, isLoading } = useUserProfile(user?.uid);
  const { data: todayJournal } = useTodayJournal(user?.uid);
  const { data: weeklyJournal } = useLastNDaysJournal(user?.uid, 7);
  const { data: streakStats } = useStreakStats(user?.uid);
  const { data: allMeditations } = useAllMeditations();
  const { data: allYogaVideos } = useAllYogaVideos();
  const saveMoodMutation = useSaveMoodEntry();
  const updateJournalMutation = useUpdateJournalInfo();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [journalNote, setJournalNote] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  // Get today's recommended session (alternates between meditation and yoga)
  const todaysRecommendedSession = useMemo(() => {
    // Determine if today should be meditation or yoga (alternates based on day of year)
    const dayOfYear = Math.floor(
      (new Date().getTime() -
        new Date(new Date().getFullYear(), 0, 0).getTime()) /
        86400000,
    );
    const isMeditationDay = dayOfYear % 2 === 0;

    if (isMeditationDay && allMeditations && allMeditations.length > 0) {
      const meditation = getTodaysRecommendedMeditation(allMeditations);
      return meditation
        ? { type: "meditation" as const, session: meditation }
        : null;
    } else if (allYogaVideos && allYogaVideos.length > 0) {
      const yoga = getTodaysRecommendedYoga(allYogaVideos);
      return yoga ? { type: "yoga" as const, session: yoga } : null;
    }
    return null;
  }, [allMeditations, allYogaVideos]);

  // Populate journal note from today's data when it loads
  useEffect(() => {
    if (todayJournal?.info) {
      setJournalNote(todayJournal.info);
    }
  }, [todayJournal?.info]);

  // Handle journal save
  const handleSaveJournal = async () => {
    if (!user?.uid) return;

    try {
      const result = await updateJournalMutation.mutateAsync({
        uid: user.uid,
        info: journalNote,
      });

      if (result.success) {
        setToastMessage("Journal saved successfully!");
        setToastType("success");
        setToastVisible(true);
      } else {
        setToastMessage(result.error || "Failed to save journal");
        setToastType("error");
        setToastVisible(true);
      }
    } catch (error: any) {
      setToastMessage(error.message || "An unexpected error occurred");
      setToastType("error");
      setToastVisible(true);
    }
  };

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  // Get first name from full name
  const getFirstName = () => {
    if (!userProfile?.name) return "Guest";
    return userProfile.name.split(" ")[0];
  };

  // Get initials for avatar
  const getInitials = () => {
    if (!userProfile?.name) return "G";
    const names = userProfile.name.trim().split(" ");
    if (names.length === 1) return names[0][0].toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  // Handle mood selection
  const handleMoodSelect = async (mood: string) => {
    if (!user?.uid) return;

    setSelectedMood(mood);
    try {
      const result: any = await saveMoodMutation.mutateAsync({
        uid: user.uid,
        mood,
      });

      if (result.success) {
        // Mood saved successfully
        console.log("Mood saved:", mood);
      } else {
        // Handle error
        console.error("Error saving mood:", result.error);
        setSelectedMood(null);
      }
    } catch (error) {
      console.error("Error saving mood:", error);
      setSelectedMood(null);
    }
  };

  // Check if a mood is currently selected (either from today's journal or just selected)
  const currentMood = selectedMood || todayJournal?.mood;

  // Get current calendar week (Sunday to Saturday)
  const getWeekDays = () => {
    const days = [];
    const today = new Date();
    const sunday = new Date(today);
    // Get the start of the current week (Sunday)
    sunday.setDate(today.getDate() - today.getDay());

    const dayLetters = ["S", "M", "T", "W", "T", "F", "S"];

    for (let i = 0; i < 7; i++) {
      const date = new Date(sunday);
      date.setDate(sunday.getDate() + i);
      const dayLetter = dayLetters[date.getDay()];
      const dateStr = formatDateAsDocId(date);
      const hasEntry = weeklyJournal ? dateStr in weeklyJournal : false;

      days.push({
        letter: dayLetter,
        date: dateStr,
        hasEntry,
      });
    }

    return days;
  };

  // Helper function to format date as DD-MM-YYYY
  const formatDateAsDocId = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const weekDays = getWeekDays();
  const currentStreak = streakStats?.currentStreak || 0;
  const previousBest = streakStats?.previousBest || 0;

  // Calculate current pregnancy week dynamically
  const pregnancyStartDate = userProfile?.pregnancyStartDate;
  const pregnancyWeek = pregnancyStartDate
    ? calculateCurrentWeek(pregnancyStartDate)
    : userProfile?.pregnancyWeek || 24;

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with greeting */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {userProfile?.photoURL ? (
              <Image
                source={{ uri: userProfile.photoURL }}
                style={styles.avatar}
              />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>{getInitials()}</Text>
              </View>
            )}
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Hello, {getFirstName()}</Text>
              <Text style={styles.greetingTime}>{getGreeting()}</Text>
            </View>
          </View>
          <View style={styles.notificationButton}>
            <View style={styles.notificationBadge} />
          </View>
        </View>

        {/* Journey Indicator */}
        <View style={styles.journeyIndicator}>
          <Text style={styles.journeyText}>
            Your Prenatal Journey · Week {pregnancyWeek}
          </Text>
        </View>

        {/* Today's Recommended Session */}
        {todaysRecommendedSession && (
          <View style={styles.recommendedCard}>
            <Text style={styles.recommendedLabel}>
              Today's Recommended Session
            </Text>
            <View style={styles.sessionCard}>
              <View style={styles.sessionContent}>
                <Text style={styles.sessionTitle}>
                  {todaysRecommendedSession.session.title}
                </Text>
                <View style={styles.sessionMeta}>
                  <View style={styles.sessionMetaItem}>
                    <Text style={styles.sessionMetaText}>
                      ⏱{" "}
                      {todaysRecommendedSession.type === "meditation"
                        ? todaysRecommendedSession.session.durationText
                        : todaysRecommendedSession.session.durationText}
                    </Text>
                  </View>
                  <View style={styles.sessionMetaItem}>
                    <Text style={styles.sessionMetaText}>
                      {todaysRecommendedSession.type === "meditation"
                        ? "🧘 Meditation"
                        : "🧘‍♀️ Yoga"}
                    </Text>
                  </View>
                  {todaysRecommendedSession.type === "meditation" &&
                    todaysRecommendedSession.session.category && (
                      <View style={styles.sessionMetaItem}>
                        <Text style={styles.sessionMetaText}>
                          ❤ {todaysRecommendedSession.session.category}
                        </Text>
                      </View>
                    )}
                </View>
                <Pressable
                  style={styles.startButton}
                  onPress={() => {
                    if (todaysRecommendedSession.type === "meditation") {
                      router.push(
                        `/(user)/meditation-session?id=${todaysRecommendedSession.session.id}`,
                      );
                    } else {
                      router.push(
                        `/(user)/yoga-session?id=${todaysRecommendedSession.session.id}`,
                      );
                    }
                  }}
                >
                  <Text style={styles.startButtonText}>Start Now</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}

        {/* Mood Check-in */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How are you feeling today?</Text>
          <View style={styles.moodContainer}>
            <Pressable
              style={[
                styles.moodButton,
                currentMood === "Joyful" && styles.moodButtonSelected,
              ]}
              onPress={() => handleMoodSelect("Joyful")}
              disabled={saveMoodMutation.isPending}
            >
              {saveMoodMutation.isPending && selectedMood === "Joyful" ? (
                <ActivityIndicator size="small" color={COLORS.PRIMARY} />
              ) : (
                <>
                  <Text style={styles.moodEmoji}>😊</Text>
                  <Text style={styles.moodLabel}>Joyful</Text>
                </>
              )}
            </Pressable>
            <Pressable
              style={[
                styles.moodButton,
                currentMood === "Angry" && styles.moodButtonSelected,
              ]}
              onPress={() => handleMoodSelect("Angry")}
              disabled={saveMoodMutation.isPending}
            >
              {saveMoodMutation.isPending && selectedMood === "Angry" ? (
                <ActivityIndicator size="small" color={COLORS.PRIMARY} />
              ) : (
                <>
                  <Text style={styles.moodEmoji}>😠</Text>
                  <Text style={styles.moodLabel}>Angry</Text>
                </>
              )}
            </Pressable>
            <Pressable
              style={[
                styles.moodButton,
                currentMood === "Lazy" && styles.moodButtonSelected,
              ]}
              onPress={() => handleMoodSelect("Lazy")}
              disabled={saveMoodMutation.isPending}
            >
              {saveMoodMutation.isPending && selectedMood === "Lazy" ? (
                <ActivityIndicator size="small" color={COLORS.PRIMARY} />
              ) : (
                <>
                  <Text style={styles.moodEmoji}>😴</Text>
                  <Text style={styles.moodLabel}>Lazy</Text>
                </>
              )}
            </Pressable>
            <Pressable
              style={[
                styles.moodButton,
                currentMood === "Happy" && styles.moodButtonSelected,
              ]}
              onPress={() => handleMoodSelect("Happy")}
              disabled={saveMoodMutation.isPending}
            >
              {saveMoodMutation.isPending && selectedMood === "Happy" ? (
                <ActivityIndicator size="small" color={COLORS.PRIMARY} />
              ) : (
                <>
                  <Text style={styles.moodEmoji}>😄</Text>
                  <Text style={styles.moodLabel}>Happy</Text>
                </>
              )}
            </Pressable>
          </View>
        </View>

        {/* Daily Journal Writing Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Daily Journal</Text>
            <Pressable onPress={() => router.push("/(user)/journal-history")}>
              <Text style={styles.seeAll}>See All</Text>
            </Pressable>
          </View>
          <View style={styles.journalCard}>
            <TextInput
              style={styles.journalInput}
              placeholder="How's your day going? Write your thoughts here..."
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
              value={journalNote}
              onChangeText={setJournalNote}
            />
            <View style={styles.journalFooter}>
              <Text style={styles.journalStatus}>
                {updateJournalMutation.isPending ? "Saving..." : ""}
              </Text>
              <Pressable
                style={[
                  styles.saveJournalButton,
                  updateJournalMutation.isPending && styles.buttonDisabled,
                ]}
                onPress={handleSaveJournal}
                disabled={updateJournalMutation.isPending}
              >
                {updateJournalMutation.isPending ? (
                  <ActivityIndicator size="small" color="#FFF" />
                ) : (
                  <Text style={styles.saveJournalButtonText}>Save Note</Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>

        {/* Weekly Streak */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Weekly Streak</Text>
          </View>
          <View style={styles.streakCard}>
            <View style={styles.streakHeader}>
              <View>
                <Text style={styles.streakNumber}>{currentStreak}</Text>
                <Text style={styles.streakDays}>day streak</Text>
              </View>
              <View style={styles.previousBestContainer}>
                <Text style={styles.previousBest}>Previous Best</Text>
                <Text style={styles.previousBestValue}>
                  {previousBest} Days
                </Text>
              </View>
            </View>
            <Text style={styles.streakMessage}>
              {currentStreak > 0
                ? "Keep it up, you're on fire!"
                : "Start your streak today!"}
            </Text>
            <View style={styles.weekDays}>
              {weekDays.map((day: any, index: number) => (
                <View key={index} style={styles.dayContainer}>
                  <Text style={styles.dayLetterTop}>{day.letter}</Text>
                  <View
                    style={[
                      styles.dayBox,
                      day.hasEntry
                        ? styles.dayBoxActive
                        : styles.dayBoxInactive,
                    ]}
                  >
                    {day.hasEntry ? (
                      <Text style={styles.checkmark}>✓</Text>
                    ) : (
                      <Text style={styles.dash}>—</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Nurture Your Soul - Removed */}

        {/* Daily Wisdom - Removed */}

        {/* Bottom spacing for FAB */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Toast Notification */}
      <Toast
        visible={toastVisible}
        message={toastMessage}
        type={toastType}
        onHide={() => setToastVisible(false)}
      />

      {/* Floating Action Button - Removed for now */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light.background,
  },
  scrollContent: {
    padding: theme.spacing.lg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  avatarPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: theme.colors.light.primary_text,
  },
  greetingTime: {
    fontSize: 14,
    color: theme.colors.light.secondary_text,
  },
  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.light.surface_variant,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.ERROR,
    position: "absolute",
    top: 12,
    right: 12,
  },
  journeyIndicator: {
    backgroundColor: COLORS.PINK,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radii.md,
    alignSelf: "flex-start",
    marginBottom: theme.spacing.lg,
  },
  journeyText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.PRIMARY,
  },
  recommendedCard: {
    marginBottom: theme.spacing.lg,
  },
  recommendedLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.light.primary_text,
    marginBottom: theme.spacing.sm,
  },
  sessionCard: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: theme.radii.md,
    padding: theme.spacing.lg,
    overflow: "hidden",
  },
  sessionContent: {
    // No additional styles needed
  },
  sessionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  sessionMeta: {
    flexDirection: "row",
    gap: theme.spacing.md,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  sessionMetaItem: {
    // No additional styles needed
  },
  sessionMetaText: {
    fontSize: 12,
    color: COLORS.WHITE,
  },
  startButton: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    paddingVertical: theme.spacing.sm + 2,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radii.md,
    alignSelf: "flex-start",
  },
  startButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.WHITE,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.light.primary_text,
    marginBottom: theme.spacing.sm,
  },
  seeAll: {
    fontSize: theme.textStyles.label_medium.fontSize,
    fontWeight: "600",
    color: theme.colors.light.primary,
  },
  moodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moodButton: {
    alignItems: "center",
    backgroundColor: theme.colors.light.surface_variant,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.radii.md,
    flex: 1,
    marginHorizontal: 4,
    minHeight: 80,
    justifyContent: "center",
  },
  moodButtonSelected: {
    backgroundColor: COLORS.PINK,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
  },
  moodEmoji: {
    fontSize: 32,
    marginBottom: theme.spacing.xs,
  },
  moodLabel: {
    fontSize: 12,
    color: theme.colors.light.primary_text,
  },
  // Journal Styles
  journalCard: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  journalInput: {
    minHeight: 120,
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    paddingTop: 0,
  },
  journalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F5F5F5",
    paddingTop: 12,
  },
  journalStatus: {
    fontSize: 12,
    color: COLORS.PRIMARY,
    fontWeight: "500",
  },
  saveJournalButton: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  saveJournalButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  previousBest: {
    fontSize: 13,
    color: theme.colors.light.secondary_text,
    textAlign: "right",
  },
  previousBestContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  streakCard: {
    backgroundColor: theme.colors.light.surface_variant,
    borderRadius: theme.radii.md,
    padding: theme.spacing.md,
  },
  streakHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing.xs,
  },
  streakNumber: {
    fontSize: 48,
    fontWeight: "700",
    color: theme.colors.light.primary_text,
  },
  streakDays: {
    fontSize: 14,
    color: theme.colors.light.secondary_text,
  },
  previousBestValue: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.PRIMARY,
  },
  streakMessage: {
    fontSize: 14,
    color: theme.colors.light.primary_text,
    marginBottom: theme.spacing.md,
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  dayContainer: {
    alignItems: "center",
    width: "13%", // Ensure 7 items fit (100/7 is approx 14.28, using 13% with space-between)
  },
  dayLetterTop: {
    fontSize: 12,
    fontWeight: "600",
    color: theme.colors.light.secondary_text,
    marginBottom: 4,
  },
  dayBox: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  dayBoxActive: {
    backgroundColor: COLORS.PRIMARY,
  },
  dayBoxInactive: {
    backgroundColor: COLORS.PINK,
  },
  checkmark: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  dash: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.PRIMARY,
  },
});
