"use strict";
let React = require("react-native");
let { StyleSheet } = React;

const constants = {
  actionColor: "#3cb371"
};

module.exports = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#aaabbb"
  },
  displayContainer: {
    flex: 2,
    backgroundColor: "#193441"
  },
  inputContainer: {
    flex: 8,
    backgroundColor: "#3E606F"
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: "transparent",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
