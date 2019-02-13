import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagefile}
          source={require('./assets/images/kenko2.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
  },
  imagefile: {
    height: 50,
    width: '60%',
  }
});
