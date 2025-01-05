import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Animated,
  Pressable,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Ionicons from "@expo/vector-icons/Ionicons";

// CarouselComponent handles the carousel functionality and rendering
const CarouselComponent = ({
  vehicles,
  activeIndex,
  setActiveIndex,
  isAutoPlay,
  toggleAutoPlay,
}) => {
  const width = Dimensions.get("window").width;
  const opacityValues = useRef(
    vehicles.map(() => new Animated.Value(0))
  ).current; // Create a ref for opacity values

  useEffect(() => {
    // Trigger opacity animation when activeIndex changes
    vehicles.forEach((_, index) => {
      Animated.timing(opacityValues[index], {
        toValue: activeIndex === index ? 1 : 0,
        duration: 200, // Duration of fade-in/out
        useNativeDriver: true,
      }).start();
    });
  }, [activeIndex]);

  const renderItem = ({ item, index }) => {
    return (
      <View className="rounded-lg h-full p-6 items-center">
        <Image
          source={item.image_local_location}
          className="h-full w-full"
          style={{ resizeMode: "contain" }}
        />
        {/* Animate opacity based on activeIndex */}
        <Animated.View
          style={{
            opacity: opacityValues[index],
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Text className=" text-lg font-bold text-black dark:text-white">
            {item.vehicle_type}
          </Text>
          {activeIndex === index && !isAutoPlay && (
            <Ionicons name="checkmark-circle" size={20} color="green" />
          )}
        </Animated.View>
      </View>
    );
  };

  return (
    <View className="items-center h-[250px] justify-around relative overflow-hidden mb-5">
      <Carousel
        autoPlay={isAutoPlay} // Control autoplay with state
        width={width}
        height={200} // Set explicit height for the carousel container
        autoPlayInterval={3000}
        data={vehicles}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)} // Update active index when carousel changes
      />
      <View className="flex-row items-center justify-between w-full">
        {/* Pagination Dots */}
        <View className="flex-row">
          {vehicles.map((_, index) => (
            <View
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                activeIndex === index ? "bg-black dark:bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </View>

        {/* Select/Unselect Button */}
        <Pressable
          onPress={toggleAutoPlay}
          className="px-4 py-2 bg-blue-500 rounded-full"
        >
          <Text className="text-white font-bold">
            {isAutoPlay ? "Select" : "UnSelect"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CarouselComponent;
