import { theme } from "@/constants/theme";
import React from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ConfirmationModalProps {
  visible: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmDestructive?: boolean;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmDestructive = false,
  isLoading = false,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onCancel}
    >
      <Pressable style={styles.overlay} onPress={onCancel}>
        <Pressable
          style={styles.modalContainer}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.modal}>
            {/* Title */}
            <Text style={styles.title}>{title}</Text>

            {/* Message */}
            <Text style={styles.message}>{message}</Text>

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
              {/* Cancel Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  styles.cancelButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={onCancel}
                disabled={isLoading}
              >
                <Text style={styles.cancelButtonText}>{cancelText}</Text>
              </Pressable>

              {/* Confirm Button */}
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  confirmDestructive
                    ? styles.destructiveButton
                    : styles.confirmButton,
                  pressed && styles.buttonPressed,
                  isLoading && styles.buttonLoading,
                ]}
                onPress={onConfirm}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator
                    color={
                      confirmDestructive ? "#fff" : theme.colors.dark.on_primary
                    }
                  />
                ) : (
                  <Text
                    style={
                      confirmDestructive
                        ? styles.destructiveButtonText
                        : styles.confirmButtonText
                    }
                  >
                    {confirmText}
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  modalContainer: {
    width: "100%",
    maxWidth: 340,
  },
  modal: {
    backgroundColor: theme.colors.dark.surface,
    borderRadius: theme.radii.lg + 4,
    padding: theme.spacing.xl,
    borderWidth: 1,
    borderColor: "rgba(168, 181, 160, 0.1)",
  },
  title: {
    ...theme.textStyles.headline_small,
    color: theme.colors.dark.primary_text,
    marginBottom: theme.spacing.md,
    textAlign: "center",
    fontWeight: "700",
  },
  message: {
    ...theme.textStyles.body_medium,
    color: theme.colors.dark.secondary_text,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: theme.spacing.xl,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  button: {
    flex: 1,
    paddingVertical: theme.spacing.md + 2,
    borderRadius: theme.radii.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
  },
  cancelButton: {
    backgroundColor: theme.colors.dark.background,
    borderWidth: 1,
    borderColor: theme.colors.dark.divider,
  },
  confirmButton: {
    backgroundColor: theme.colors.dark.primary,
  },
  destructiveButton: {
    backgroundColor: "#FF6B6B",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonLoading: {
    opacity: 0.6,
  },
  cancelButtonText: {
    ...theme.textStyles.label_large,
    color: theme.colors.dark.primary_text,
    fontWeight: "600",
  },
  confirmButtonText: {
    ...theme.textStyles.label_large,
    color: theme.colors.dark.on_primary,
    fontWeight: "600",
  },
  destructiveButtonText: {
    ...theme.textStyles.label_large,
    color: "#fff",
    fontWeight: "600",
  },
});
