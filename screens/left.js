/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  AppRegistry
} from 'react-native';

export default class Left extends Component {
  static navigationOptions = {
    header:  <Text style= {{fontSize:20, color:'#000', alignSelf:"center"}}> Prevention </Text>,
  };
  render() {
    return (
      <View style={styles.container}>
          <FlatList
          style={{flex:1}}
          data={[
            {key: 'Using the right techniques when sitting, working, and lifting can help protect joints from everyday strains. '},
            {key: 'Carry items close to your body so you don’t put too much strain on your wrists. If you have to sit for long periods of time at work, make sure that your back, legs, and arms are well supported.'},
          
          ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   width: '100%',
   flexDirection: 'column'
  },
  item: {
    fontSize: 21,
    flexWrap: 'wrap',
    textAlign: 'left',
  },

});
