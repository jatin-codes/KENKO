
import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  rapid3Types,
  RAPID3_FN,
  RAPID3_PN,
  RAPID3_PTGE,
  calculateRAPID3Score
} from './constants/RAPID3';
import {
  jointsTypes,
  JOINT_SKETCHES,
} from './constants/joints';
import RAPID3FNCard from './components/RAPID3FN';
import RAPID3PNCard from './components/RAPID3PN';
import RAPID3PTGECard from './components/RAPID3PTGE';
import JointSketchesCard from './components/JointSketchesCards';
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
      currentIndex: 0,
      answersFN: new Array(13).fill(0),
      answersPN: 0,
      answersPTGE: 0,
      images: []
    };
    this.onClear = this.onClear.bind(this);
    this.onSave = this.onSave.bind(this);
    this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
    this.handleSaveImage = this.handleSaveImage.bind(this);
  }
  static navigationOptions = {
    header: null ,
  };
  handleSelectAnswer(type, question, answer) {
    if (type === 'fn') {
      const newAnswersFN = this.state.answersFN.slice();
      newAnswersFN[question] = answer;
      this.setState({ answersFN: newAnswersFN });
    } else if (type === 'pn') {
      this.setState({ answersPN: answer });
    } else if (type === 'ptge') {
      this.setState({ answersPTGE: answer });
    }
  }
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
    console.log("SUCCESS ", base64Img.slice(100));
    if(this.state.images.length < 2)
      this.setState({
            images: [...this.state.images, 'data:image/png;base64,'+ base64Img]
          });
    if(this.state.images.length >= 2)
        this.saveAsync(this.state.images);
  }
  saveAsync = async (base64s) => {
    let data = {
      images: base64s,
    }
      await AsyncStorage.setItem('data', JSON.stringify(data));
       this.props.navigation.navigate('Screen4');
   };
  onSave() {
    // Save all images
    // docs: https://github.com/terrylinla/react-native-sketch-canvas
    JOINT_SKETCHES.forEach(item => {
      this[`sketchCanvas${item.index}`].getBase64('png', false, true, false, false, this.handleSaveImage);
    });
    // TODO: navigate home upon successful saving -- perhaps use promises?
    //this.props.navigation.navigate('Home');
  }
  onClear(index) {
    this[`sketchCanvas${index}`].clear();
  }
  _renderItem ({item}) {
    if (item.type === jointsTypes.JOINTS) {
      return <JointSketchesCard ref1={(c) => this[`sketchCanvas${item.index}`] = c} item={item} />;
    } else if (item.type === rapid3Types.RAPID3_FN) {
      return <RAPID3FNCard item={item} onSelect={this.handleSelectAnswer} />
    } else if (item.type === rapid3Types.RAPID3_PN) {
      return <RAPID3PNCard item={item} onSelect={this.handleSelectAnswer} />
    } else if (item.type === rapid3Types.RAPID3_PTGE) {
      return <RAPID3PTGECard item={item} onSelect={this.handleSelectAnswer} />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={JOINT_SKETCHES.concat(RAPID3_FN, RAPID3_PN, RAPID3_PTGE)}
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
