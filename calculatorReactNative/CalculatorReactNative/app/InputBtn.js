// InputBtn.js
import React, { Component } from "react";
import { View, Text } from "react-native";

import Style from "./Styles";

export default class InputBtn extends Component {
  render() {
    return (
      <TouchableHighlight
        style={[
          Styles.inputButton,
          this.props.highlight ? style.inputButtonHighlighted : null
        ]}
      >
        <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    );
  }
}
