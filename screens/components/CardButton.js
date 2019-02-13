import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const CardButton = ({ text, onPress, isSelected, style = StyleSheet.create({}), textStyle = StyleSheet.create({}) }) => (
  <TouchableOpacity style={[isSelected ? styles.containerSelected : styles.container, style]} onPress={onPress}>
    <Text style={[isSelected ? styles.textSelected : styles.text, textStyle]}>{text}</Text>
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
  containerSelected: {
    height: 55,
    borderColor: '#365290',
    borderWidth: 1,
    backgroundColor: '#5580E1',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    elevation: 0
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 22,
    color: '#5580E1'
  },
  textSelected: {
    textAlign: 'center',
    padding: 10,
    fontSize: 22,
    color: '#FFFFFF'
  }
});

export default CardButton;
