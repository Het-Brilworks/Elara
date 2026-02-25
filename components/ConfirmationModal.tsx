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
                  <ActivityIndicator color="#FFF" />
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  modalContainer: {
    width: "100%",
    maxWidth: 340,
  },
  modal: {
    backgroundColor: "#FFF",
    borderRadius: theme.radii.lg + 4,
    padding: theme.spacing.xl,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    ...theme.textStyles.title_large,
    color: "#1A1A1A",
    marginBottom: theme.spacing.md,
    textAlign: "center",
    fontWeight: "700",
  },
  message: {
    ...theme.textStyles.body_medium,
    color: "#666",
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
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: theme.radii.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
  },
  cancelButton: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  confirmButton: {
    backgroundColor: theme.colors.light.primary,
  },
  destructiveButton: {
    backgroundColor: "#FF6B6B",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonLoading: {
    opacity: 0.6,
  },
  cancelButtonText: {
    ...theme.textStyles.label_large,
    color: "#1A1A1A",
    fontWeight: "600",
  },
  confirmButtonText: {
    ...theme.textStyles.label_large,
    color: "#FFF",
    fontWeight: "600",
  },
  destructiveButtonText: {
    ...theme.textStyles.label_large,
    color: "#FFF",
    fontWeight: "600",
  },
});
