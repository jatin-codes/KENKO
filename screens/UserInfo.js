import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottiePanel from './components/LottiePanel';
import CardButton from './components/CardButton';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render (){
    return (
      <View style={styles.container}>
        <LottiePanel
          backgroundStyle={styles.lottie}
          source={require('./assets/xd-patient.json')}
          loop={true}
        />
        <Text style={styles.title}>Self Assessment</Text>
        <Text style={styles.text}>Looks like it's time to check up on how well you're doing!</Text>
        <Text style={styles.subtext}>(5-10 mins)</Text>
        <CardButton
          style={styles.button}
          textStyle={styles.buttonText}
          text="Start Now"
          onPress={() => this.props.navigation.navigate('Screen1')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    margin: 20,
    borderRadius: 5,
    elevation: 2
  },
  lottie: {
    flex: 1,
    borderRadius: 5,
    height: 200,
    backgroundColor: '#87eb9d',
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    padding: 10,
    paddingTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#42db6c'
  },
  title2: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5580E1'
  },
  text: {
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    color: '#062842'
  },
  subtext: {
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#062842'
  },
  button: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#42db6c'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
