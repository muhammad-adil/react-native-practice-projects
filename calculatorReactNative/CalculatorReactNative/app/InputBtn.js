// InputBtn.js
import React, { Component } from "react";
import { View, Text } from "react-native";

import Style from "./Styles";

export default class InputBtn extends Component {
  render() {
    return (
      <View style={Style.inputButton}>
        <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </View>
    );
  }
}
