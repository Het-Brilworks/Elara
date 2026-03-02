import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { useAuthState } from "@/Firebase/hooks/useAuth";
import { useUpdatePregnancyWeek } from "@/Firebase/hooks/useUser";
import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface PregnancyWeekFormProps {
  onSuccess?: () => void;
}

export default function PregnancyWeekForm({
  onSuccess,
}: PregnancyWeekFormProps) {
  const { user } = useAuthState();
  const [week, setWeek] = useState("");
  const [loading, setLoading] = useState(false);
  const updateWeek = useUpdatePregnancyWeek();

  const handleSubmit = async () => {
    const weekNumber = parseInt(week);

    if (!week || isNaN(weekNumber)) {
      Alert.alert("Error", "Please enter a valid week number");
      return;
    }

    if (weekNumber < 1 || weekNumber > 43) {
      Alert.alert("Error", "Please enter a week between 1 and 43");
      return;
    }

    if (!user?.uid) {
      Alert.alert("Error", "User not found");
      return;
    }

    setLoading(true);
    try {
      await updateWeek.mutateAsync({ uid: user.uid, week: weekNumber });
      Alert.alert("Success", "Pregnancy week updated successfully!");
      if (onSuccess) onSuccess();
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to update pregnancy week");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to Baby Growth Tracker!</Text>
        <Text style={styles.subtitle}>
          Let's get started by entering your current pregnancy week
        </Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Current Pregnancy Week</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter week (1-43)"
            placeholderTextColor="#999"
            keyboardType="number-pad"
            value={week}
            onChangeText={setWeek}
            maxLength={2}
          />
          <Text style={styles.hint}>
            Enter a number between 1 and 43 representing your current pregnancy
            week
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Saving..." : "Continue"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 24,
    padding: 24,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: theme.colors.light.primary_text,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
    lineHeight: 22,
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.light.primary_text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: theme.colors.light.primary_text,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  hint: {
    fontSize: 13,
    color: "#999",
    marginTop: 6,
    lineHeight: 18,
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: COLORS.PRIMARY,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: "600",
  },
});
