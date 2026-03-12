import { theme } from "@/constants/theme";
import { Eye, EyeOff, LucideIcon } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface InputFieldProps {
  label: string;
  placeholder: string;
  Icon: LucideIcon;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
  editable?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  Icon,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  editable = true,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Icon
            size={20}
            color={theme.colors.light.secondary_text}
            strokeWidth={2}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.light.hint}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          autoCapitalize="none"
          editable={editable}
        />
        {secureTextEntry && (
          <Pressable
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <Eye
                size={20}
                color={theme.colors.light.secondary_text}
                strokeWidth={2}
              />
            ) : (
              <EyeOff
                size={20}
                color={theme.colors.light.secondary_text}
                strokeWidth={2}
              />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.sm,
  },
  label: {
    ...theme.textStyles.body_medium,
    color: theme.colors.light.primary_text,
    marginBottom: theme.spacing.xs,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.light.surface_variant,
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: theme.colors.light.border,
    paddingHorizontal: theme.spacing.md,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.sm,
  },
  input: {
    flex: 1,
    ...theme.textStyles.body_medium,
    color: theme.colors.light.primary_text,
    paddingVertical: theme.spacing.md,
  },
  eyeIcon: {
    padding: theme.spacing.sm,
  },
});
