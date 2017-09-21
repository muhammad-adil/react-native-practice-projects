
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Splash extends Component {
    render() {
      return (
        <View style={styles.wrapper}> 

          <View style={styles.titleWrapper}>
            <Text style={styles.title}> Hello Boy! </Text>
          </View>
          
          <View>
            <Text style={styles.subtitle}> Powered By !!! </Text>
          </View>
        
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f1c40f',
    },
    titleWrapper:{
      flex: 1,
      justifyContent: 'center'
    },
    title:{
      color: '#444',
      fontSize: 56
    },
    subtitle:{
      color: '#FeFeFe',
      fontSize: 20,
      paddingBottom: 20
    }
  });
  