import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const BackgroundWithOverlay = () => {
  return (
    <View className="flex-1">
      {/* Background Image */}
      <ImageBackground
        source={require("@/assets/images/map-bg.png")} // Replace with your image URL
        className="flex-1 justify-center items-center"
      >
        {/* Absolute Positioned Overlay */}
        <View className="absolute top-10  bg-white/80 p-3 rounded-full">
          <Text className="text-black font-bold">Live Tracking</Text>
        </View>

        {/* Main Content */}
        <View className="absolute flex-row items-center justify-around  gap-3 bottom-8 self-center bg-black/70 p-2 rounded-full">
          <View className="rounded-full overflow-hidden">
            <Image
              source={require("@/assets/images/driver.png")}
              className="w-12 h-12 rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="">
            <Text className="text-white">Hilary Mchaw</Text>
            <Text className="text-white text-xs">Rider name</Text>
          </View>
          <MaterialIcons
            className="bg-white rounded-full p-2"
            name="call"
            size={24}
            color="purple"
          />
          <View></View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BackgroundWithOverlay;
