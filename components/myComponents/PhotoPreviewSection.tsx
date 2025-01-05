import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, SafeAreaView, Image, View } from "react-native";
import * as FileSystem from "expo-file-system";

const PhotoPreviewSection = ({ photo, handleRetakePhoto }) => {
  // Function to save photo data to file
  const savePhotoData = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + "photo_data.txt";
      await FileSystem.writeAsStringAsync(
        fileUri,
        JSON.stringify(
          {
            uri: photo.uri,
            base64: photo.base64,
            width: photo.width,
            height: photo.height,
          },
          null,
          2
        )
      );
      console.log(`Photo data written to: ${fileUri}`);
    } catch (error) {
      console.error("Error saving photo data:", error);
    }
  };

  // Call savePhotoData when component mounts
  React.useEffect(() => {
    savePhotoData();
  }, [photo]);

  return (
    <SafeAreaView className="flex-1 bg-black items-center justify-center">
      <View className="w-full flex-1 bg-gray-700 items-center">
        <Image
          className="w-full h-full rounded-lg"
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
          resizeMode="contain"
        />
      </View>
      <View className="mt-4 flex-row justify-center w-full">
        <TouchableOpacity
          className="bg-gray-600 rounded-full p-4 items-center justify-center"
          onPress={handleRetakePhoto}
        >
          <Fontisto name="trash" size={36} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PhotoPreviewSection;
