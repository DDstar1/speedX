import React from "react";
import { Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
// import { styled } from "nativewind";

const MyButton = ({ text, styles, onPress }) => {
  const handlePress = () => {
    // Trigger haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Call the external onPress if provided
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      className={`${styles}  rounded-full bg-green-500 active:bg-green-600 scale-1 active:scale-90`}
      onPress={handlePress}
    >
      <Text className="text-white text-center text-xl p-1">{text}</Text>
    </Pressable>
  );
};

export default MyButton;
