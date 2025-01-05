import { View } from "react-native";
import React, { useState } from "react";
import * as Progress from "react-native-progress";
import VanSVG from "@/assets/icons/delivery-truck.svg";

function MyProgressBar() {
  const [viewWidth, setViewWidth] = useState(0);
  const progress = 0.8; // Example progress value (30%)

  return (
    <View
      className="w-full -mt-4 justify-center"
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setViewWidth(width);
      }}
    >
      {/* Flex Container */}
      <View style={{ flexDirection: "column", gap: 35 }}>
        {/* Van and Progress Bar */}
        <View style={{ position: "relative", width: viewWidth }}>
          {viewWidth > 0 && (
            <VanSVG
              width="40px"
              height="40px"
              style={{
                position: "absolute",
                left: progress * (viewWidth - 40), // Dynamically position van
                top: 0, // Keep the van aligned with the progress bar
              }}
            />
          )}
        </View>

        {viewWidth > 0 && (
          <Progress.Bar
            progress={progress}
            height={10}
            width={viewWidth}
            color="#4CAF50"
            unfilledColor="#C8E6C9"
            borderWidth={0}
          />
        )}
      </View>
    </View>
  );
}

export default MyProgressBar;
