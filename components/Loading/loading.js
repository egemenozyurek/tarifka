import Lottie from "lottie-react-native";
import React from "react";

function Loading() {
  return <Lottie source={require("../Assets/loading.json")} autoPlay loop />;
}

export default Loading