import { COLORS } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { Stack, useRouter } from "expo-router";
import React from "react";
import {
    ImageBackground,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.replace("/auth");
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <ImageBackground
                    source={require("@/assets/images/2151004162 1.png")}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                >
                    <SafeAreaView style={styles.overlay}>
                        <View style={styles.content}>
                            {/* <View style={styles.topSection}>
                                <Image
                                    source={require("@/assets/images/2151004162 1.png")}
                                    style={styles.heroImage}
                                    resizeMode="contain"
                                />
                            </View> */}

                            <View style={styles.bottomSection}>
                                <Text style={styles.brandTitle}>Elara</Text>
                                <Text style={styles.title}>Nurturing Every Step of Motherhood</Text>
                                <Text style={styles.subtitle}>
                                    Your companion for fertility, pregnancy, and postnatal wellness.
                                </Text>

                                <Pressable
                                    style={({ pressed }) => [
                                        styles.button,
                                        pressed && styles.buttonPressed,
                                    ]}
                                    onPress={handleGetStarted}
                                >
                                    <Text style={styles.buttonText}>Get Started</Text>
                                </Pressable>

                                <View style={styles.footer}>
                                    <Text style={styles.footerText}>Already have an account? </Text>
                                    <Pressable onPress={() => router.replace("/auth")}>
                                        <Text style={styles.loginLink}>Log In</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(123, 47, 76, 0.4)", // Brand primary color with opacity for consistency
    },
    content: {
        flex: 1,
        padding: theme.spacing.lg,
        justifyContent: "space-between",
    },
    topSection: {
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center",
    },
    heroImage: {
        width: "90%",
        height: "100%",
    },
    bottomSection: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: theme.spacing.xl,
        alignItems: "center",
    },
    brandTitle: {
        ...theme.textStyles.headline_medium,
        color: COLORS.WHITE,
        fontWeight: "700",
        letterSpacing: 4,
        marginBottom: theme.spacing.xs,
        textAlign: "center",
        textTransform: "uppercase",
    },
    title: {
        ...theme.textStyles.headline_large,
        color: COLORS.WHITE,
        textAlign: "center",
        marginBottom: theme.spacing.sm,
        lineHeight: 40,
    },
    subtitle: {
        ...theme.textStyles.body_large,
        color: "rgba(255,255,255,0.9)",
        textAlign: "center",
        marginBottom: theme.spacing.xl,
        paddingHorizontal: theme.spacing.md,
    },
    button: {
        backgroundColor: COLORS.WHITE,
        paddingVertical: theme.spacing.md + 4,
        paddingHorizontal: theme.spacing.xl,
        borderRadius: theme.radii.full,
        width: "100%",
        alignItems: "center",
        ...theme.shadows.lg,
    },
    buttonPressed: {
        opacity: 0.9,
        transform: [{ scale: 0.98 }],
    },
    buttonText: {
        ...theme.textStyles.label_large,
        color: theme.colors.light.primary,
        fontSize: 18,
        fontWeight: "700",
    },
    footer: {
        flexDirection: "row",
        marginTop: theme.spacing.lg,
        alignItems: "center",
    },
    footerText: {
        ...theme.textStyles.body_medium,
        color: "rgba(255,255,255,0.9)",
    },
    loginLink: {
        ...theme.textStyles.label_large,
        color: COLORS.WHITE,
        textDecorationLine: "underline",
        fontWeight: "700",
    },
});
