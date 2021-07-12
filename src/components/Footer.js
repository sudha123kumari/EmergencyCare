import React from "react";
import { Text, View, ImageBackground } from "react-native";
const FooterLogo = require("../../assets/images/FooterLogo.jpeg");
export default Footer = () => {
  return (
    <ImageBackground source={FooterLogo} style={{ flex: 1, height: 65 }} />
  );
};
