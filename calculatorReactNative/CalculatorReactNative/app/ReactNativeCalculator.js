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

const styles = require("./app/styles");

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
        {/* <View style={styles.titleView}>
          <Text style={styles.titleText}>My Todos</Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ newTodo: text })}
            value={this.state.newTodo}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.addTodo()}
            underlayColor="#dddddd"
          >
            <Text style={styles.btnText}>Add!</Text>
          </TouchableHighlight>
        </View>
        <ListView
          dataSource={this.state.todoSource}
          renderRow={this.renderRow.bind(this)}
        /> */}
      </View>
    );
  }
}
