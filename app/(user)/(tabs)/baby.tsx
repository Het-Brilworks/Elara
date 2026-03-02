import PregnancyWeekForm from "@/components/PregnancyWeekForm";
import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import { useUserProfile } from "@/Firebase/hooks/useUser";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    3: "a sesame seed",
    4: "a poppyseed",
    5: "a sesame seed",
    6: "a lentil",
    7: "a blueberry",
    8: "a raspberry",
    9: "a cherry",
    10: "a kumquat",
    11: "a fig",
    12: "a lime",
    13: "a peapod",
    14: "a lemon",
    15: "an apple",
    16: "an avocado",
    17: "a pear",
    18: "a sweet potato",
    19: "a mango",
    20: "a banana",
    21: "a carrot",
    22: "a papaya",
    23: "a grapefruit",
    24: "a cantaloupe",
    25: "a cauliflower",
    26: "a scallion",
    27: "a cabbage",
    28: "an eggplant",
    29: "a butternut squash",
    30: "a large cabbage",
    31: "a coconut",
    32: "a jicama",
    33: "a pineapple",
    34: "a cantaloupe",
    35: "a honeydew melon",
    36: "a romaine lettuce",
    37: "a bunch of chard",
    38: "a leek",
    39: "a mini watermelon",
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

  // Check if pregnancy week is set
  const hasPregnancyWeek =
    userProfile?.pregnancyWeek && userProfile.pregnancyWeek > 0;
  const pregnancyWeek = userProfile?.pregnancyWeek || 24;
  const babyImage = getBabyImage(pregnancyWeek);
  const babySize = getBabySizeComparison(pregnancyWeek);

  const handleFormSuccess = () => {
    refetch();
  };

  return (
    <SafeAreaView style={styles.container}>
      {!hasPregnancyWeek ? (
        // Show form if pregnancy week is not set
        <PregnancyWeekForm onSuccess={handleFormSuccess} />
      ) : (
        // Show baby growth info if week is set
        <View style={styles.content}>
          <View style={styles.header}>
            {/* <View style={styles.headerIcon}>
              <Baby size={24} color={COLORS.PRIMARY} strokeWidth={2.5} />
            </View> */}
            <Text style={styles.headerTitle}>Baby Growth</Text>
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
              Your baby is about the size of {babySize}!
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
    backgroundColor: "#FFF8FC",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.PINK,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: theme.colors.light.primary_text,
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
    opacity: 0.15,
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
    backgroundColor: "#E5D4F5",
    bottom: 150,
    left: -80,
  },
  circle4: {
    width: 120,
    height: 120,
    backgroundColor: "#FFE5CC",
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
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    zIndex: 2,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
