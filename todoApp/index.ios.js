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

import * as firebase from "firebase";
//var firebase = require("firebase");
// Initialize Firebase
const firebseConfig = {
  apiKey: "AIzaSyDf5VmiD8SpVG5AUXcGIawKaRPPJoSNb2A",
  authDomain: "react-native-todo-7511e.firebaseapp.com",
  databaseURL: "https://react-native-todo-7511e.firebaseio.com",
  projectId: "react-native-todo-7511e",
  storageBucket: ""
  //messagingSenderId: "605643278992"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class todoApp extends Component {
  constructor(props) {
    super(props);
    var myFirebaseRef = firebseConfig.databaseURL;
    this.itemsRef = myFirebaseRef.child("items");

    this.state = {
      newTodo: "",
      todoSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };

    this.items = [];
  }

  componentDidMount() {
    // When a todo is added
    this.itemsRef.on("child_added", dataSnapshot => {
      this.items.push({ id: dataSnapshot.key(), text: dataSnapshot.val() });
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
    });

    // When a todo is removed
    this.itemsRef.on("child_removed", dataSnapshot => {
      this.items = this.items.filter(x => x.id !== dataSnapshot.key());
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
    });
  }

  addTodo() {
    if (this.state.newTodo !== "") {
      this.itemsRef.push({
        todo: this.state.newTodo
      });
      this.setState({
        newTodo: ""
      });
    }
  }

  removeTodo(rowData) {
    this.itemsRef.child(rowData.id).remove();
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        underlayColor="#dddddd"
        onPress={() => this.removeTodo(rowData)}
      >
        <View>
          <View style={styles.row}>
            <Text style={styles.todoText}>{rowData.text.todo}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleView}>
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
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("todoApp", () => todoApp);
