'use strict'
let React = require('react-native');
let { StyleSheet } = React;

const constants = {
    actionColor: '#3cb371'
}

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
    },
    logoWrapper: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 20

    },
    logo: {
        width: 300,
        height: 300
    },
    title: {
        color: '#FFF',
        fontSize: 22,
        width: 180,
        textAlign: 'center'
    },
    formWrapper: {

    },
    subtitle: {
        color: '#FeFeFe',
        fontSize: 16,
        paddingBottom: 10
    },
    loginFormWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'rgba(255,255,255, 0.2)',
        height: 40,
        width: 300,
        marginBottom: 20,
        paddingHorizontal: 20,
        color: '#FFF'
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    },
    navbar: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderBottom: '#eee',
        borderColor: 'transparent',
        borderWidth: '1',
        justifyContent: 'center',
        height: 44,
        flexDirection: 'row'
    },
    navbatTitle: {
        color: '#444',
        fontSize: 16,
        fontWeight: 500
    },
    toolbar: {
        backgroundColor: '#FFF',
        height: 22
    },
    listView: {
        flex: 1
    },
    li: {
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    liText: {

    },
    center: {
        textAlign: 'center'
    },
    actionText: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center'
    },
    action: {
        backgroundColor: constants.actionColor,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10
    }

});
