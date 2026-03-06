import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";
import { ArrowLeft, FileText, Heart, Mail, Shield } from "lucide-react-native";
import React from "react";
import {
    Linking,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutAppScreen() {
  const router = useRouter();

  const handleEmailPress = () => {
    Linking.openURL("mailto:support@elara.app");
  };

  const handlePrivacyPress = () => {
    Linking.openURL("https://elara.app/privacy");
  };

  const handleTermsPress = () => {
    Linking.openURL("https://elara.app/terms");
  };

  const features = [
    {
      title: "Pregnancy Tracking",
      description:
        "Track your pregnancy journey week by week with personalized guidance",
    },
    {
      title: "Meditation & Yoga",
      description:
        "Access guided meditation and yoga sessions designed for mothers",
    },
    {
      title: "Baby Development",
      description: "Learn about your baby's growth and development milestones",
    },
    {
      title: "Community Support",
      description: "Connect with other mothers on the same journey",
    },
  ];

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
        <Text style={styles.headerTitle}>About App</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* App Logo & Name */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Heart size={48} color={COLORS.PRIMARY} fill={COLORS.PRIMARY} />
          </View>
          <Text style={styles.appName}>Elara</Text>
          <Text style={styles.tagline}>Your Companion Through Motherhood</Text>
          <View style={styles.versionBadge}>
            <Text style={styles.versionText}>Version 1.0.0</Text>
          </View>
        </View>

        {/* About Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Elara</Text>
          <View style={styles.card}>
            <Text style={styles.description}>
              Elara is your trusted companion throughout your pregnancy and
              motherhood journey. We provide personalized guidance, wellness
              resources, and a supportive community to help you navigate this
              beautiful chapter of your life with confidence and peace.
            </Text>
          </View>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <View style={styles.card}>
            {features.map((feature, index) => (
              <View
                key={index}
                style={[
                  styles.featureItem,
                  index !== features.length - 1 && styles.featureItemBorder,
                ]}
              >
                <View style={styles.featureDot} />
                <View style={styles.featureContent}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>
                    {feature.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Contact & Legal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact & Legal</Text>
          <View style={styles.card}>
            <Pressable
              style={({ pressed }) => [
                styles.linkItem,
                styles.linkItemBorder,
                pressed && styles.linkItemPressed,
              ]}
              onPress={handleEmailPress}
            >
              <View style={styles.linkIconContainer}>
                <Mail size={20} color={COLORS.PRIMARY} />
              </View>
              <View style={styles.linkContent}>
                <Text style={styles.linkTitle}>Contact Support</Text>
                <Text style={styles.linkSubtitle}>support@elara.app</Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.linkItem,
                styles.linkItemBorder,
                pressed && styles.linkItemPressed,
              ]}
              onPress={handlePrivacyPress}
            >
              <View style={styles.linkIconContainer}>
                <Shield size={20} color={COLORS.PRIMARY} />
              </View>
              <View style={styles.linkContent}>
                <Text style={styles.linkTitle}>Privacy Policy</Text>
                <Text style={styles.linkSubtitle}>
                  How we protect your data
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.linkItem,
                pressed && styles.linkItemPressed,
              ]}
              onPress={handleTermsPress}
            >
              <View style={styles.linkIconContainer}>
                <FileText size={20} color={COLORS.PRIMARY} />
              </View>
              <View style={styles.linkContent}>
                <Text style={styles.linkTitle}>Terms of Service</Text>
                <Text style={styles.linkSubtitle}>Terms and conditions</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Made with{" "}
            <Heart size={12} color={COLORS.PRIMARY} fill={COLORS.PRIMARY} /> for
            mothers everywhere
          </Text>
          <Text style={styles.copyright}>
            © 2026 Elara. All rights reserved.
          </Text>
        </View>
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
  headerSpacer: {
    width: 40,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  logoSection: {
    alignItems: "center",
    paddingVertical: 32,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  appName: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: "#999",
    marginBottom: 16,
    textAlign: "center",
  },
  versionBadge: {
    backgroundColor: COLORS.PINK,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  versionText: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.PRIMARY,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
    marginBottom: 12,
    marginLeft: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#666",
  },
  featureItem: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  featureItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  featureDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.PRIMARY,
    marginTop: 6,
    marginRight: 12,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#999",
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  linkItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  linkItemPressed: {
    opacity: 0.6,
  },
  linkIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  linkContent: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 2,
  },
  linkSubtitle: {
    fontSize: 13,
    color: "#999",
  },
  footer: {
    alignItems: "center",
    marginTop: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  footerText: {
    fontSize: 14,
    color: "#999",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  copyright: {
    fontSize: 12,
    color: "#CCC",
  },
});
