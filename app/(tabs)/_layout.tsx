import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

import TabBarBackground from "@/components/ui/TabBarBackground";
import MyTabBar from "@/components/myComponents/TabBar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
      // tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} /> // Home icon
          ),
        }}
      />
      <Tabs.Screen
        name="package"
        options={{
          title: "My Packages",
          tabBarIcon: ({ color }) => (
            <Feather name="package" size={24} color={color} /> // Search icon for Explore
          ),
        }}
      />
      <Tabs.Screen
        name="addDelivery"
        options={{
          title: "Create Delivery",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-circle-outline" size={24} color={color} /> // Bell icon for Notifications
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={28} color={color} /> // User icon for Profile
          ),
        }}
      />
    </Tabs>
  );
}
