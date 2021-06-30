import React from "react";
import { SafeAreaView, View, Alert, Text } from "react-native";
import Footer from "../components/Footer";
import HomeScreenCard from "../components/HomeScreenCard";
import * as Location from "expo-location";
import AnimatedLoader from "../components/AnimatedLoader";

export default class HomeScreen extends React.Component {
  state = {
    location: "", // location.coords.latitude , location.coords.longitude
    visible: false,
  };

  getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied.");
      this.props.navigation.navigate("Start");
    } else {
      try {
        let locationData = await Location.getCurrentPositionAsync({});
        this.setState({ location: locationData });

        if (this.state.location) {
          console.log(this.state.location);
        }
      } catch (e) {
        Alert.alert(
          "We could not find your position. Please make sure your location service provider is on."
        );
        Location.enableNetworkProviderAsync();
      }
    }
  };

  async componentDidMount() {
    this.setState({ visible: true });
    await this.getLocationPermission();
  }

  render() {
    return (
      <React.Fragment>
        {!!this.state.location ? (
          <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <View
              style={{
                flex: 3.1,
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-around",
                alignItems: "flex-end",
              }}
            >
              <HomeScreenCard
                name={"Hospitals"}
                color={{ backgroundColor: "#EAF8F4", borderColor: "#A9FFC8" }}
                imgSrc={require("../../assets/images/Hospital.png")}
                onClick={() =>
                  this.props.navigation.navigate("Common", {
                    name: "Hospitals",
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                  })
                }
              />
              <HomeScreenCard
                name={"Fire Stations"}
                color={{ backgroundColor: "#FFF8E0", borderColor: "#FFE9A4" }}
                imgSrc={require("../../assets/images/FireService.png")}
                onClick={() =>
                  this.props.navigation.navigate("Common", {
                    name: "Fire Stations",
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                  })
                }
              />
            </View>
            <View style={{ flex: 3, alignItems: "center" }}>
              <HomeScreenCard
                name={"Police Stations"}
                color={{ backgroundColor: "#FAECFF", borderColor: "#D3B0E0" }}
                imgSrc={require("../../assets/images/Police.png")}
                onClick={() =>
                  this.props.navigation.navigate("Common", {
                    name: "Police Stations",
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                  })
                }
              />
            </View>

            <View style={{ flex: 1 }}>
              <Footer />
            </View>
          </SafeAreaView>
        ) : (
          <AnimatedLoader visible={this.state.visible} />
        )}
      </React.Fragment>
    );
  }
}
