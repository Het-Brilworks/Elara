import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";
import {
    ChevronDown,
    ChevronLeft,
    Mail,
    MessageCircle,
    Phone,
} from "lucide-react-native";
import React, { useState } from "react";
import {
    Linking,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  faqs: FAQ[];
}

export default function HelpSupportScreen() {
  const router = useRouter();
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleFAQ = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const faqSections: FAQSection[] = [
    {
      title: "Getting Started",
      faqs: [
        {
          id: "getting-started-1",
          question: "What is Elara?",
          answer:
            "Elara is your comprehensive companion app designed to support you through your pregnancy and motherhood journey. We provide personalized yoga sessions, guided meditations, baby trackers, health monitoring tools, and a supportive community to help you navigate this beautiful phase of life with confidence and peace.",
        },
        {
          id: "getting-started-2",
          question: "How do I create an account?",
          answer:
            "Creating an account is simple! Download the Elara app, tap 'Sign Up', enter your email address and create a secure password. After verifying your email, complete your profile by selecting your journey type (pregnancy, postpartum, or trying to conceive) and adding relevant information like your due date or baby's birthdate.",
        },
        {
          id: "getting-started-3",
          question: "Is Elara free to use?",
          answer:
            "Elara offers both free and premium features. The free version includes basic tracking, daily tips, and selected content. Premium membership unlocks unlimited access to all yoga sessions, meditations, personalized plans, advanced tracking features, and ad-free experience. You can try premium features with a 7-day free trial.",
        },
        {
          id: "getting-started-4",
          question: "Can I change my journey type later?",
          answer:
            "Yes! Life is a journey with many phases. You can update your journey type in Settings > Profile Settings. However, note that changing your journey will reset some personalized content and tracking data to match your new phase.",
        },
      ],
    },
    {
      title: "Features & Usage",
      faqs: [
        {
          id: "features-1",
          question: "What yoga styles are available?",
          answer:
            "Elara offers pregnancy-safe yoga sessions including Prenatal Yoga, Gentle Flow, Restorative Yoga, Pelvic Floor exercises, and breathing techniques. All sessions are designed by certified prenatal yoga instructors and can be filtered by trimester, duration, and intensity level.",
        },
        {
          id: "features-2",
          question: "How do I track my baby's movements?",
          answer:
            "Go to the Tracker tab and select 'Kick Counter'. Simply tap the button each time you feel your baby move. The app will track the frequency and show you patterns over time. You can set reminders to count kicks at specific times and share the data with your healthcare provider.",
        },
        {
          id: "features-3",
          question: "Can I use meditation during pregnancy?",
          answer:
            "Absolutely! Our meditation sessions are specifically designed for pregnancy. They help reduce stress, improve sleep, manage anxiety, and prepare you mentally for childbirth. Sessions range from 5 to 30 minutes and cover topics like relaxation, pain management, bonding with baby, and birth preparation.",
        },
        {
          id: "features-4",
          question: "How does the journal feature work?",
          answer:
            "The journal feature lets you document your pregnancy journey with text entries, mood tracking, and photos. You can add daily notes about how you're feeling, track symptoms, record special moments, and look back on your journey. All entries are private and securely stored.",
        },
        {
          id: "features-5",
          question: "What information should I track?",
          answer:
            "We recommend tracking: pregnancy symptoms, baby kicks, weight changes, appointments, medications, mood patterns, sleep quality, and nutrition. The more you track, the better insights you'll get. All tracking is optional and you can customize what you want to monitor.",
        },
      ],
    },
    {
      title: "Account & Privacy",
      faqs: [
        {
          id: "account-1",
          question: "Is my data secure and private?",
          answer:
            "Yes. We take your privacy seriously. All your personal data is encrypted and stored securely using industry-standard security protocols. We never share your personal information with third parties without your explicit consent. You can read our full Privacy Policy in Settings.",
        },
        {
          id: "account-2",
          question: "How do I update my profile information?",
          answer:
            "Tap the Profile tab, then select 'Edit Profile'. Here you can update your name, profile photo, pregnancy week, due date, and other personal information. Changes are saved automatically and synced across all your devices.",
        },
        {
          id: "account-3",
          question: "Can I delete my account?",
          answer:
            "Yes, you can delete your account anytime by going to Profile > Settings > Account Settings > Delete Account. Please note that this action is permanent and will delete all your data, including journal entries, tracking history, and saved content.",
        },
        {
          id: "account-4",
          question: "How do I reset my password?",
          answer:
            "On the login screen, tap 'Forgot Password?'. Enter your registered email address and we'll send you a password reset link. Click the link in the email and create a new password. If you don't receive the email, check your spam folder.",
        },
      ],
    },
    {
      title: "Health & Safety",
      faqs: [
        {
          id: "health-1",
          question: "Is the yoga safe during all stages of pregnancy?",
          answer:
            "Our yoga sessions are designed by certified prenatal instructors and are generally safe for healthy pregnancies. However, always consult your healthcare provider before starting any exercise program. Each session includes modifications for different trimesters and fitness levels.",
        },
        {
          id: "health-2",
          question: "When should I contact my doctor?",
          answer:
            "Elara is a wellness companion, not a replacement for medical care. Contact your healthcare provider immediately if you experience: severe pain, bleeding, reduced baby movements, severe headaches, vision changes, or any concerning symptoms. Always prioritize professional medical advice.",
        },
        {
          id: "health-3",
          question: "Can I share my tracking data with my doctor?",
          answer:
            "Yes! You can export your tracking data (kick counts, symptoms, weight, etc.) as a PDF or CSV file from the Tracker tab. Tap the share icon and choose your preferred format. This makes it easy to discuss your progress during prenatal appointments.",
        },
        {
          id: "health-4",
          question: "Are the exercises suitable for beginners?",
          answer:
            "Yes! We offer sessions for all fitness levels, from complete beginners to advanced practitioners. Each session is labeled with difficulty level and includes detailed instructions and modifications. Start with beginner-friendly sessions and gradually progress as you feel comfortable.",
        },
      ],
    },
    {
      title: "Troubleshooting",
      faqs: [
        {
          id: "troubleshooting-1",
          question: "The app is not loading. What should I do?",
          answer:
            "First, check your internet connection. If connected, try closing the app completely and reopening it. If the problem persists, check if you have the latest app version in the App Store/Play Store. Clear the app cache in your device settings, or reinstall the app if necessary.",
        },
        {
          id: "troubleshooting-2",
          question: "Videos are not playing smoothly",
          answer:
            "Video playback issues are usually related to internet speed. Try connecting to a stronger Wi-Fi network. You can also download content for offline viewing when connected to Wi-Fi. Lower the video quality in Settings > Video Quality if you have limited bandwidth.",
        },
        {
          id: "troubleshooting-3",
          question: "I'm not receiving notifications",
          answer:
            "Go to your device Settings > Notifications > Elara and ensure notifications are enabled. Within the app, go to Profile > Settings > Notifications and check that your preferred notification types are turned on. Make sure 'Do Not Disturb' mode is off on your device.",
        },
        {
          id: "troubleshooting-4",
          question: "My data is not syncing across devices",
          answer:
            "Ensure you're logged into the same account on all devices and have an active internet connection. Pull down on the home screen to manually refresh. If issues persist, log out and log back in on the affected device. Contact support if the problem continues.",
        },
      ],
    },
    {
      title: "Subscription & Billing",
      faqs: [
        {
          id: "billing-1",
          question: "How much does premium cost?",
          answer:
            "Premium subscription is available as: Monthly - $9.99/month, Quarterly - $24.99 (save 17%), Annual - $79.99 (save 33%). All plans include a 7-day free trial. Prices may vary by region. Cancel anytime without penalty.",
        },
        {
          id: "billing-2",
          question: "How do I cancel my subscription?",
          answer:
            "For iOS: Settings > [Your Name] > Subscriptions > Elara > Cancel. For Android: Play Store > Menu > Subscriptions > Elara > Cancel. You'll retain premium access until the end of your billing period. We're sorry to see you go!",
        },
        {
          id: "billing-3",
          question: "Do you offer refunds?",
          answer:
            "Refunds are handled according to App Store and Google Play policies. Generally, if you cancel within the free trial period, you won't be charged. For other refund requests, contact us at support@elara-app.com with your order details and we'll do our best to help.",
        },
        {
          id: "billing-4",
          question: "What happens after my free trial?",
          answer:
            "Your free trial lasts 7 days. After that, you'll be automatically charged unless you cancel before the trial ends. You'll receive a reminder 2 days before the trial ends. You can cancel anytime during the trial without being charged.",
        },
      ],
    },
  ];

  const handleContactSupport = (method: "email" | "phone") => {
    if (method === "email") {
      Linking.openURL("mailto:support@elara-app.com?subject=Support Request");
    } else {
      Linking.openURL("tel:+1-800-ELARA-01");
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
          <ChevronLeft size={24} color="#1A1A1A" strokeWidth={2} />
        </Pressable>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Quick Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Need Immediate Help?</Text>
          <Text style={styles.contactSubtitle}>
            Our support team is here for you
          </Text>

          <View style={styles.contactButtons}>
            <Pressable
              style={({ pressed }) => [
                styles.contactButton,
                pressed && styles.contactButtonPressed,
              ]}
              onPress={() => handleContactSupport("email")}
            >
              <View style={styles.contactIconContainer}>
                <Mail size={20} color={COLORS.PRIMARY} strokeWidth={2} />
              </View>
              <Text style={styles.contactButtonText}>Email Us</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.contactButton,
                pressed && styles.contactButtonPressed,
              ]}
              onPress={() => handleContactSupport("phone")}
            >
              <View style={styles.contactIconContainer}>
                <Phone size={20} color={COLORS.PRIMARY} strokeWidth={2} />
              </View>
              <Text style={styles.contactButtonText}>Call Us</Text>
            </Pressable>
          </View>
        </View>

        {/* FAQ Sections */}
        <View style={styles.faqContainer}>
          <Text style={styles.faqMainTitle}>Frequently Asked Questions</Text>

          {faqSections.map((section, sectionIndex) => (
            <View key={section.title} style={styles.faqSection}>
              <Text style={styles.faqSectionTitle}>{section.title}</Text>

              {section.faqs.map((faq, faqIndex) => {
                const isExpanded = expandedIds.includes(faq.id);
                const isLast = faqIndex === section.faqs.length - 1;

                return (
                  <Pressable
                    key={faq.id}
                    style={({ pressed }) => [
                      styles.faqItem,
                      pressed && styles.faqItemPressed,
                      isLast && styles.faqItemLast,
                    ]}
                    onPress={() => toggleFAQ(faq.id)}
                  >
                    <View style={styles.faqQuestion}>
                      <MessageCircle
                        size={20}
                        color={isExpanded ? COLORS.PRIMARY : "#999"}
                        strokeWidth={2}
                      />
                      <Text
                        style={[
                          styles.faqQuestionText,
                          isExpanded && styles.faqQuestionTextExpanded,
                        ]}
                      >
                        {faq.question}
                      </Text>
                      <ChevronDown
                        size={20}
                        color="#999"
                        strokeWidth={2}
                        style={[
                          styles.chevron,
                          isExpanded && styles.chevronExpanded,
                        ]}
                      />
                    </View>
                    {isExpanded && (
                      <View style={styles.faqAnswer}>
                        <Text style={styles.faqAnswerText}>{faq.answer}</Text>
                      </View>
                    )}
                  </Pressable>
                );
              })}
            </View>
          ))}
        </View>

        {/* Still Need Help Section */}
        <View style={styles.stillNeedHelpSection}>
          <Text style={styles.stillNeedHelpTitle}>Still Need Help?</Text>
          <Text style={styles.stillNeedHelpText}>
            Can't find what you're looking for? Our support team is available
            24/7 to assist you with any questions or concerns.
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.contactSupportButton,
              pressed && styles.contactSupportButtonPressed,
            ]}
            onPress={() => handleContactSupport("email")}
          >
            <Text style={styles.contactSupportButtonText}>
              Contact Support Team
            </Text>
          </Pressable>
        </View>

        {/* Footer Info */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Elara App v1.0.0</Text>
          <Text style={styles.footerText}>
            support@elara-app.com • +1-800-ELARA-01
          </Text>
          <Text style={styles.footerTextSmall}>
            Available Monday - Friday, 9AM - 6PM EST
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
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  backButtonPressed: {
    backgroundColor: "#F5F5F5",
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
  contactSection: {
    backgroundColor: "#FFF",
    padding: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 8,
    textAlign: "center",
  },
  contactSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  contactButtons: {
    flexDirection: "row",
    gap: 12,
  },
  contactButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.PINK,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    gap: 8,
  },
  contactButtonPressed: {
    opacity: 0.8,
  },
  contactIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  contactButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.PRIMARY,
  },
  faqContainer: {
    paddingHorizontal: 20,
  },
  faqMainTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 24,
  },
  faqSection: {
    marginBottom: 32,
  },
  faqSectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.PRIMARY,
    marginBottom: 16,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  faqItem: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  faqItemPressed: {
    backgroundColor: "#FAFAFA",
  },
  faqItemLast: {
    marginBottom: 0,
  },
  faqQuestion: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  faqQuestionText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    lineHeight: 22,
  },
  faqQuestionTextExpanded: {
    color: COLORS.PRIMARY,
  },
  chevron: {
    transform: [{ rotate: "0deg" }],
  },
  chevronExpanded: {
    transform: [{ rotate: "180deg" }],
  },
  faqAnswer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F5F5F5",
    paddingLeft: 32,
  },
  faqAnswerText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
  },
  stillNeedHelpSection: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginTop: 32,
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  stillNeedHelpTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 12,
  },
  stillNeedHelpText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  contactSupportButton: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  contactSupportButtonPressed: {
    opacity: 0.8,
  },
  contactSupportButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 6,
  },
  footerText: {
    fontSize: 13,
    color: "#999",
    textAlign: "center",
  },
  footerTextSmall: {
    fontSize: 11,
    color: "#BBB",
    textAlign: "center",
  },
});
