import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
const logo = require("../../assets/images/HomeEmergencyLogo.jpeg");
const device = Dimensions.get("window");

export default class StartScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 0 }} />
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flex: 7,
              backgroundColor: "#eff5eb",
            }}
          >
            <ImageBackground
              source={logo}
              style={{ flex: 1, overflow: "hidden" }}
              resizeMode={"contain"}
            />
          </View>
          <View
            style={{
              flex: 4,
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
            }}
          >
            <View style={{ padding: 10, flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Home");
                }}
                style={{
                  height: 46,
                  flex: 1,
                  backgroundColor: "#48C232",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  marginVertical: 5,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 19,
                    fontWeight: "bold",
                  }}
                >
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                marginVertical: 1,
                color: "#48C232",
                fontWeight: "bold",
              }}
            >
              100% Secure
            </Text>
            <Text style={{ marginVertical: 5 }}>
              Made in India | Made for India
            </Text>
            <View
              style={{
                width: 134,
                height: 3,
                backgroundColor: "#E2E2E2",
                marginTop: 3,
                marginBottom: 10,
              }}
            ></View>
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
