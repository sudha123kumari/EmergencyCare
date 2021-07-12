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
import AnimatedLoader from "../components/AnimatedLoader";

export default class CommonScreen extends React.Component {
  state = {
    latitude: this.props.route.params.latitude,
    longitude: this.props.route.params.longitude,
    type: this.props.route.params.type,
    nearbyPlaces: [],
    nearbyPlaceDetails: [],
    placeDistance: [],
    flag: false,
    loader: false,
  };

  colorList = [
    { id: 1, backgroundColor: "#B7FFD4" },
    { id: 2, backgroundColor: "#7ED5FA" },
    { id: 3, backgroundColor: "#BEFFFB" },
    { id: 4, backgroundColor: "#FFF599" },
    { id: 5, backgroundColor: "#FFCEF1" },
    { id: 6, backgroundColor: "#EFFEFA" },
    { id: 7, backgroundColor: "#BBBEFF" },
    { id: 8, backgroundColor: "#EEEFFF" },
    { id: 9, backgroundColor: "#B6D5FF" },
    { id: 10, backgroundColor: "#FFF599" },
  ];

  async componentDidMount() {
    this.setState({ loader: true });
    const response = await searchNearbyPlaces(
      this.state.latitude,
      this.state.longitude,
      this.state.type
    );
    let data = [...response];
    this.setState({ nearbyPlaces: [...data] });

    let pData = [];
    await Promise.all(
      response.map(async (item) => {
        const res = await placeDetails(item.place_id);
        pData.push(res);
      })
    );

    this.setState({ nearbyPlaceDetails: [...pData] });

    let pDistance = [];
    await Promise.all(
      response.map(async (item) => {
        const dis = await findDistance(
          this.state.latitude,
          this.state.longitude,
          item.place_id
        );
        pDistance.push(dis);
      })
    );
    this.setState({ placeDistance: [...pDistance] });
    this.setState({ loader: false, flag: true });
  }

  renderItem = (item) => {
    if (item.index >= this.state.nearbyPlaces.length) {
      return;
    } else {
      return (
        <DetailCard
          icon={this.state.type}
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
          <View style={{ flex: 9, backgroundColor: "#FFFFFF"}}>
            <AnimatedLoader visible={this.state.loader} />
            {this.state.flag && (
              <FlatList
                data={this.colorList}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={{ flex: 1, padding: 12 }}
              />
            )}
          </View>
          <Footer />
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
