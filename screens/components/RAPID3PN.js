import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const RAPID3PNCard = ({ item, onSelect }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ item.text }</Text>
    <Text style={styles.dragBar}>TODO: add icon here to prompt user to drag</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
  },
  dragBar: {
    height: 80,
    borderTopColor: '#343434',
    borderTopWidth: 1,
  }
});

export default RAPID3PNCard;
