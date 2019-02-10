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
      <View style={styles.container}>
        <Text>I'm the Screen6 component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
