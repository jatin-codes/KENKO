/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
// import Screen1 from "./screens/screen1.js";
// import Screen2 from "./screens/screen2.js";
// import Screen3 from "./screens/screen3.js";
// import Screen4 from "./screens/screen4.js";
import AppNav from "./screens/nav.js";

export default class App extends Component{
  render() {
    return (
      <AppNav />
    );
  }
}
