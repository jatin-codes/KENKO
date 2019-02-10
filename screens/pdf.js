/* @flow */

import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

export default class Pdf extends Component {
  constructor(props){
    super(props);
    console.log("ENETERED PDF ")
    this.loadpdf();
}
state={pdf:'', filePath:''}
  loadpdf = async () => {
    const data = JSON.parse (await AsyncStorage.getItem('data'));
    if (data.pdf){
      console.log("RECEIVED PDF DATA ")
      this.setState ({
        pdf : data.pdf,
        filePath: data.filePath
        });
    }
    console.log(this.state.filePath);
  }
  render() {
    const resourceType = 'base64';
    return (
      <View style={styles.container}>
        <Text>I'm the Pdf component</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
