import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import LottieView from 'lottie-react-native';

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
  <View style={{...styles.container, ...backgroundStyle}}>
    <LottieView
      source={source}
      autoPlay
      loop={loop}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LottiePanel;
