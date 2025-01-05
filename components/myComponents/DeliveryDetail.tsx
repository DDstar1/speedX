import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Divider } from "@/components/ui/divider";
import { LinearGradient } from "expo-linear-gradient";
import PackageSVG from "@/assets/icons/packageBox.svg";

const DeliveryDetail = ({
  to,
  id,
  status,
  startTime,
  startPlace,
  endTime,
  endPlace,
  imageSource,
  showFullDetail,
  showMiniDetail,
  className,
}) => {
  return (
    <LinearGradient
      colors={["#eb9dff", "#f9e5ff"]} // Gradient from #cd15fc to a very light shade
      start={{ x: 0, y: 0 }} // Start of the gradient
      end={{ x: 1, y: 1 }} // End of the gradient
      className={`${className} p-5 rounded-3xl overflow-hidden `}
    >
      {/* Top Section */}
      <View className="flex flex-row items-center gap-2">
        <View className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden">
          <Image
            source={imageSource}
            className="absolute w-full h-full object-contain"
          />
        </View>
        <View className="flex-1">
          <Text className="max-w-32 ">To: {to}</Text>
          <Text className="max-w-32 ">ID: {id}</Text>
        </View>
        <Text className="max-w-24">{status}</Text>
      </View>
      {showMiniDetail && (
        <>
          {/* Divider */}
          <Divider className="my-2 bg-indigo-500" />

          {/* Bottom Section */}
          <View className="flex flex-row gap-2 items-center">
            <View className="flex flex-1 items-start gap-2">
              <Text>{startTime}</Text>
              <Text>{startPlace}</Text>
            </View>
            <View>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
            <View className="flex items-end flex-1 gap-2">
              <Text>{endTime}</Text>
              <Text>{endPlace}</Text>
            </View>
          </View>
        </>
      )}
      {showFullDetail && (
        <>
          {/* Divider */}
          <Divider className="my-2 bg-indigo-500" />

          <View className="flex-row gap-3 my-2 items-center">
            <View className="rounded-full bg-black w-9 h-9 items-center justify-center">
              <Feather
                name="package"
                className="text-center"
                size={24}
                color="white"
              />
            </View>
            for Explore
            <Text className=" font-bold">Package Details</Text>
          </View>

          <View className="flex flex-col gap-2">
            <View className="flex flex-row gap-2 justify-evenly">
              <View className="align-center">
                <Text className="text-xs font-extrabold">Type</Text>
                <Text>small (&lt; 20kg)</Text>
              </View>
              <Divider
                orientation="vertical"
                className="my-1 h-8 bg-indigo-500"
              />
              <View>
                <Text className="text-xs font-extrabold">Category</Text>
                <Text>Accessories</Text>
              </View>
              <Divider
                orientation="vertical"
                className="my-1 h-8 bg-indigo-500"
              />
              <View>
                <Text className="text-xs font-extrabold">Time Sent</Text>
                <Text>13:00</Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-evenly">
              <View>
                <Text className="text-xs font-extrabold">Status</Text>
                <Text>Transit</Text>
              </View>
              <Divider
                orientation="vertical"
                className="my-1 h-8 bg-indigo-500"
              />
              <View>
                <Text className="text-xs font-extrabold">Delivery Cost</Text>
                <Text>₦1000</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </LinearGradient>
  );
};

export default DeliveryDetail;
