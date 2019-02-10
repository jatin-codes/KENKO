/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  AppRegistry,
  ScrollView,
  Image
} from 'react-native';

export default class Center extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{height: 800}}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
            Can certain diets affect rheumatoid arthritis symptoms?
          </Text>
          <Text style={{ fontSize: 20, marginTop: 20 }}>
            Diets rich in whole grains, fruits and vegetables and low in saturated fats, sodium and processed foods might help reduce symptoms associated with rheumatoid arthritis.

            But the research studies supporting this benefit have depended on the test subjects' memories of what they had eaten, which could be faulty. And this type of diet often results in weight loss, which can independently reduce stress on joints and improve arthritis symptoms.

            Some people have also tried eliminating certain foods from their diets — such as wheat, bacon or pork, milk, rye, beef, or coffee. But the benefits of this practice have been difficult to quantify scientifically.

            Avoiding certain foods that seem to worsen your symptoms may be worth trying, but don't exclude whole food groups or large numbers of foods without consulting a registered dietitian or your doctor.
          </Text>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20

  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
