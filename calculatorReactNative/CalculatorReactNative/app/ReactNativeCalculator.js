import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} from "react-native";

const styles = require("./app/Styles");

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
  [1, 2, 3, "/"],
  [4, 5, 6, "*"],
  [7, 8, 9, "-"],
  [0, ".", "=", "+"]
];

export default class ReactNativeCalculator extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.displayContainer}>
          <View style={styles.inputContainer}>
            {this._renderInputButtons()}
          </View>
        </View>
      </View>
    );
  }
}

_renderInputButtons(){
  let views = [];

  for (var r = 0; r < inputButtons.length; r++){
    let row = inputButtons[r];

    let inputRow = [];
    for (var i = 0; i < row.length; i++){
      let input = row[i];
      inputRow.push(
        <InputButton value={input} key={r + "-" + i} />
      );
    }

    views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
  }

  return views;
}
}
