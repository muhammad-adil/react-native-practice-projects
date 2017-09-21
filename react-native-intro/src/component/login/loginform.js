
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.loginFormWrapper}>
                <Statusbar barStyle="light-content" />

                <TextInput placeholder="UserName Or Email" placeholderTextColor="rgba(255,255,255,0.5)" underlineColorAndroid="transparent" returnKeyType="next" onSubmitEditing={() => this.passwordInput.focus()} keyboardType="email-address" autoCapitalize="none" autoCorrect={false} style={styles.input} />

                <TextInput secureTextEntry placeholder="Password" placeholderTextColor="rgba(255,255,255,0.5)" underlineColorAndroid="transparent" returnKeyType="go" style={styles.input} ref="{(input) => this.passwordInput = input }" />
            
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
