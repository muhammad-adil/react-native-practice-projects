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

    this.state = {
      inputValue: 0
    };
  }

  _renderInputButtons() {
    // let views = [];

    // for (var r = 0; r < inputButtons.length; r++){
    //   let row = inputButtons[r];

    //   let inputRow = [];
    //   for (var i = 0; i < row.length; i++){
    //     let input = row[i];

    inputRow.push(
      <InputButton
        value={input}
        onPress={this._onInputButtonPressed.bind(this, input)}
        key={r + "-" + i}
      />
    );
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case "number":
        return this._handleNumberInput(input);

      case "string":
        this._handleStringInput(input);
    }
  }
  _handleStringInput(str) {
    switch (str) {
      case "/":
      case "*":
      case "+":
      case "-":
        this.setState({
          selectedSymbol: str,
          previousInputalue: this.state.inputValue,
          inputValue: 0
        });
        break;
    }
  }

  _handleNumberInput(num) {
    let inputValue = this.state.inputValue * 10 + num;

    this.setState({
      inputValue: inputValue
    });
  }

  //     views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>);
  //   }
  //   return views;
  // }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
          <View style={styles.inputContainer}>
            {this._renderInputButtons()}
          </View>
        </View>
      </View>
    );
  }
}
