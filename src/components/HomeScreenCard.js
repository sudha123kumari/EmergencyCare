import React from "react";
import { Text, TouchableOpacity, Image, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default HomeScreenCard = ({ name, color, imgSrc, onClick }) => {
  return (
    <TouchableOpacity
      elevation={500}
      style={{
        width: (device.width - 40) / 2,
        height: (device.width - 30) / 2,
        backgroundColor: color.backgroundColor,
        borderColor: color.borderColor,
        borderRadius: 14,
        borderWidth: 0.3,
      }}
      onPress={onClick}
    >
      <Image
        source={imgSrc}
        resizeMode={"contain"}
        style={{ flex: 2.5, alignSelf: "center" }}
      />
      <Text
        style={{
          flex: 1,
          alignSelf: "center",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
