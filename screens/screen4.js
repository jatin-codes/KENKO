/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import ImgToBase64 from 'react-native-image-base64';

export default class Screen4 extends Component {
  state = {
      images : [],
      text:[]
    };

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Screen4 component</Text>
        <TouchableOpacity onPress= {() => this.createPDF()} style={styles.buttonStyle}>
          <Text style= {{color: "#fff"}}> Create PDF </Text>
        </TouchableOpacity>
      </View>
    );
  }
  async createPDF() {
    const image= "file:///Users/User/Desktop/Xdhacks/xdhacks/screens/assets/images/xdhacks.png"
    let base64=''
    let html=''
    ImgToBase64.getBase64String(image)
  .then(base64String => {
    console.log(base64String)
    html= '<div> <h1>PDF TEST</h1> <img style="width:100px;height: 100px;" src= data:image/png;base64,' + base64String +' /> </ div>'
    console.log('HTML'+html)
    base64= base64String
    let options = {
      html: html,
      fileName: 'dhdhdh',
      directory: 'Documents',
    };
    let file = RNHTMLtoPDF.convert(options)

  })
  .catch(err => alert(err));
    // console.log(file.filePath);
    //alert(file.filePath);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#365C80',
    borderRadius:5,
    borderWidth:1,
    marginLeft:'5%',
    marginRight:'5%',
    justifyContent: 'center',
    height: 40
  }
});
