/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import HomeScreen from "./homescreen.js";
import Splash from "./splash.js";
import Screen1 from "./screen1.js";
import Screen2 from "./screen2.js";
import Screen3 from "./screen3.js";
import Screen4 from "./screen4.js";
import Screen5 from "./screen5";
import Cal from "./calendar.js";
import Slot from "./slot.js";
import DateTimePickerTester from "./dateTimePickerTester.js";

import { createStackNavigator, createAppContainer } from "react-navigation";
import DateTimePicker from "react-native-modal-datetime-picker";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Splash: { screen: Splash },
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 },
    Screen3: { screen: Screen3 },
    Screen4: { screen: Screen4 },
    Screen5: { screen: Screen5 },
    Cal: { screen: Cal },
    Slot: { screen: Slot },
    DateTimePickerTester: { screen: DateTimePickerTester }
  },
  { initialRouteName: "Splash" }
);

const AppNav = createAppContainer(MainNavigator);

export default AppNav;
