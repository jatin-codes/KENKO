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

const RAPID3FNCard = ({ id, item, onSelect, selectedAnswer, answers }) => (
  <View style={styles.container}>
    <LottiePanel
      backgroundStyle={lottieStyle.container}
      source={require('../assets/xd-done.json')}
      loop={false}
    />
    <Text style={styles.title}>{item.text}</Text>
    {item.answers.map((option, id) => (
      <CardButton
        key={id}
        text={option.text}
        isSelected={selectedAnswer === option.points}
        onPress={() => onSelect('fn', item.id - 1, option.points, answers)}/>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    color: '#5580E1'
  }
});

const lottieStyle = StyleSheet.create({
  container: {
    backgroundColor: '#78a3eb'
  }
});

export default RAPID3FNCard;
