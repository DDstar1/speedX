// @ts-ignore
import React from "react";
import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  FlatList,
  Pressable,
} from "react-native";
// import {  } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context"; // Use SafeAreaView for proper layout
import DefaultProfileSVG from "@/assets/icons/man-user-circle-icon.svg";
import { MaterialIcons } from "@expo/vector-icons";
import DeliveryItem from "@/components/myComponents/DeliveryItem";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import DeliveryDetail from "@/components/myComponents/DeliveryDetail";
import { deliveriesData } from "@/constants/deliveriesData";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.light.background }}
      className="flex-1 bg-white dark:bg-gray-900"
    >
      {/* Header */}
      <View className="flex justify-between flex-row h-16  p-2">
        <View className="flex flex-row gap-2 items-center">
          <View className=" w-12 h-12 rounded-full bg-white overflow-hidden">
            <DefaultProfileSVG width="100%" height="100%" />
          </View>
          <View>
            <Text className="text-sm">Hello</Text>
            <Text>Abhuluimen Destiny</Text>
          </View>
        </View>

        {/* <Link href="/notification"> */}
        <View className="relative">
          <Pressable
            onPress={() => router.push("/notification")}
            className="rounded-full"
          >
            <MaterialIcons
              name="notifications-none"
              size={24}
              color="black"
              className="bg-white rounded-full p-2"
            />
          </Pressable>

          {/* Badge */}
          <View className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full z-10" />
        </View>
        {/* </Link> */}
      </View>

      {/* Content */}
      <View className="flex-1 p-4 ">
        {/* Tracking Section */}
        <View
          style={{ backgroundColor: Colors.light.tint }}
          className={` flex gap-5 mb-6 p-4 dark:bg-gray-800 rounded-2xl shadow`}
        >
          <Text className="text-xl font-semibold text-black dark:text-gray-100">
            Track Your Package
          </Text>
          <Text className="text-black dark:text-gray-300 mt-2">
            Enter your tracking ID to get the latest updates on your package.
          </Text>
          <View className="mt-4">
            <Button
              title="Track Now"
              onPress={() => console.log("Track Now Pressed")}
              color="#007AFF"
            />
          </View>
        </View>

        {/* Services Section */}
        <View className="mb-3 bg-white p-3 rounded-xl max-w-[100vw]">
          <View className="flex flex-row mb-3 justify-between items-center">
            <Text className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Latest Deliveries
            </Text>
            <Text className="text-md max-w-24 underline w-fit font-semibold text-gray-800 dark:text-gray-100">
              See All
            </Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }} // Add padding to avoid overlap
            data={deliveriesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Link asChild href="/AllDetailsPackage">
                <Pressable className="mb-4">
                  <DeliveryDetail
                    to={item.to}
                    id={item.id}
                    status={item.status}
                    startTime={item.startTime}
                    startPlace={item.startPlace}
                    endTime={item.endTime}
                    endPlace={item.endPlace}
                    imageSource={item.imageSource}
                    showFullDetail={false}
                    showMiniDetail={false}
                  />
                </Pressable>
              </Link>
            )}
          />
        </View>

        {/* Customer Support Section */}
        <View className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
          <Text className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Need Help?
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 mt-2">
            Our 24/7 customer support team is here to assist you.
          </Text>
          <View className="mt-4">
            <Button
              title="Contact Support"
              onPress={() => console.log("Contact Support Pressed")}
              color="#FF3B30"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
