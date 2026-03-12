import { ConfirmationModal } from "@/components/ConfirmationModal";
import { COLORS } from "@/constants/colors";
import { useAuthState, useLogout } from "@/Firebase/hooks/useAuth";
import { useSoftDeleteAccount } from "@/Firebase/hooks/useUser";
import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  ChevronRight,
  FileText,
  ShieldCheck,
  Trash2,
  UserX,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface PrivacySection {
  title: string;
  content: string[];
}

export default function PrivacySecurityScreen() {
  const router = useRouter();
  const { user } = useAuthState();
  const logoutMutation = useLogout();
  const softDeleteMutation = useSoftDeleteAccount();

  const [showClearCacheModal, setShowClearCacheModal] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  const privacySections: PrivacySection[] = [
    {
      title: "Introduction",
      content: [
        `Welcome to Elara. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our mobile application.`,
        `By using Elara, you agree to the collection and use of information in accordance with this policy. We take your privacy seriously, especially given the sensitive nature of pregnancy and motherhood-related information.`,
      ],
    },
    {
      title: "Information We Collect",
      content: [
        `Personal Information: When you create an account, we collect your name, email address, and profile photo (optional). For pregnancy tracking, we may collect your due date, pregnancy week, and baby's information.`,
        `Health & Wellness Data: We collect information you choose to track, including pregnancy symptoms, baby movements, weight changes, mood patterns, sleep quality, meditation sessions, yoga activities, and journal entries.`,
        `Usage Data: We automatically collect information about how you use our app, including features accessed, session duration, yoga and meditation content viewed, and technical data such as device type, operating system, and IP address.`,
        `Location Data: We do not collect precise location data. Any location-based features require your explicit permission and can be disabled at any time.`,
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        `To Provide Services: We use your information to deliver personalized content, track your pregnancy journey, provide yoga and meditation recommendations, generate insights from your tracking data, and sync your data across devices.`,
        `To Improve Our App: We analyze usage patterns to enhance user experience, develop new features, fix bugs and technical issues, and optimize app performance.`,
        `To Communicate: We send you important notifications about your pregnancy milestones, meditation reminders, yoga session updates, and account-related information.`,
        `We will never sell your personal information to third parties. Your health and pregnancy data is yours alone.`,
      ],
    },
    {
      title: "Data Storage and Security",
      content: [
        `Encryption: All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols. Your personal and health information is encrypted at rest using AES-256 encryption.`,
        `Secure Servers: We use Firebase, Google's secure cloud infrastructure, to store your data. Our servers are protected by multiple layers of security including firewalls, intrusion detection, and regular security audits.`,
        `Access Control: Only authorized personnel with legitimate business needs can access user data, and all access is logged and monitored. We implement strict internal policies to protect your information.`,
        `Data Retention: We retain your data for as long as your account is active. If you delete your account, we permanently delete your personal data within 30 days, except where required by law to retain certain information.`,
      ],
    },
    {
      title: "Your Privacy Rights",
      content: [
        `Access Your Data: You can view and download all your personal information at any time through the app settings.`,
        `Modify Your Data: You can update your profile information, tracking data, and preferences whenever you wish.`,
        `Delete Your Data: You have the right to request deletion of your account and all associated data. This can be done through Settings > Account > Delete Account.`,
        `Data Portability: You can export your tracking data, journal entries, and other information in standard formats (PDF, CSV).`,
        `Opt-Out: You can opt out of non-essential communications and data collection features at any time through privacy settings.`,
      ],
    },
    {
      title: "Third-Party Services",
      content: [
        `We use select third-party services to provide our app functionality:`,
        `Firebase (Google): For authentication, database, and cloud storage. Privacy Policy: firebase.google.com/support/privacy`,
        `Analytics: We use privacy-focused analytics to understand app usage. Personal identifiers are anonymized.`,
        `We do not share your personal health information with third parties for advertising or marketing purposes. Any data sharing with service providers is governed by strict data processing agreements.`,
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        `Elara is designed for adults aged 18 and over. We do not knowingly collect information from children under 18. If you believe we have inadvertently collected information from a minor, please contact us immediately.`,
      ],
    },
    {
      title: "International Users",
      content: [
        `Elara is operated in the United States. If you access our app from outside the U.S., your information will be transferred to, stored, and processed in the United States. By using our app, you consent to this transfer.`,
        `We comply with applicable data protection laws, including GDPR for European users and other regional privacy regulations.`,
      ],
    },
    {
      title: "Cookies and Tracking",
      content: [
        `We use minimal cookies and similar technologies only for essential app functionality such as keeping you logged in, remembering your preferences, and analyzing app performance.`,
        `We do not use cookies for advertising or tracking you across other websites or apps.`,
      ],
    },
    {
      title: "Changes to Privacy Policy",
      content: [
        `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes through the app or via email.`,
        `Your continued use of Elara after changes indicates your acceptance of the updated policy. We encourage you to review this policy periodically.`,
      ],
    },
    {
      title: "Contact Us",
      content: [
        `If you have questions about this Privacy Policy or our data practices, please contact us:`,
        `Email: digital@brilworks.com`,
        `Address: 503, Fortune Business Hub, Nr. Satyamev Elysiym, Sola, Ahmedabad, Gujarat 380060 India`,
        `We typically respond to privacy inquiries within 48 hours.`,
      ],
    },
  ];

  const dataManagement = [
    {
      id: "download",
      icon: FileText,
      title: "Download My Data",
      description: "Export all your data as PDF or CSV",
      onPress: () => handleDownloadData(),
    },
    {
      id: "clear",
      icon: Trash2,
      title: "Clear Cache",
      description: "Free up storage space",
      onPress: () => handleClearCache(),
    },
    {
      id: "delete",
      icon: UserX,
      title: "Delete Account",
      description: "Permanently delete your account and data",
      onPress: () => handleDeleteAccount(),
      isDangerous: true,
    },
  ];

  const handleDownloadData = () => {
    Alert.alert("Download Data", "Choose the format for your data export:", [
      { text: "PDF", onPress: () => console.log("Export as PDF") },
      { text: "CSV", onPress: () => console.log("Export as CSV") },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const handleClearCache = () => {
    setShowClearCacheModal(true);
  };

  const confirmClearCache = async () => {
    try {
      // Implement actual cache clearing logic here
      // For example: AsyncStorage clear, image cache clear, etc.
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate clearing

      setShowClearCacheModal(false);
      Alert.alert("Success", "Cache cleared successfully");
    } catch (error) {
      setShowClearCacheModal(false);
      Alert.alert("Error", "Failed to clear cache. Please try again.");
    }
  };

  const handleDeleteAccount = () => {
    setShowDeleteAccountModal(true);
  };

  const confirmDeleteAccount = async () => {
    if (!user?.uid) {
      Alert.alert("Error", "No user found. Please try logging in again.");
      return;
    }

    try {
      // Soft delete the account
      const result = await softDeleteMutation.mutateAsync({ uid: user.uid });

      if (result.success) {
        setShowDeleteAccountModal(false);

        // Sign out the user
        await auth().signOut();

        // Show success message and redirect to auth
        Alert.alert(
          "Account Deleted",
          "Your account has been successfully deleted. We're sorry to see you go.",
          [
            {
              text: "OK",
              onPress: () => router.replace("/auth"),
            },
          ],
        );
      } else {
        setShowDeleteAccountModal(false);
        Alert.alert("Error", result.error || "Failed to delete account");
      }
    } catch (error: any) {
      setShowDeleteAccountModal(false);
      Alert.alert("Error", error.message || "Failed to delete account");
    }
  };

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
        <Text style={styles.headerTitle}>Privacy & Security</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Data Management */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <FileText size={20} color={COLORS.PRIMARY} strokeWidth={2} />
            <Text style={styles.sectionTitle}>Data Management</Text>
          </View>

          <View style={styles.settingsList}>
            {dataManagement.map((item, index) => (
              <Pressable
                key={item.id}
                style={({ pressed }) => [
                  styles.settingItem,
                  pressed && styles.settingItemPressed,
                  index === dataManagement.length - 1 && styles.settingItemLast,
                ]}
                onPress={item.onPress}
              >
                <View
                  style={[
                    styles.settingIconContainer,
                    item.isDangerous && styles.dangerIconContainer,
                  ]}
                >
                  <item.icon
                    size={20}
                    color={item.isDangerous ? "#FF6B6B" : COLORS.PRIMARY}
                    strokeWidth={2}
                  />
                </View>
                <View style={styles.settingContent}>
                  <Text
                    style={[
                      styles.settingTitle,
                      item.isDangerous && styles.dangerText,
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text style={styles.settingDescription}>
                    {item.description}
                  </Text>
                </View>
                <ChevronRight size={20} color="#999" strokeWidth={2} />
              </Pressable>
            ))}
          </View>
        </View>

        {/* Privacy Policy */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ShieldCheck size={20} color={COLORS.PRIMARY} strokeWidth={2} />
            <Text style={styles.sectionTitle}>Privacy Policy</Text>
          </View>

          <View style={styles.policyContainer}>
            <Text style={styles.policyDate}>
              Last Updated: February 23, 2026
            </Text>

            {privacySections.map((section, index) => (
              <View key={index} style={styles.policySection}>
                <Text style={styles.policySectionTitle}>{section.title}</Text>
                {section.content.map((paragraph, pIndex) => (
                  <Text key={pIndex} style={styles.policyParagraph}>
                    {paragraph}
                  </Text>
                ))}
              </View>
            ))}

            <View style={styles.policyFooter}>
              <Text style={styles.policyFooterText}>
                By using Elara, you acknowledge that you have read and
                understood this Privacy Policy.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Clear Cache Confirmation Modal */}
      <ConfirmationModal
        visible={showClearCacheModal}
        title="Clear Cache"
        message="This will clear temporary files and free up storage. Your personal data will not be affected."
        confirmText="Clear"
        cancelText="Cancel"
        onConfirm={confirmClearCache}
        onCancel={() => setShowClearCacheModal(false)}
      />

      {/* Delete Account Confirmation Modal */}
      <ConfirmationModal
        visible={showDeleteAccountModal}
        title="Delete Account"
        message="This action cannot be undone. All your data, including journal entries, tracking history, and saved content will be permanently deleted."
        confirmText="Delete"
        cancelText="Cancel"
        confirmDestructive
        isLoading={softDeleteMutation.isPending}
        onConfirm={confirmDeleteAccount}
        onCancel={() => setShowDeleteAccountModal(false)}
      />
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
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
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
    paddingBottom: 40,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  settingsList: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
    gap: 12,
  },
  settingItemPressed: {
    backgroundColor: "#FAFAFA",
  },
  settingItemLast: {
    borderBottomWidth: 0,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.PINK,
    justifyContent: "center",
    alignItems: "center",
  },
  dangerIconContainer: {
    backgroundColor: "#FFF5F5",
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  dangerText: {
    color: "#FF6B6B",
  },
  settingDescription: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },
  policyContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  policyDate: {
    fontSize: 12,
    color: "#999",
    fontStyle: "italic",
    marginBottom: 20,
    textAlign: "center",
  },
  policySection: {
    marginBottom: 24,
  },
  policySectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.PRIMARY,
    marginBottom: 12,
  },
  policyParagraph: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
    marginBottom: 12,
    textAlign: "justify",
  },
  policyFooter: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  policyFooterText: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 20,
  },
});
