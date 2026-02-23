import { useAuthState } from "@/Firebase/hooks/useAuth";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function UserLayout() {
  const { user, loading } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    // Redirect to auth if not logged in
    if (!loading && !user) {
      router.replace("/auth");
    }
  }, [user, loading, router]);

  // Show loading while checking auth
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0A0E0D",
        }}
      >
        <ActivityIndicator size="large" color="#A8B5A0" />
      </View>
    );
  }

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
