import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const styles = require('./src/style');
const constants = styles.constant;

export default class AddButton extends Component {
  render() {
    return (

      <View style={styles.actions}>
        <TouchableHighlight underlayColor="#24ce84" onPress={this.props.onPress}>
        
          <Text style={styles.actionText}>
            {this.props.title}
          </Text>

      </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('AddButton', () => AddButton );
