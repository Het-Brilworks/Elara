import { COLORS } from "@/constants/colors";
import { CheckCircle, XCircle } from "lucide-react-native";
import React, { useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

interface ToastProps {
  visible: boolean;
  message: string;
  type: "success" | "error";
  onHide: () => void;
  duration?: number;
}

export default function Toast({
  visible,
  message,
  type,
  onHide,
  duration = 3000,
}: ToastProps) {
  const translateY = React.useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      // Slide down
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        tension: 50,
        friction: 8,
      }).start();

      // Auto hide after duration
      const timer = setTimeout(() => {
        hideToast();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const hideToast = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onHide();
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          backgroundColor: type === "success" ? COLORS.PRIMARY : COLORS.ERROR,
        },
      ]}
    >
      <View style={styles.content}>
        {type === "success" ? (
          <CheckCircle size={20} color={COLORS.WHITE} strokeWidth={2.5} />
        ) : (
          <XCircle size={20} color={COLORS.WHITE} strokeWidth={2.5} />
        )}
        <Text style={styles.message}>{message}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    left: 16,
    right: 16,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 9999,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  message: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.WHITE,
    flex: 1,
  },
});
