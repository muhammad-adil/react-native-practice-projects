/**
 * Load the App component.
 *  (All the fun stuff happens in "/app/index.js")
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import { AppRegistry } from "react-native";
import AppContainer from "./app/";

AppRegistry.registerComponent("todoApp", () => AppContainer);
