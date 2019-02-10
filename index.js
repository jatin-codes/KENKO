/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import screen2 from "./screens/screen2";
import calendar from "./screens/calendar";
import DateTimePickerTester from "./screens/dateTimePickerTester";

AppRegistry.registerComponent(appName, () => App);
