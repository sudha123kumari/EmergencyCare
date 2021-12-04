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
        this.setState({ visible: true });
        let locationData = await Location.getCurrentPositionAsync({});
        this.setState({ location: locationData });
        this.setState({ visible: false });

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
    await this.getLocationPermission();
  }

  render() {
    return (
      <React.Fragment>
        {!!this.state.location ? (
          <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <View
              style={{
                flex: 2,
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
                    type: "hospital",
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
                    type: "fire_station",
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                  })
                }
              />
            </View>
            <View style={{ 
              flex:2,
             flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "flex-start", }}>
              <HomeScreenCard
                name={"Police Stations"}
                color={{ backgroundColor: "#FAECFF", borderColor: "#D3B0E0" }}
                imgSrc={require("../../assets/images/Police.png")}
                onClick={() =>
                  this.props.navigation.navigate("Common", {
                    name: "Police Stations",
                    type: "police",
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                  })
                }
              />
                <HomeScreenCard
                name={"Help Line numbers"}
                color={{ backgroundColor: "#DFE0FC", borderColor: "#CCCEFE" }}
                imgSrc={require("../../assets/images/sos.png")}
                onClick={() =>
                  this.props.navigation.navigate("SOS", {
                    name: "Help Line numbers",
                    type: "Help Line",
                    // latitude: this.state.location.coords.latitude,
                    // longitude: this.state.location.coords.longitude,
                  })
                }
              />
            </View>

            <View style={{ flex: 0.45,justifyContent:"flex-end" }}>
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
