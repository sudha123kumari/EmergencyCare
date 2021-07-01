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
const Detail = [
  {
    id: 1,
    name: "Tushar",
    distance: "25",
    unit: "km",
  },
  {
    id: 2,
    name: "Rajeev",
    distance: "25",
    unit: "km",
  },
  {
    id: 3,
    name: "Sudha",
    distance: "25",
    unit: "km",
  },
  {
    id: 4,
    name: "Rajeev",
    distance: "25",
    unit: "km",
  },
  {
    id: 5,
    name: "Tushar",
    distance: "25",
    unit: "km",
  },
  {
    id: 6,
    name: "Tushar",
    distance: "25",
    unit: "km",
  },
  {
    id: 7,
    name: "Rajeev",
    distance: "25",
    unit: "km",
  },
];
export default class CommonScreen extends React.Component {
  state = {
    latitude: this.props.route.params.latitude,
    longitude: this.props.route.params.longitude,
    nearbyPlaces: [],
    nearbyPlaceDetails: [],
    placeDistance: [],
  };

  getPlaceDetails = async () => {
    for (const place of this.state.nearbyPlaces) {
      const data = await placeDetails(place.place_id);
      this.setState({
        nearbyPlaceDetails: [...this.state.nearbyPlaceDetails, data],
      });
    }
  };

  getPlaceDistance = async () => {
    for (const place of this.state.nearbyPlaces) {
      const data = await findDistance(
        this.state.latitude,
        this.state.longitude,
        place.place_id
      );
      this.setState({
        placeDistance: [...this.state.placeDistance, data],
      });
    }
    console.log(this.state.placeDistance);
  };

  async componentDidMount() {
    const response = await searchNearbyPlaces(
      this.state.latitude,
      this.state.longitude,
      "hospital"
    );
    this.setState({ nearbyPlaces: [...response] });
    this.getPlaceDistance();
  }
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 6.1, backgroundColor: "#FFFFFF" }}>
            <ScrollView style={{ flex: 1, padding: 12 }}>
              <Text>{this.state.latitude}</Text>
              <Text>{this.state.longitude}</Text>
              <DetailCard />
              <DetailCard />
              <DetailCard />
              <DetailCard />
              <DetailCard />
            </ScrollView>
            {/* <FlatList
              data={Detail}
              renderItem={() => {
                <DetailCard />;
              }}
              keyExtractor={(item) => item.id.toString()}
              style={{ flex: 1, padding: 12 }}
            /> */}
          </View>
          <View style={{ flex: 1 }}>
            <Footer />
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
