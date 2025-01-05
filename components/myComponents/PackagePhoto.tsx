import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import PhotoPreviewSection from "@/components/myComponents/PhotoPreviewSection";

export default function CameraScreen() {
  const [type, setType] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const toggleCameraType = () => {
    setType((current) => (current === "back" ? "front" : "back"));
  };

  const handleTakePhoto = async () => {
    try {
      if (cameraRef.current) {
        const options = {
          quality: 1,
          base64: true,
          exif: false,
        };
        const takenPhoto = await cameraRef.current.takePictureAsync(options);
        console.log("Photo taken:", takenPhoto);
        setPhoto(takenPhoto);
      } else {
        console.log("Camera ref is not available");
      }
    } catch (error) {
      console.error("Error taking photo:", error);
    }
  };

  const handleRetakePhoto = () => setPhoto(null);

  if (photo) {
    return (
      <PhotoPreviewSection
        photo={photo}
        handleRetakePhoto={handleRetakePhoto}
      />
    );
  }

  return (
    <View className="flex-1 bg-black">
      <CameraView className="flex-1" facing={type} ref={cameraRef}>
        <View className="flex-1 bg-transparent"></View>
        <View className="w-full flex-row justify-around items-center pb-2">
          <TouchableOpacity
            className="bg-gray-700 p-4 rounded-full"
            onPress={toggleCameraType}
          >
            <AntDesign name="retweet" size={36} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-gray-700 p-4 rounded-full"
            onPress={handleTakePhoto}
          >
            <AntDesign name="camera" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
