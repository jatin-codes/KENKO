/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import ImgToBase64 from 'react-native-image-base64';

export default class Screen4 extends Component {

    constructor(props){
    super(props);
    this.state = {
        images:[],
      };
    console.log("Entered SCREEN 4")
    this._loadimage();
  }

    _loadimage = async () => {
      const data = JSON.parse (await AsyncStorage.getItem('data'));
      if (data){
        // console.log("RECEIVED DATA- "+ data.uri)
        this.setState ({
          images : data.images
          });
      }
      console.log("IMAGE = " + this.state.images)
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Screen4 component</Text>
        <TouchableOpacity onPress= {() => this.createPDF()} style={styles.buttonStyle}>
          <Text style= {{color: "#fff"}}> Create PDF </Text>
        </TouchableOpacity>
        <Image
          style={{width: "66%", height: "58%"}}
          source={{uri: this.state.images[0]}}
        />
      </View>
    );
  }
  async createPDF() {
    //const image= "file:///Users/User/Desktop/Xdhacks/xdhacks/screens/assets/images/xdhacks.png"
    let html=''
    html= '<div> <h1>TEST PDF</h1> '
    for(let i = 0; i < this.state.images.length ; i++ ){
      let base64String= this.state.images[i].replace(/\r?\n|\r/g, "").trim()
      html= html + "<h2>Image"+ i +"</h2><img src=" + base64String +" /> "
  }
    //console.log("RECEIVED DATA- "+ base64String)
  html= html +'</ div>'
  console.log('HTML'+html)
  let options = {
    html: html,
    fileName: 'report',
    base64: true,
    directory: './assets'
  };
  try {
    const results = await RNHTMLtoPDF.convert(options)
    //console.log(results.base64)
    console.log(results.filePath)
    this.saveAsync(results.base64, results.filePath)
  } catch (err) {
    console.log("ERROR - " + err)
    //alert(file.filePath);
    console.error(err)
  }
  }
  saveAsync = async (base64, filePath) => {
    let data = {
      uri: this.state.images,
      pdf: base64,
      filePath: filePath
    }
      await AsyncStorage.setItem('data', JSON.stringify(data));
       this.props.navigation.navigate('pdfScreen');
   };
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
