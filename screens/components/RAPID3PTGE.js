import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Slider
} from 'react-native';

const RAPID3PTGECard = ({ item, onSelect, sliderValue }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ item.text }</Text>
    <Slider
      minimumValue={0}
      maximumValue={10}
      step={0.5}
      value={0}
      onValueChange={(value) => onSelect('ptge', 0, value)}/>
    <Text style={styles.title}>{sliderValue}</Text>
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
    color: '#5580E1'
  },
  dragBar: {
    height: 80,
    borderTopColor: '#343434',
    borderTopWidth: 1,
  }
});

export default RAPID3PTGECard;
