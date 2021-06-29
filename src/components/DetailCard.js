import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default DetailCard = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        height: 150,
        backgroundColor: "#EFFEFA",
        marginVertical: 5,
        borderRadius: 20,
        padding: 10,
      }}
    >
      <View
        style={{
          flex: 1.4,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          marginHorizontal: 2,
          borderRadius: 14,
        }}
      ></View>
      <View
        style={{
          flex: 4,
          paddingVertical: 20,
          justifyContent: "space-between",
          paddingLeft: 2,
          marginHorizontal: 2,
          borderRadius: 14,
        }}
      >
        <Text style={{ fontSize: 20, color: "#8F8F8F", fontWeight: "bold" }}>
          name
        </Text>
        <Text style={{ fontSize: 12 }}>address</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 12, color: "#0A88FE" }}>contact1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 12, color: "#0A88FE" }}>contact2</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.8,
          marginLeft: 2,
        }}
      >
        <Text style={{ fontSize: 12, color: "blue" }}>Distance</Text>
      </View>
    </View>
  );
};
