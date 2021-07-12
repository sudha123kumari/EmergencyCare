import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import DetailCard from "../components/DetailCard";
import Footer from "../components/Footer";
import { searchNearbyPlaces, placeDetails, findDistance } from "../../api";

export default class CommonScreen extends React.Component {
  state = {
    latitude: this.props.route.params.latitude,
    longitude: this.props.route.params.longitude,
    type: this.props.route.params.type,
    nearbyPlaces: [],
    nearbyPlaceDetails: [],
    placeDistance: [],
    flag: false,
  };

  // getPlaceDetails = async () => {
  //   for (const place of this.state.nearbyPlaces) {
  //     const data = await placeDetails(place.place_id);
  //     this.setState({
  //       nearbyPlaceDetails: [...this.state.nearbyPlaceDetails, data],
  //     });
  //   }
  // };

  // getPlaceDistance = async () => {
  //   for (const place of this.state.nearbyPlaces) {
  //     const data = await findDistance(
  //       this.state.latitude,
  //       this.state.longitude,
  //       place.place_id
  //     );
  //     this.setState({
  //       placeDistance: [...this.state.placeDistance, data],
  //     });
  //   }
  // };

  async componentDidMount() {
    const response = await searchNearbyPlaces(
      this.state.latitude,
      this.state.longitude,
      this.state.type
    );
    var data = [...response];
    this.setState({ nearbyPlaces: [...data] });
    // console.log(
    //   "++++++++________________________+++++++++++++++++++++++++++++++++++++++"
    // );
    // console.log(data);
    // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log("places from common screen.js");
    // console.log(response);
    var pData = [];
    await Promise.all(
      response.map(async (item) => {
        const res = await placeDetails(item.place_id);
        // console.log("place details from common screen.js");
        // console.log(res);
        pData.push(res);
      })
    );
    // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    // console.log(pData);
    // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    this.setState({ nearbyPlaceDetails: [...pData] });

    var pDistance = [];
    await Promise.all(
      response.map(async (item) => {
        const dis = await findDistance(
          this.state.latitude,
          this.state.longitude,
          item.place_id
        );
        // console.log("distance in common screen .js");
        // console.log(dis);
        pDistance.push(dis);
      })
    );
    this.setState({ placeDistance: [...pDistance] });

    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    // console.log(pDistance);
    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    // console.log(this.state.nearbyPlaces);
    // console.log(this.state.nearbyPlaceDetails);
    // console.log(this.state.placeDistance);
    this.setState({ flag: true });
  }

  RenderItem = (item) => {
    // console.log(this.state.nearbyPlaces.length);
    if (item.index >= this.state.nearbyPlaces.length) {
      return;
    } else {
      return (
        <DetailCard
          icon={this.state.nearbyPlaces[item.index].icon}
          backgroundColor={item.item.backgroundColor}
          name={this.state.nearbyPlaceDetails[item.index].name}
          details={this.state.nearbyPlaceDetails[item.index]}
          distance={this.state.placeDistance[item.index]}
        />
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 6.1, backgroundColor: "#FFFFFF" }}>
            {/* <ScrollView style={{ flex: 1, padding: 12 }}>
              <Text>{this.state.latitude}</Text>
              <Text>{this.state.longitude}</Text>
            </ScrollView> */}
            {this.state.flag && (
              <FlatList
                data={[
                  { key: 1, backgroundColor: "#B7FFD4" },
                  { key: 2, backgroundColor: "#7ED5FA" },
                  { key: 3, backgroundColor: "#BEFFFB" },
                  { key: 4, backgroundColor: "#FFF599" },
                  { key: 5, backgroundColor: "#FFCEF1" },
                  { key: 6, backgroundColor: "#EFFEFA" },
                  { key: 7, backgroundColor: "#BBBEFF" },
                  { key: 8, backgroundColor: "#EEEFFF" },
                  { key: 9, backgroundColor: "#B6D5FF" },
                  { key: 10, backgroundColor: "#FFF599" },
                ]}
                renderItem={(item) => this.RenderItem(item)}
                // keyExtractor={()) => item.id.toString()}
                style={{ flex: 1, padding: 12 }}
              />
            )}
          </View>
          <View style={{ flex: 1 }}>
            <Footer />
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
