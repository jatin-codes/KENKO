/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import {withNavigation} from 'react-navigation';

// import LinearGradient from 'react-native-linear-gradient';

// const sliderWidth = Dimensions.get('window').width;
const margin = 20;
const width = Dimensions.get('window').width;

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

const presetColors = {
  regular: [
    '#5580E1',
    '#fbc2eb',
    '#ff9194'
  ]
};

class Splash extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };
      // <LinearGradient colors={['#062842', '#5580E1']} style={styles.container}>

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Home')}>
      <AnimatedLinearGradient customColors={presetColors.regular} speed={4000} />
        <Image
          style={styles.image}
          source={require('./assets/images/kenko.png')}
          resizeMode='contain'/>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Splash);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#343434',
  },
  image: {

    width: 425,
  },
  dragBar: {
    height: 80,
    borderTopColor: '#343434',
    borderTopWidth: 1,
    marginTop: margin,
  }
});
