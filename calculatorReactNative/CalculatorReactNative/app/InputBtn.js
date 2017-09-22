// InputBtn.js
import React, { Component } from "react";
import { View, Text, TouchableHighlight, Style } from "react-native";

import Style from "./Styles";

export default class InputBtn extends Component {
  render() {
    return (
      <TouchableHighlight
        style={[
          Styles.inputButton,
          this.props.highlight ? style.inputButtonHighlighted : null
        ]}
        underlayColor="#193441"
        onPress={this.props.onPress}
      >
        <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}
