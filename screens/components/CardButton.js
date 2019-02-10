import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const CardButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderColor: '#c1c1c1',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    elevation: 2
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 22,
    color: '#5229c1'
  }
});

export default CardButton;
