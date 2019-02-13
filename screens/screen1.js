
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
import InfoCard from './components/InfoCard';
import RAPID3FNCard from './components/RAPID3FN';
import RAPID3PNCard from './components/RAPID3PN';
import RAPID3PTGECard from './components/RAPID3PTGE';
import JointSketchesCard from './components/JointSketchesCards';
import LinearGradient from 'react-native-linear-gradient';

// const sliderWidth = Dimensions.get('window').width;
const margin = 20;
const marginBottom = 0;
const width = Dimensions.get('window').width;
const itemWidth = width - (margin * 2);
const sliderWidth = width;

const START = [
  { type: 'start' }
];

const END = [
  { type: 'end' }
];

const colors = {
  color1: '#062842',
  color2: '#fbc2eb',
  color3: '#78a3eb',
  color4: '#ff9194',
  color5: '#ffbc9b',
  color6: '#5580E1',
  color7: '#769EF5', // gradient
  color8: '#FEE2FF', // gradient
};


const TitleBar = ({ title }) => (
  <View style={titleBarStyles.container}>
    <Text style={titleBarStyles.text}>{title}</Text>
  </View>
);

const PageCounter = ({ currentPage, maxPages }) => (
  <View style={pageCounterStyles.container}>
    <Text style={pageCounterStyles.text}>{currentPage}/{maxPages}</Text>
  </View>
);
const ActionBar = ({ showButtons, onClear, }) => (
  <View style={actionBarStyles.container}>
    {/*{showButtons && <TouchableOpacity*/}
      {/*title="Clear"*/}
      {/*style={actionBarStyles.buttonClear}*/}
      {/*onPress={onClear}>*/}
      {/*<Text style={actionBarStyles.buttonTextClear}>Clear</Text>*/}
    {/*</TouchableOpacity>}*/}
  </View>
);
export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      answersFN: new Array(13).fill(-1),
      answersPN: 0,
      answersPTGE: 0,
      results: null,
      images: []
    };
    this.onClear = this.onClear.bind(this);
    this.onSave = this.onSave.bind(this);
    this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
    this.handleSaveImage = this.handleSaveImage.bind(this);
    this.handleSnapToItem = this.handleSnapToItem.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    // this.saveAsync = this.saveAsync.bind(this);
  }
  static navigationOptions = {
    header: null,
  };

  handleSnapToItem(id) {
    this.setState({currentIndex: id});
  }

  handleSelectAnswer(type, question, answer, answers) {
    if (type === 'fn') {
      const newAnswersFN = answers.slice();
      newAnswersFN[question] = answer;
      this.setState({ answersFN: newAnswersFN });
    } else if (type === 'pn') {
      this.setState({ answersPN: answer });
    } else if (type === 'ptge') {
      this.setState({ answersPTGE: answer });
    }
  }

  saveAsync = async (text, images) => {
    console.log("View text - "+ text[0])
    let data = {
      text: text,
      images: images,
    };
    await AsyncStorage.setItem('data', JSON.stringify(data));
    this.props.navigation.navigate('Screen4');
  };

  calculateScore(fn, pn, ptge) {
    const newFN = fn.map(i => i < 0 ? 0 : i); // safeguard against bugs
    const RAPID3Score = calculateRAPID3Score(newFN, pn, ptge);
    const result = {
      fn: newFN,
      pn: pn,
      ptge: ptge,
      total: RAPID3Score
    };

    const answers = [
      { text: 'Without any difficulty',   points: 0 },
      { text: 'With SOME difficulty',     points: 1 },
      { text: 'With MUCH difficulty',     points: 2 },
      { text: 'Unable to do so',          points: 3 }
      ];
    const newFNText = newFN.map((item, id) => {
      console.log(item, answers[item]);
      return [`Question ${id + 1}: ${RAPID3_FN[id].text}`, `[Answer]: ${item} -- ${answers[item].text}`]
    });
    const textArray = [].concat.apply([], ['[RAPID3 Assessment Responses]', ...newFNText]);
    textArray.push('\n');
    textArray.push('\n');
    textArray.push(RAPID3_PN[0].text);
    textArray.push(`[Answer]: ${pn}`);
    textArray.push('\n');
    textArray.push('\n');
    textArray.push(RAPID3_PTGE[0].text);
    textArray.push(`[Answer]: ${ptge}`);
    textArray.push('\n');
    textArray.push('\n');
    textArray.push(`Final RAPID3 Score: ${result.total[1]} -- ${result.total[0]}`);
    textArray.push('\n');
    textArray.push('\n');

    this.setState({ results: result });
    console.log("Images Length - "+ this.state.images.length)
    if(this.state.images.length >= 2)
      this.saveAsync(textArray, this.state.images);

    // this.props.navigation.navigate('Screen4');
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
    // console.log("SUCCESS ", base64Img.slice(100));

    if(this.state.images.length < 2)
      this.setState({
        images: [...this.state.images, 'data:image/png;base64,'+ base64Img]
      });
      console.log("ADD IMAGES 0-" +this.state.images[0])
      console.log("ADD IMAGES 1-" +this.state.images[1])
    // if(this.state.images.length >= 2)
        // this.saveAsync(this.state.images);
  }

  onSave() {
    // Save all images
    // docs: https://github.com/terrylinla/react-native-sketch-canvas
    JOINT_SKETCHES.forEach(item => {
      this[`sketchCanvas${item.index}`].getBase64('png', false, true, false, false, this.handleSaveImage);
    });
  }
  onClear(index) {
    this[`sketchCanvas${index}`].clear();
  }
  _renderItem ({item}) {
    if (item.type === jointsTypes.JOINTS) {
      return <JointSketchesCard ref1={(c) => this[`sketchCanvas${item.index}`] = c} item={item} />;
    } else if (item.type === rapid3Types.RAPID3_FN) {
      return <RAPID3FNCard
        item={item}
        onSelect={this.handleSelectAnswer}
        answers={this.state.answersFN}
        selectedAnswer={this.state.answersFN[item.id - 1]} />
    } else if (item.type === rapid3Types.RAPID3_PN) {
      return <RAPID3PNCard item={item} onSelect={this.handleSelectAnswer} sliderValue={this.state.answersPN} />
    } else if (item.type === rapid3Types.RAPID3_PTGE) {
      return <RAPID3PTGECard item={item} onSelect={this.handleSelectAnswer} sliderValue={this.state.answersPTGE} />
    } else if (item.type === 'end') {
      return <InfoCard
        type="end"
        results={this.state.results}
        navigation={this.props.navigation}
        onSaveImage={() => {
          this.onSave();
          this.calculateScore(this.state.answersFN, this.state.answersPN, this.state.answersPTGE);
        }} />
    } else if (item.type === 'start') {
      return <InfoCard type="start" />
    }
  }
  render() {
    const FULL_SURVEY = START.concat(JOINT_SKETCHES, RAPID3_FN, RAPID3_PN, RAPID3_PTGE, END);

    return (
      <LinearGradient colors={['#769EF5', '#FEE2FF']} style={styles.container}>
        <TitleBar title="Self Assessment Survey" />
        <PageCounter currentPage={this.state.currentIndex + 1} maxPages={FULL_SURVEY.length} />
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={FULL_SURVEY}
          layout="default"
          // layout="tinder"
          renderItem={this._renderItem.bind(this)}
          containerCustomStyle={carouselStyles.container}
          slideStyle={carouselStyles.slide}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={this.handleSnapToItem} />
        <ActionBar
          showButtons={this.state.currentIndex === 1 || this.state.currentIndex === 2}
          onClear={() => this.onClear(this._carousel.currentIndex)}
        />
      </LinearGradient>
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
    borderRadius: 10
  }
});

const titleBarStyles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 5
  },
  text: {
    color: '#78a3eb',
    fontSize: 22,
    fontWeight: 'bold'
  }
});

const pageCounterStyles = StyleSheet.create({
  container: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
