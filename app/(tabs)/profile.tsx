import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-purple-100 dark:bg-purple-900">
      <View className="flex-1 items-center p-5">
        {/* Profile Header */}
        <View className="mb-5 items-center">
          <Image
            source={require("@/assets/images/driver.png")} // Replace with an actual profile image
            className="w-24 h-24 rounded-full border-4 border-white dark:border-purple-700 shadow-lg"
          />
          <Text className="mt-3 text-lg font-bold text-purple-900 dark:text-white">
            John Doe
          </Text>
          <Text className="text-sm text-purple-600 dark:text-purple-300">
            john.doe@example.com
          </Text>
        </View>

        {/* Profile Details */}
        <View className="w-full bg-white dark:bg-purple-800 rounded-3xl p-5 shadow-md space-y-4">
          {/* Editable Fields */}
          <View className="space-y-1">
            <Text className="text-sm font-semibold text-purple-900 dark:text-purple-300">
              Full Name
            </Text>
            <TextInput
              editable={false}
              placeholder="John Doe"
              placeholderTextColor="#888"
              className="bg-purple-100 dark:bg-purple-700 text-purple-900 dark:text-white px-4 py-3 rounded-full shadow-sm"
            />
          </View>
          <View className="space-y-1">
            <Text className="text-sm font-semibold text-purple-900 dark:text-purple-300">
              Phone Number
            </Text>
            <TextInput
              placeholder="+123 456 7890"
              placeholderTextColor="#888"
              className="bg-purple-100 dark:bg-purple-700 text-purple-900 dark:text-white px-4 py-3 rounded-full shadow-sm"
            />
          </View>
          <View className="space-y-1">
            <Text className="text-sm font-semibold text-purple-900 dark:text-purple-300">
              Address
            </Text>
            <TextInput
              placeholder="123 Main Street"
              placeholderTextColor="#888"
              className="bg-purple-100 dark:bg-purple-700 text-purple-900 dark:text-white px-4 py-3 rounded-full shadow-sm"
            />
          </View>
          <View className="space-y-1">
            <Text className="text-sm font-semibold text-purple-900 dark:text-purple-300">
              Bio
            </Text>
            <TextInput
              placeholder="A short bio about yourself"
              placeholderTextColor="#888"
              multiline
              className="bg-purple-100 dark:bg-purple-700 text-purple-900 dark:text-white px-4 py-3 rounded-2xl shadow-sm"
            />
          </View>
        </View>

        {/* Save Button */}
        <View className="mt-6 w-full px-5">
          <View className="bg-purple-600 rounded-full py-3 shadow-lg">
            <Text className="text-center text-white font-bold">
              Save Changes
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
