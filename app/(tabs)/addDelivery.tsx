import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { ThemedView } from "@/components/ThemedView"; // Assuming a custom component
import CarouselComponent from "@/components/myComponents/VehicleCarousel"; // Import CarouselComponent
import { vehicles } from "@/constants/vehicles";
import PackagePhoto from "@/components/myComponents/PackagePhoto";

export default function NotificationScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true); // Control autoplay state

  const toggleAutoPlay = () => {
    setIsAutoPlay((prev) => !prev); // Toggle autoplay state
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <ThemedView className="flex-1 justify-start items-center p-5">
        <Text className="text-2xl font-bold text-black dark:text-white">
          Choose Vehicle
        </Text>

        {/* Use the CarouselComponent */}
        <CarouselComponent
          vehicles={vehicles}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isAutoPlay={isAutoPlay}
          toggleAutoPlay={toggleAutoPlay}
        />
        <Text className="text-2xl font-bold text-black dark:text-white">
          Snap Your Package
        </Text>
        <PackagePhoto />
      </ThemedView>
    </SafeAreaView>
  );
}
