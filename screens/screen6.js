/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import FoodNav from './FoodNav';
export default class Screen6 extends Component {
  render() {
    return (
      <FoodNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
