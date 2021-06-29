import React from "react";
import { SafeAreaView, View } from "react-native";
import Footer from "../components/Footer";
import HomeScreenCard from "../components/HomeScreenCard";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
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
                  name: "Fire Stations",
                })
              }
            />
          </View>

          <View style={{ flex: 1 }}>
            <Footer />
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
