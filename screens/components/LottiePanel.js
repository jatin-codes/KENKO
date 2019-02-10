import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

/**
 * To get lottie 2.5.10 to work, I had to make this modification to app:gradle file
 * android {
 *   compileOptions {
 *      sourceCompatibility 1.8
 *      targetCompatibility 1.8
 *   }
 * }
 *
 * **/

const LottiePanel = ({ backgroundStyle, source, onPress, loop }) => (
  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}  style={{...styles.container, ...backgroundStyle}}>
    <LottieView
      source={source}
      autoPlay
      loop={loop}
    />
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {

  }
});

export default LottiePanel;
