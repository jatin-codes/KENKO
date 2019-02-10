/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Screen1 extends Component {
  constructor() {
    super();
  }
  static navigationOptions = {
   title: 'Welcome',
 };
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Screen1 component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
