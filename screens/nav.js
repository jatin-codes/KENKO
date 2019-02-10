/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import HomeScreen from "./homescreen.js";
import Screen1 from "./screen1.js";
import Screen2 from "./screen2.js";
import Screen3 from "./screen3.js";
import Screen4 from "./screen4.js";
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Screen1: {screen: Screen1},
  Screen2: {screen: Screen2},
  Screen3: {screen: Screen3},
  Screen4: {screen: Screen4},
});

const AppNav = createAppContainer(MainNavigator);

export default AppNav;
