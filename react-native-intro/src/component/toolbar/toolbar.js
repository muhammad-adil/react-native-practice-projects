import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

const styles = require('../../style');

export default class Toolbar extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#ecf0f1" barStyle="light-content" />

        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>
            {this.props.title}
          </Text>
        </View>


        <View style={styles.container}>

          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js, are you sure??
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Toolbar', () => Toolbar);