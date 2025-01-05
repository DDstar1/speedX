import React from "react";
import { View, Text, Image } from "react-native";

const DeliveryItem = ({ to, id, status, imageSource }) => {
  return (
    <View className="flex flex-row items-center gap-3">
      <View className="w-12 h-12 bg-blue-500 rounded-full overflow-hidden">
        <Image
          source={imageSource}
          className="absolute w-full h-full object-contain"
        />
      </View>
      <View className="flex-1">
        <Text className="max-w-32 bg-red-100">To: {to}</Text>
        <Text className="max-w-32 bg-red-100">ID: {id}</Text>
      </View>
      <Text className="max-w-24">{status}</Text>
    </View>
  );
};

export default DeliveryItem;
