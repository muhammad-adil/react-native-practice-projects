
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image, 
    KeyboardAvoidingView
} from 'react-native';

const styles = require('../../style');

import LoginForm from './loginform'

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behaviour="padding" style={styles.wrapper}>

                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={require('../../img/i.png')} />
                    <Text style={styles.title}> An App For Devs Using React-Native !!! </Text>

                </View>

                <View style={styles.formWrapper}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

AppRegistry.registerComponent('Login', () => Login);