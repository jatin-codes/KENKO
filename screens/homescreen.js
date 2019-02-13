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
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';

const ScreenBtn = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={{ fontSize: 26, color: '#5580E1', fontWeight: 'bold' }}>{text}</Text>
  </TouchableOpacity>
);


export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
  }
  render() {
    return (
      <LinearGradient colors={['#769EF5', '#FEE2FF']} style={styles.gradientContainer}>
        <ScrollView style={styles.contentContainer}>
          <Header/>
          <UserInfo navigation={this.props.navigation} />
          <ScreenBtn onPress={() => this.props.navigation.navigate('Screen1')} text="Self Assessment" />
          <ScreenBtn onPress={() => this.props.navigation.navigate('Screen2')} text="Schedule Reminders" />
          <ScreenBtn onPress={() => this.props.navigation.navigate('Screen5')} text="Add Medication" />
          <ScreenBtn onPress={() => this.props.navigation.navigate('Screen3')} text="Scan Ingredients" />
          <ScreenBtn onPress={() => this.props.navigation.navigate('Screen6')} text="Learn More" />
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1
  },
  contentContainer: {
    paddingVertical: 20,
    // backgroundColor: "#bde1f5",
  }
  ,
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'left',
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 20
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#f3f3f3',
    borderColor: '#C1c1c1',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    margin: 15,
    padding: 5,
    height: 60,
  }
});
