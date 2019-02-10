/* @flow */

import React, { Component } from 'react';
import Pdf from 'react-native-pdf';

import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

export default class PdfScreen extends Component {
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
  }
  render() {
    const resourceType = 'base64';
    const source = {uri : "data:application/pdf;base64,"+this.state.pdf}
    const filePathsrc = {uri:"file://"+this.state.filePath}
    console.log("FILEPATH in render - " + this.state.filePath)
    console.log("FILEPATH in render - " + this.state.pdf)
    return (
      <View style={styles.container}>
      <Pdf
                  source={filePathsrc}
                  onLoadComplete={(numberOfPages,filePath)=>{
                      console.log(`number of pages: ${numberOfPages}`);
                  }}
                  onPageChanged={(page,numberOfPages)=>{
                      console.log(`current page: ${page}`);
                  }}
                  onError={(error)=>{
                      console.log(error);
                  }}
                  style={styles.pdf}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
        flex:1
    }
});
