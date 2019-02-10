/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import UserInfo from './UserInfo';

export default class HomeScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ScrollView style={styles.contentContainer}>
        <View style={styles.welcome}>
            <Text style={styles.welcome}>Welcome back, John!</Text>
        </View>
        <UserInfo/>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen1')} style={styles.buttonStyle}>
          <Text> Screen 1 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen2')} style={styles.buttonStyle}>
          <Text> Screen 2 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen3')} style={styles.buttonStyle}>
          <Text> Screen 3 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen5')} style={styles.buttonStyle}>
          <Text> Screen 5 </Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  
  contentContainer: {
    paddingVertical: 20,
  }
  ,
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#f3f3f3',
    borderRadius:5,
    borderWidth:1,
    margin:'5%',
    padding: '2%',
    justifyContent: 'center',
    height: 60
  }
});
