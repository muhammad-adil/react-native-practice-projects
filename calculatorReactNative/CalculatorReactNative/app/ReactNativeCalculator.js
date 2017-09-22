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

export default class ReactNativeCalculator extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  // renderRow(rowData) {
  //   return (
  //     <TouchableHighlight
  //       underlayColor="#dddddd"
  //       onPress={() => this.removeTodo(rowData)}
  //     >
  //       <View>
  //         <View style={styles.row}>
  //           <Text style={styles.todoText}>{rowData.text.todo}</Text>
  //         </View>
  //         <View style={styles.separator} />
  //       </View>
  //     </TouchableHighlight>
  //   );
  // }

  render() {
    return (
      <View style={styles.rootContainer}>
        <View>
          <View style={styles.displayContainer} />
          <View style={styles.inputContainer} />
        </View>
      </View>
    );
  }
}
