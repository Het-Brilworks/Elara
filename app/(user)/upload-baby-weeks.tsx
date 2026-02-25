import { theme } from "@/constants/theme";
import {
    uploadAllBabyWeeks,
    uploadSingleBabyWeek,
} from "@/scripts/uploadBabyWeeks";
import { useRouter } from "expo-router";
import { ArrowLeft, Upload } from "lucide-react-native";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UploadBabyWeeksScreen() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0, week: 0 });
  const [uploadComplete, setUploadComplete] = useState(false);
  const [results, setResults] = useState({ successful: 0, failed: 0 });

  const handleUploadAll = async () => {
    Alert.alert(
      "Upload All Baby Weeks",
      "This will upload all 42 baby week images to Firebase. This may take a few minutes. Continue?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Upload",
          onPress: async () => {
            setUploading(true);
            setUploadComplete(false);
            setProgress({ current: 0, total: 42, week: 0 });

            try {
              await uploadAllBabyWeeks(
                (current, total, week) => {
                  setProgress({ current, total, week });
                },
                (successful, failed) => {
                  setResults({ successful, failed });
                  setUploadComplete(true);
                  setUploading(false);

                  Alert.alert(
                    "Upload Complete",
                    `Successfully uploaded: ${successful}\nFailed: ${failed}`,
                    [{ text: "OK" }],
                  );
                },
              );
            } catch (error) {
              setUploading(false);
              Alert.alert(
                "Upload Failed",
                error instanceof Error ? error.message : "An error occurred",
                [{ text: "OK" }],
              );
            }
          },
        },
      ],
    );
  };

  const handleUploadSingle = (week: number) => {
    Alert.alert(
      `Upload Week ${week}`,
      `Upload the baby image for week ${week}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Upload",
          onPress: async () => {
            setUploading(true);
            try {
              await uploadSingleBabyWeek(week);
              Alert.alert("Success", `Week ${week} uploaded successfully`);
            } catch (error) {
              Alert.alert(
                "Upload Failed",
                error instanceof Error ? error.message : "An error occurred",
              );
            } finally {
              setUploading(false);
            }
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1A1A1A" />
        </Pressable>
        <Text style={styles.headerTitle}>Upload Baby Weeks</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Instructions */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Instructions</Text>
          <Text style={styles.cardText}>
            This screen allows you to upload all baby week images (Weeks 1-43)
            to Firebase Storage and create corresponding documents in Firestore.
          </Text>
          <Text style={[styles.cardText, { marginTop: theme.spacing.md }]}>
            Each upload will:
          </Text>
          <Text style={styles.bulletText}>
            • Upload image to Firebase Storage
          </Text>
          <Text style={styles.bulletText}>
            • Create a document with week number, image URL, and timestamp
          </Text>
          <Text style={styles.bulletText}>
            • Store in the 'baby' collection in Firestore
          </Text>
        </View>

        {/* Upload All Button */}
        <Pressable
          style={[
            styles.uploadButton,
            uploading && styles.uploadButtonDisabled,
          ]}
          onPress={handleUploadAll}
          disabled={uploading}
        >
          {uploading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <>
              <Upload size={24} color="#FFF" />
              <Text style={styles.uploadButtonText}>
                Upload All Weeks (1-43)
              </Text>
            </>
          )}
        </Pressable>

        {/* Progress */}
        {uploading && (
          <View style={styles.progressCard}>
            <Text style={styles.progressTitle}>Uploading...</Text>
            <Text style={styles.progressText}>
              Week {progress.week} ({progress.current}/{progress.total})
            </Text>
            <View style={styles.progressBarContainer}>
              <View
                style={[
                  styles.progressBar,
                  {
                    width: `${(progress.current / progress.total) * 100}%`,
                  },
                ]}
              />
            </View>
          </View>
        )}

        {/* Results */}
        {uploadComplete && (
          <View style={styles.resultsCard}>
            <Text style={styles.resultsTitle}>Upload Complete!</Text>
            <View style={styles.resultsRow}>
              <Text style={styles.resultsLabel}>Successful:</Text>
              <Text style={styles.resultsSuccess}>{results.successful}</Text>
            </View>
            <View style={styles.resultsRow}>
              <Text style={styles.resultsLabel}>Failed:</Text>
              <Text style={styles.resultsFailed}>{results.failed}</Text>
            </View>
          </View>
        )}

        {/* Quick Upload Weeks */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Upload Individual Week</Text>
          <Text style={styles.cardText}>Upload a specific week if needed:</Text>
          <View style={styles.weekGrid}>
            {[1, 5, 10, 15, 20, 25, 30, 35, 40].map((week) => (
              <Pressable
                key={week}
                style={styles.weekButton}
                onPress={() => handleUploadSingle(week)}
                disabled={uploading}
              >
                <Text style={styles.weekButtonText}>Week {week}</Text>
              </Pressable>
            ))}
          </View>
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
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  scrollContent: {
    padding: theme.spacing.lg,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: theme.radii.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: theme.spacing.md,
  },
  cardText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  bulletText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginLeft: theme.spacing.md,
    marginTop: 4,
  },
  uploadButton: {
    backgroundColor: theme.colors.light.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  uploadButtonDisabled: {
    opacity: 0.6,
  },
  uploadButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  progressCard: {
    backgroundColor: "#FFF",
    borderRadius: theme.radii.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: theme.spacing.sm,
  },
  progressText: {
    fontSize: 14,
    color: "#666",
    marginBottom: theme.spacing.md,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#F0F0F0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: theme.colors.light.primary,
    borderRadius: 4,
  },
  resultsCard: {
    backgroundColor: "#F0F9F4",
    borderRadius: theme.radii.md,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: "#2E8B6E20",
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E8B6E",
    marginBottom: theme.spacing.md,
  },
  resultsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  resultsLabel: {
    fontSize: 14,
    color: "#666",
  },
  resultsSuccess: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E8B6E",
  },
  resultsFailed: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FF6B6B",
  },
  weekGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md,
  },
  weekButton: {
    backgroundColor: "#ECEBFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: theme.radii.sm,
  },
  weekButtonText: {
    color: theme.colors.light.primary,
    fontSize: 14,
    fontWeight: "600",
  },
});
