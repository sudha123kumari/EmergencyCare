import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Linking,
  Platform,
  Image,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
export default DetailCard = ({
  name,
  details,
  distance,
  backgroundColor,
  icon,
}) => {
  const handleOpenWithLinking = () => {
    Linking.openURL(`${details.locationURL}`);
  };
  const dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <View
      elevation={4}
      style={{
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 2,
        backgroundColor: backgroundColor,
        marginVertical: 5,
        borderRadius: 20,
        padding: 10,
      }}
    >
      {icon && (
        <View
          style={{
            flex: 1.4,
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "white",
            marginHorizontal: 2,
            borderRadius: 14,
          }}
        >
          {icon === "hospital" && (
            <ImageBackground
              resizeMode={"contain"}
              style={{ height: 50, width: 50 }}
              source={require("../../assets/images/hospitalicon.png")}
            />
          )}
          {icon === "police" && (
            <ImageBackground
              resizeMode={"contain"}
              style={{ height: 50, width: 50 }}
              source={require("../../assets/images/policeicon.png")}
            />
          )}
          {icon === "fire_station" && (
            <ImageBackground
              resizeMode={"contain"}
              style={{ height: 50, width: 50 }}
              source={require("../../assets/images/fireicon.png")}
            />
          )}
        </View>
      )}
      <View
        style={{
          flex: 4,
          paddingVertical: 15,
          justifyContent: "space-around",
          // justifyContent: "space-between",
          paddingLeft: 2,
          marginHorizontal: 2,
          borderRadius: 14,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 12, letterSpacing: 0.7 }}>
          {details.address}
        </Text>
        {!!details.contact1 && (
          <TouchableOpacity
            onPress={() => {
              dialCall(details.contact1);
            }}
          >
            <Text style={{ fontSize: 12, color: "#0A88FE" }}>
              {details.contact1}
            </Text>
          </TouchableOpacity>
        )}
        {!!details.contact1 && (
          <TouchableOpacity
            onPress={() => {
              dialCall(details.contact2);
            }}
          >
            <Text style={{ fontSize: 12, color: "#0A88FE" }}>
              {details.contact2}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 0.8,
          marginLeft: 2,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "blue",
            position: "absolute",
            top: -5,
          }}
        >
          {distance}
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Icon
            elevation={200}
            name="map-marker"
            type="font-awesome"
            // name="chevron-forward-outline"
            // type="ionicon"
            size={30}
            onPress={handleOpenWithLinking}
            color="red"
          />
        </View>
      </View>
    </View>
  );
};
