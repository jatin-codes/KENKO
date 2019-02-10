import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';

const margin = 20;

const JointSketchesCard = ({ ref1, item }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ item.title }</Text>
    <SketchCanvas
      ref={ref1}
      style={{ flex: 1 }}
      strokeColor={'#f15f3764'}
      strokeWidth={20}
      localSourceImage={item.image}
    />
    <Text style={styles.dragBar}> </Text>
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
    marginTop: margin,
  }
});


export default JointSketchesCard;
