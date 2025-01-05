import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Use SafeAreaView for proper layout
import { ThemedView } from "@/components/ThemedView"; // Assuming you're keeping ThemedView

export default function NotificationScreen() {
  return (
    <ThemedView className="flex-1 items-center p-5">
      {/* Notifications */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-base text-gray-500 dark:text-gray-300">
          You have no new notifications at the moment.
        </Text>
        <Text className="text-base text-gray-500 dark:text-gray-300 mt-2">
          Stay tuned for updates and alerts.
        </Text>
      </View>
    </ThemedView>
  );
}
