import { useAuthState, useUser } from "@/Firebase/hooks/useAuth";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { user, loading: authLoading } = useAuthState();
  const { data: userData, isLoading: userLoading } = useUser(user?.uid);

  // Show loading spinner while checking auth and user state
  if (authLoading || (user && userLoading)) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <ActivityIndicator size="large" color="#7B2F4C" />
      </View>
    );
  }

  // Redirect based on authentication status and profile completion
  if (user) {
    if (userData?.success && userData.data?.isProfileCompleted) {
      return <Redirect href="/(user)/(tabs)/home" />;
    }
    // If profile is not completed, go to onboarding
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/wellcome" />;
}
