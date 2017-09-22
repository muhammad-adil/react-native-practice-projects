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
  inputButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#91AA9D"
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white"
  },
  inputRow: {
    flex: 1,
    flexDirection: "row"
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: "transparent",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
