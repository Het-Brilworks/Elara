import PregnancyWeekForm from "@/components/PregnancyWeekForm";
import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import { useUserProfile } from "@/Firebase/hooks/useUser";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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

// Helper function to get baby image based on week
const getBabyImage = (week: number) => {
  // Map weeks to their corresponding image filenames
  const imageMap: { [key: number]: any } = {
    1: require("@/assets/baby/Week-1&2.png"),
    2: require("@/assets/baby/Week-1&2.png"),
    3: require("@/assets/baby/Week-3.png"),
    4: require("@/assets/baby/Week-4.png"),
    5: require("@/assets/baby/Week-5.png"),
    6: require("@/assets/baby/Week-6.png"),
    7: require("@/assets/baby/Week-7.png"),
    8: require("@/assets/baby/Week-8.png"),
    9: require("@/assets/baby/Week-9.png"),
    10: require("@/assets/baby/Week-10.png"),
    11: require("@/assets/baby/Week-11.png"),
    12: require("@/assets/baby/Week-12.png"),
    13: require("@/assets/baby/Week-13.png"),
    14: require("@/assets/baby/Week-14.png"),
    15: require("@/assets/baby/Week-15.png"),
    16: require("@/assets/baby/Week-16.png"),
    17: require("@/assets/baby/Week-17.png"),
    18: require("@/assets/baby/Week-18.png"),
    19: require("@/assets/baby/Week-19.png"),
    20: require("@/assets/baby/Week-20.png"),
    21: require("@/assets/baby/Week-21.png"),
    22: require("@/assets/baby/Week-22.png"),
    23: require("@/assets/baby/Week-23.png"),
    24: require("@/assets/baby/Week-24.png"),
    25: require("@/assets/baby/Week-25.png"),
    26: require("@/assets/baby/Week-26.png"),
    27: require("@/assets/baby/Week-27.png"),
    28: require("@/assets/baby/Week-28.png"),
    29: require("@/assets/baby/Week-29.png"),
    30: require("@/assets/baby/Week-30.png"),
    31: require("@/assets/baby/Week-31.png"),
    32: require("@/assets/baby/Week-32.png"),
    33: require("@/assets/baby/Week-33.png"),
    34: require("@/assets/baby/Week-34.png"),
    35: require("@/assets/baby/Week-35.png"),
    36: require("@/assets/baby/Week-36.png"),
    37: require("@/assets/baby/Week-37.png"),
    38: require("@/assets/baby/Week-38.png"),
    39: require("@/assets/baby/Week-39.png"),
    40: require("@/assets/baby/Week-40.png"),
    41: require("@/assets/baby/Week-41.png"),
    42: require("@/assets/baby/Week-42.png"),
    43: require("@/assets/baby/Week-43.png"),
  };

  return imageMap[week] || imageMap[24]; // Default to week 24 if not found
};

// Helper function to get baby size comparison based on week
const getBabySizeComparison = (week: number): string => {
  const sizeMap: { [key: number]: string } = {
    1: "a poppy seed",
    2: "a poppy seed",
    3: "a Vanilla bean seed",
    4: "a poppy seed",
    5: "a orange seed",
    6: "a sweet pea",
    7: "a blueberry",
    8: "a raspberry",
    9: "a green olive",
    10: "a prune",
    11: "a large strawberry",
    12: "a lime",
    13: "a lemon",
    14: "a navel orange",
    15: "an pear",
    16: "an avocado",
    17: "a large onion",
    18: "a cucumber",
    19: "a mango",
    20: "a sweet potato",
    21: "a large banana",
    22: "a papaya",
    23: "a carrot",
    24: "a ear of corn",
    25: "a eggplant",
    26: "a spaghetti squash",
    27: "a cabbage",
    28: "an head of lattuce",
    29: "a head of cauliflower",
    30: "a beat",
    31: "a coconut",
    32: "a bunch of celery",
    33: "a butternut squash",
    34: "a pineapple",
    35: "a bunch of swiss chard",
    36: "a bunch of kale",
    37: "a canary melon",
    38: "a mini watermelon",
    39: "a jackfruit",
    40: "a small pumpkin",
    41: "a pumpkin",
    42: "a watermelon",
    43: "a watermelon",
  };

  return sizeMap[week] || "a cantaloupe";
};

export default function BabyScreen() {
  const { user } = useAuthState();
  const { data: userProfile, refetch } = useUserProfile(user?.uid);

  // Calculate current pregnancy week dynamically
  const pregnancyStartDate = userProfile?.pregnancyStartDate;
  const hasPregnancyWeek = !!pregnancyStartDate;

  // If we have a start date, calculate current week; otherwise use stored week or default
  const pregnancyWeek = pregnancyStartDate
    ? calculateCurrentWeek(pregnancyStartDate)
    : userProfile?.pregnancyWeek || 24;

  const babyImage = getBabyImage(pregnancyWeek);
  const babySize = getBabySizeComparison(pregnancyWeek);

  const handleFormSuccess = () => {
    refetch();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {!hasPregnancyWeek ? (
        // Show form if pregnancy week is not set
        <PregnancyWeekForm onSuccess={handleFormSuccess} />
      ) : (
        // Show baby growth info if week is set
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Baby Growth</Text>
            <Text style={styles.headerSubtitle}>
              Week {pregnancyWeek} of your journey
            </Text>
          </View>

          {/* Decorative Background Elements */}
          <View style={styles.backgroundDecoration}>
            <View style={[styles.decorativeCircle, styles.circle1]} />
            <View style={[styles.decorativeCircle, styles.circle2]} />
            <View style={[styles.decorativeCircle, styles.circle3]} />
            <View style={[styles.decorativeCircle, styles.circle4]} />
            <View style={[styles.decorativeCircle, styles.circle5]} />
          </View>

          <View style={styles.imageContainer}>
            <Image source={babyImage} style={styles.babyImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Week {pregnancyWeek}</Text>
            <Text style={styles.cardSubtitle}>
              Your baby is about the size of {babySize}! 👶
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF5FA",
  },
  header: {
    position: "absolute",
    top: 18,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    // backgroundColor: COLORS.PINK,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.PRIMARY,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#7B2F4C",
    marginTop: 4,
    opacity: 0.8,
  },
  backgroundDecoration: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },
  decorativeCircle: {
    position: "absolute",
    borderRadius: 9999,
    opacity: 0.2,
  },
  circle1: {
    width: 200,
    height: 200,
    backgroundColor: COLORS.PINK,
    top: -50,
    left: -70,
  },
  circle2: {
    width: 150,
    height: 150,
    backgroundColor: COLORS.PRIMARY_LIGHT,
    top: 100,
    right: -60,
  },
  circle3: {
    width: 180,
    height: 180,
    backgroundColor: "#FFD4E5",
    bottom: 150,
    left: -80,
  },
  circle4: {
    width: 120,
    height: 120,
    backgroundColor: "#FFC4D6",
    bottom: -30,
    right: -40,
  },
  circle5: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.PRIMARY,
    top: "50%",
    right: -50,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 1,
  },
  babyImage: {
    width: "95%",
    height: "95%",
    resizeMode: "contain",
    zIndex: 1,
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginHorizontal: 12,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(123, 47, 76, 0.1)",
    shadowColor: COLORS.PRIMARY,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    zIndex: 2,
  },
  funIconsTop: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 8,
  },
  funEmoji: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.PRIMARY,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  cardSubtitle: {
    fontSize: 17,
    fontWeight: "500",
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
  },
});
