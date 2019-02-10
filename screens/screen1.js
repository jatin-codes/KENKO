/* @flow */

import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  AsyncStorage
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';


const MOCK_ENTRIES = [
  {
    title: 'Use your finger to mark the joints that are painful and swollen.',
    image: {
      filename: 'hands',
      directory: '',
      mode: 'AspectFit'
    },
    index: 0
  },
  {
    title: 'Use your finger to mark the joints that are painful and swollen.',
    image: {
      filename: 'body2',
      directory: '',
      mode: 'AspectFit'
    },
    index: 1
  }
];

// const sliderWidth = Dimensions.get('window').width;
const margin = 20;
const marginBottom = 0;
const width = Dimensions.get('window').width;
const itemWidth = width - (margin * 2);
const sliderWidth = width;


const ActionBar = ({ onSave, onClear }) => (
  <View style={actionBarStyles.container}>
    <TouchableOpacity
      title="Clear"
      style={actionBarStyles.buttonClear}
      onPress={onClear}>
      <Text style={actionBarStyles.buttonTextClear}>Clear</Text>
    </TouchableOpacity>
    <TouchableOpacity
      title="Save"
      style={actionBarStyles.buttonSave}
      onPress={onSave}>
      <Text style={actionBarStyles.buttonTextSave}>Save</Text>
    </TouchableOpacity>
  </View>
);

export default class Screen2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.onClear = this.onClear.bind(this);
    this.onSave = this.onSave.bind(this);
    this.handleSaveImage = this.handleSaveImage.bind(this);
  }

  static navigationOptions = {
    header: null ,
  };

  handleSaveImage(err, base64Img) {
    if (err !== null) {
      Alert.alert(
        'Error Saving Image',
        err,
        [
          {text: 'OK'},
        ],
        {cancelable: false},
      );
      return;
    }

    // TODO: save base64 to localstorage
    console.warn("SUCCESS ", base64Img.slice(10));
    //NEW KUNAL
    this.saveAsync(base64Img);
  }
  saveAsync = async (base64) => {
    let data = {
      uri: base64,
    }

      await AsyncStorage.setItem('data', JSON.stringify(data));

       this.props.navigation.navigate('Screen4');
   };

  onSave() {
    // Save all images
    // docs: https://github.com/terrylinla/react-native-sketch-canvas
    MOCK_ENTRIES.forEach(item => {
      this[`sketchCanvas${item.index}`].getBase64('png', false, true, false, false, this.handleSaveImage);
    });
    // TODO: navigate home upon successful saving -- perhaps use promises?
    this.props.navigation.navigate('Home');
  }

  onClear(index) {
    this[`sketchCanvas${index}`].clear();
  }

  _renderItem ({item}) {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>{ item.title }</Text>
        <SketchCanvas
          ref={(c) => this[`sketchCanvas${item.index}`] = c}
          style={{ flex: 1 }}
          strokeColor={'#f15f3764'}
          strokeWidth={20}
          localSourceImage={item.image}
          onSketchSaved={(success, path) => {
            console.log('onSketchSaved() ', success, " ", path);
          }}
        />
        <Text style={styles.dragBar}>TODO: add icon here to prompt user to drag</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={MOCK_ENTRIES}
          renderItem={this._renderItem.bind(this)}
          containerCustomStyle={carouselStyles.container}
          slideStyle={carouselStyles.slide}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
        <ActionBar
          onSave={() => this.onSave(this._carousel.currentIndex)}
          onClear={() => this.onClear(this._carousel.currentIndex)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '#343434',
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

const actionBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 50,
    marginLeft: margin,
    marginRight: margin,
    paddingTop: 5
  },
  buttonClear: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor:'#FFFFFF',
    borderRadius: 5,
    marginLeft: 10
  },
  buttonSave: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor:'#45afff',
    borderRadius: 5,
    marginLeft: 10
  },
  buttonTextClear: {
    color: '#343434',
    fontSize: 20
  },
  buttonTextSave: {
    color: '#ffffff',
    fontSize: 20
  }
});

const carouselStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: margin,
    marginBottom: marginBottom,
  },
  slide: {
    backgroundColor: '#FFFFFF',
    borderColor: '#5c5c5c',
    borderWidth: 1,
    borderRadius: 5
  }
});
