import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { deliveriesData } from "@/constants/deliveriesData";
import DeliveryDetail from "@/components/myComponents/DeliveryDetail";
import MyButton from "@/components/myComponents/MyButton";
import { Link } from "expo-router";
import MyProgressBar from "@/components/myComponents/MyProgressBar";
import { useState } from "react";

export default function DeliveryScreen() {
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth * 0.85; // 85% of the screen width
  const [maxHeight, setMaxHeight] = useState(0);

  // Handle layout changes to track max height
  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    if (height > maxHeight) {
      setMaxHeight(height); // Update maxHeight if current child's height is greater
    }
  };

  return (
    <SafeAreaView
      style={{ flexShrink: 1 }}
      className=" flex-1 justify-around bg-gray-200"
    >
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 20,
            paddingHorizontal: 16,
          }}
          // style={{  }}
        >
          {/* First delivery item */}
          <View style={{ width: itemWidth }}>
            <DeliveryDetail
              className="bg-blue-200 p-3"
              {...deliveriesData[0]} // Pass first delivery data
              showFullDetail={true}
              showMiniDetail={true}
            />
          </View>

          {/* Second item (details and progress bar) */}
          <View
            style={{ width: itemWidth }}
            className="gap-4 p-5 rounded-3xl bg-white items-center justify-evenly"
          >
            <View className="flex flex-row gap-4 w-full items-center ">
              <View className="flex rounded-full bg-black w-10 h-10 items-center justify-center">
                <EvilIcons
                  name="location"
                  className="text-center"
                  size={30}
                  color="white"
                />
              </View>
              <Text className="max-w-32 text-lg font-bold">
                Transit Details
              </Text>
            </View>

            <MyProgressBar />

            {/* Address details */}
            <View className="flex flex-col gap-1">
              <Text className="text-sm font-extrabold">From Address:</Text>
              <Text>
                Apartment 5B, Sunrise Towers 123 Maple Street Brooklyn, New
                York, 11201
              </Text>
            </View>
            <View className="flex flex-col gap-1">
              <Text className="text-sm font-extrabold">To Address:</Text>
              <Text>
                Apartment 5B, Sunrise Towers 123 Maple Street Brooklyn, New
                York, 11201
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* Driver Details Section */}
      <View className="mt-5 mx-4 bg-white rounded-3xl p-5 shadow-lg">
        <View className="flex-row mb-3 gap-4 items-center">
          <View className="rounded-full bg-black w-10 h-10 items-center justify-center">
            <AntDesign
              name="user"
              className="text-center"
              size={25}
              color="white"
            />
          </View>
          <Text className="text-xl font-semibold ">Driver Details</Text>
        </View>
        <View className="flex flex-row gap-4 items-center">
          {/* Driver's Image */}
          <Image
            source={{ uri: deliveriesData[0].driverImage }} // Assuming driverImage is part of deliveriesData
            className="w-16 h-16 rounded-full"
          />
          <View>
            <Text className="text-lg font-bold">
              {deliveriesData[0].driverName}
            </Text>
            <Text className="text-sm text-gray-500">
              Vehicle: {deliveriesData[0].vehicle}
            </Text>
          </View>
        </View>
      </View>

      {/* Live Tracking Button */}
      <Link asChild href="/liveTracking">
        <MyButton
          text="Live Tracking"
          styles="bg-gray-500 rounded-full p-2 px-3 mx-2 min-w-14"
        />
      </Link>
    </SafeAreaView>
  );
}
