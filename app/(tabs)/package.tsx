import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import DeliveryDetail from "@/components/myComponents/DeliveryDetail";
import { deliveriesData } from "@/constants/deliveriesData";
import { Link } from "expo-router";

const DeliveryDetails = () => {
  const buttonStyles = "bg-gray-700 rounded-full p-2 px-3 mx-2 min-w-14";
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-white px-4 py-2">
        {/* Header */}
        <View className="flex-row justify-between items-center my-2">
          <Text className="text-lg text-black font-bold">All Deliveries</Text>
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#888"
            className="bg-gray-800 rounded-full text-white px-4 py-2 flex-1 ml-4"
          />
        </View>

        {/* Tabs */}
        <ScrollView
          horizontal={true}
          className="flex min-h-12 my-3"
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row items-center justify-center">
            <Pressable className={`bg-red-500 ${buttonStyles}`}>
              <Text className="text-white text-center font-semibold">All</Text>
            </Pressable>
            <Pressable className={buttonStyles}>
              <Text className="text-white text-center font-semibold">
                Completed
              </Text>
            </Pressable>
            <Pressable className={buttonStyles}>
              <Text className="text-white text-center font-semibold">
                In Delivery
              </Text>
            </Pressable>
            <Pressable className={buttonStyles}>
              <Text className="text-white text-center font-semibold">
                In Delivery
              </Text>
            </Pressable>
          </View>
        </ScrollView>

        {/* Delivery Cards */}
        <FlatList
          showsVerticalScrollIndicator={false}
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
                  showMiniDetail={true}
                />
              </Pressable>
            </Link>
          )}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default DeliveryDetails;
