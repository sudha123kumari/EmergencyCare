import React from "react";
import AnimatedLoader from "react-native-animated-loader";

const Spinner = ({ visible = false }) => {
  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      source={require("../../assets/images/196-material-wave-loading.json")}
      animationStyle={{width : 100 , height : 100}}
      speed={1}
    />
  );
};

export default Spinner;
