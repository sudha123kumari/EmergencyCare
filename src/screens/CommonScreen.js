import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import DetailCard from "../components/DetailCard";
import Footer from "../components/Footer";

export default class CommonScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 6.1, backgroundColor: "#FFFFFF" }}>
            <DetailCard />
            <DetailCard />
            <DetailCard />
            <DetailCard />
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
