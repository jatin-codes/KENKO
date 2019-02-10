import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import LottieView from 'lottie-react-native';

const LottiePanel = ({ url, onPress }) => (
  <View style={styles.container}>
    <LottieView
      source={require('../assets/xd-done.json')}
      autoPlay
      loop
    />
  </View>
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
