import { theme } from "@/constants/theme";
import { Tabs } from "expo-router";
import { Activity, Dumbbell, Heart, Home, User } from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.light.background,
          borderTopColor: theme.colors.light.divider,
          borderTopWidth: 1,
          height: Platform.OS === "ios" ? 88 : 68,
          paddingBottom: Platform.OS === "ios" ? 28 : 12,
          paddingTop: 8,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: theme.colors.light.primary,
        tabBarInactiveTintColor: theme.colors.light.hint,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={22} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="tracker"
        options={{
          title: "Tracker",
          tabBarIcon: ({ color, size }) => (
            <Activity color={color} size={22} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="yoga"
        options={{
          title: "Yoga",
          tabBarIcon: ({ color, size }) => (
            <Dumbbell color={color} size={22} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="meditation"
        options={{
          title: "Meditation",
          tabBarIcon: ({ color, size }) => (
            <Heart color={color} size={22} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={22} strokeWidth={2} />
          ),
        }}
      />
    </Tabs>
  );
}
