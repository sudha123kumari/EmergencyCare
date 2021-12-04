import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Linking,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Footer from "../components/Footer";
export default class SOSScreen extends React.Component {
  colorList = [
    { id: 1, backgroundColor: "#FFF599",title:"Ambulance",contactNumber:102 },
    { id: 2, backgroundColor: "#EFFEFA",title:"Children Helpline",contactNumber:1098 },
    { id: 3, backgroundColor: "#7ED5FA",title:"Corona Helpline",contactNumber: 1075 },
    { id: 4, backgroundColor: "#B6D5FF",title:"Cyber Crime Helpline",contactNumber:155620 },
    { id: 5, backgroundColor: "#BEFFFB",title:"Disaster Management Services",contactNumber:108 },
    { id: 6, backgroundColor: "#FFF599",title:"Fire",contactNumber:101 },  
    { id: 7, backgroundColor: "#EEEFFF",title:"LPG Leak Helpline",contactNumber:1906},
    { id: 8, backgroundColor: "#BBBEFF",title:"Missing Child And Women",contactNumber:1094 },
    { id: 9, backgroundColor: "#FFF599",title:"National Emergency Number",contactNumber:112},
    { id: 10, backgroundColor: "#7ED5FA",title:"Police",contactNumber:100 },
    { id: 11, backgroundColor: "#FFCEF1",title:"Railway Accident Emergency Service",contactNumber:1072},
    { id: 12, backgroundColor: "#EFFEFA",title:"Senior Citizen Helpline",contactNumber:14567},
    { id: 13, backgroundColor: "#BBBEFF",title:"Tourist Helpline",contactNumber:1363},
    { id: 14, backgroundColor: "#B7FFD4",title:"Women Helpline",contactNumber:1091},
    { id: 15, backgroundColor: "#7ED5FA",title:"Women Helpline - ( Domestic Abuse )",contactNumber:181},
  ];
  renderItem = ({item}) => {
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
        style={{
          flex: 1,
          marginHorizontal: 2,
          
          backgroundColor:item.backgroundColor,
          marginVertical: 5,
          borderRadius: 10,
          padding: 20,
        }}
      > 
    <Text style={{fontSize:18,fontWeight:"bold",}}>
        {item.title}
    </Text>
   <TouchableOpacity
              onPress={() => {
                dialCall(item.contactNumber);
              }}
            >
        <Text style={{ fontSize: 15, color: "#0A88FE",fontWeight:"700" }}>
          {item.contactNumber}
        </Text>
    </TouchableOpacity>


</View>
);
};

render() {
    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 9, backgroundColor: "#FFFFFF",paddingVertical:20}}>
              <FlatList
                data={this.colorList}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={{ flex: 1, padding: 12 }}
              />
          </View>
          <Footer />
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
