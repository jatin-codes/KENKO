/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MOCK_ENTRIES = [
  { title: 'Use your finger to mark the joints that are painful and swollen.' },
  { title: 'Use your finger to mark the joints that are painful and swollen.' }
];

// const sliderWidth = Dimensions.get('window').width;
// const itemWidth = slideWidth + horizontalMargin * 2;
const margin = 20;
const width = Dimensions.get('window').width;
const itemWidth = width - (margin * 2);
const sliderWidth = width;

export default class Screen2 extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null ,
  };

  _renderItem ({item, index}) {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>{ item.title }</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={MOCK_ENTRIES}
          renderItem={this._renderItem}
          containerCustomStyle={carouselStyles.container}
          slideStyle={carouselStyles.slide}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#343434'
  }
});

const carouselStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: margin,
    marginBottom: margin
  },
  slide: {
    backgroundColor: '#FFFFFF',
    borderColor: '#5c5c5c',
    borderWidth: 2,

  }
});
