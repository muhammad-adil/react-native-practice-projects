"use strict";
let React = require("react-native");
let { StyleSheet } = React;

const constants = {
  actionColor: "#3cb371"
};

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  logoWrapper: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 20
  },
  logo: {
    width: 300,
    height: 300
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    width: 180,
    textAlign: "center"
  },
  subtitle: {
    color: "#FeFeFe",
    fontSize: 16,
    paddingBottom: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  navbar: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottom: "#eee",
    borderColor: "transparent",
    borderWidth: "1",
    justifyContent: "center",
    height: 44,
    flexDirection: "row"
  },
  navbatTitle: {
    color: "#444",
    fontSize: 16,
    fontWeight: 500
  },
  toolbar: {
    backgroundColor: "#123987",
    height: 22
  },
  li: {
    backgroundColor: "#2980b9",
    paddingVertical: 10
  },
  liText: {},
  center: {
    textAlign: "center"
  },
  actionText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center"
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: "transparent",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  },

  listView: {
    flex: 1
  },
  //Another page styling

  appContainer: {
    flex: 1
  },
  titleView: {
    backgroundColor: "#48afdb",
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: "row"
  },
  titleText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    flex: 1,
    fontSize: 20
  },
  inputcontainer: {
    marginTop: 5,
    padding: 10,
    flexDirection: "row"
  },
  button: {
    height: 36,
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#48afdb",
    justifyContent: "center",
    color: "#FFFFFF",
    borderRadius: 4
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    marginTop: 6
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48afdb",
    borderRadius: 0,
    color: "#48BBEC",
    backgroundColor: "rgba(255,255,255, 0.2)"
  },
  //   input: {
  //     backgroundColor: "rgba(255,255,255, 0.2)",
  //     height: 40,
  //     width: 300,
  //     marginBottom: 20,
  //     paddingHorizontal: 20,
  //     color: "#FFF"
  //   },
  row: {
    flexDirection: "row",
    padding: 12,
    height: 44
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  todoText: {
    flex: 1
  }
});
