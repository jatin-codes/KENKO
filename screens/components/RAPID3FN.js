import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import CardButton from './CardButton';
import LottiePanel from './LottiePanel';

// Lottie:
// https://github.com/react-native-community/lottie-react-native

const RAPID3FNCard = ({ id, item, onSelect }) => (
  <View style={styles.container}>
    <LottiePanel />
    <Text style={styles.title}>{item.text}</Text>
    {item.answers.map((option, id) => (
      <CardButton key={id} text={option.text} onSelect={() => onSelect('fn', id, option.points)}/>
    ))}
    <Text style={styles.dragBar}>TODO: add icon here to prompt user to drag</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
  },
  dragBar: {
    height: 80,
    marginTop: 20,
    borderTopColor: '#343434',
    borderTopWidth: 1,
  }
});

export default RAPID3FNCard;
