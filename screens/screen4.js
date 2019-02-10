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
import FileViewer from 'react-native-file-viewer';
import CardButton from './components/CardButton';

export default class Screen4 extends Component {
  static navigationOptions = {
  header: <Text style={{alignSelf: 'center', fontSize: 21}}> PDF Generator </Text>,
};
    constructor(props){
    super(props);
    this.state = {
        images:[],
        text:[]
      };
    console.log("Entered SCREEN 4")
    this._loadimage();
  }

    _loadimage = async () => {
      const data = JSON.parse (await AsyncStorage.getItem('data'));
      if (data){
        console.log("RECEIVED DATA- "+ data.text)
        this.setState ({
          images : data.images,
          text: data.text
          });
      }
      console.log("IMAGE = " + this.state.images[1])
    }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress= {() => this.createPDF()} style={styles.buttonStyle}>
          <Text style= {{color: "#fff", fontWeight: 'bold', fontSize: 28}}> Create PDF From Images </Text>
        </TouchableOpacity>

        <CardButton text="Back to Home" onPress={()=> this.props.navigation.navigate('Home')} />
      </View>
    );
  }
  createPDF() {
    //const image= "file:///Users/User/Desktop/Xdhacks/xdhacks/screens/assets/images/xdhacks.png"
    let html=''
    html= '<div> <h1>TEST PDF</h1> '
    html= html+ '<ul>'
    for(let i = 0; i < this.state.text.length ; i++ ){
      console.log("Text - "+ this.state.text[i])
      html= html + '<li>'+ this.state.text[i] + '</li>'
    }
    html= html+ '</ul>'
    console.log("HTML after list - " + html)
    for(let i = 0; i < this.state.images.length ; i++ ){
      let base64String= this.state.images[i].replace(/\r?\n|\r/g, "").trim()
      html= html + "<h2>Image"+ (i+1) +"</h2><img style='width: 350px;height: 365px' src=" + base64String +" /> "
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
  this.create(options);

  }
  async create(options) {
    try {
      const results = await RNHTMLtoPDF.convert(options)
      //console.log(results.base64)
      FileViewer.open(results.filePath)
        .then(() => {
          // success
        })
        .catch(error => {
          // error
        });
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
       //this.props.navigation.navigate('pdfScreen');
   };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 200,
    paddingBottom: 100
  },
  buttonStyle: {
    alignSelf: 'stretch',
    alignItems:'center',
    backgroundColor: '#365C80',
    borderRadius:5,
    borderWidth:1,
    marginLeft:15,
    marginRight:15,
    // marginBottom: '20%',
    // marginTop: '20%',

    padding: 5,
    justifyContent: 'center',
    height: 75,

  },
  text: {

  }
});
