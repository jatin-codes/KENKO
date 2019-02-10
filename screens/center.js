/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  AppRegistry
} from 'react-native';

export default class Center extends Component {
  static navigationOptions = {
    header:  <Text style= {{fontSize:20, color:'#000', alignSelf:"center"}}> Treatment </Text>,
  };
  render() {
    return (
      <View style={styles.container}>
          <FlatList
            data={[
              {key: 'Analgesics'},
              {key: 'Nonsteroidal anti-inflammatory drugs (NSAIDs)'},
              {key: 'Counterirritants'},
              {key: 'Disease-modifying antirheumatic drugs (DMARDs)'},
              {key: 'Biologic response modifiers'},
              {key: 'Corticosteroids'},
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
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
