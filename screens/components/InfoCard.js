import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import LottiePanel from './LottiePanel';
import CardButton from './CardButton';

const START_TITLE = 'Self-Assessment Survey';
const END_TITLE = `Congratulations, You're Done!`;
const START_TEXT = 'We will be asking you a few questions to help you track your progress';
const END_TEXT = (result) => `Your are currently in ${result} You can download a report of your results for your records.`;


const InfoCard = ({ type, results, navigation, onSaveImage }) => {
  if (type === 'end') {
    return (
      <View style={styles.container}>
        <LottiePanel
          backgroundStyle={lottieStyle1.container}
          source={require('../assets/xd-trophy.json')}
          loop={true}
        />
        <Text style={styles.title}>{END_TITLE}</Text>
        {!!results && <Text style={styles.text}>{END_TEXT(results.total[0])}</Text>}
        <CardButton text="Finish" onPress={() => {
          onSaveImage();
          // navigation.navigate('Home');
        }}/>
      </View>
    )
  } else if (type === 'start') {
    return (
      <View style={styles.container}>
        <LottiePanel
          backgroundStyle={lottieStyle2.container}
          source={require('../assets/xd-done.json')}
          loop={false}
        />
        <Text style={styles.title2}>Rheumatoid Arthritis</Text>
        <Text style={styles.title}>{START_TITLE}</Text>
        <Text style={styles.text}>{START_TEXT}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    textAlign: 'center',
    padding: 20,
    paddingTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5580E1'
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
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    fontSize: 18,
    color: '#062842'
  }
});

const lottieStyle1 = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#fbc2eb'
  }
});

const lottieStyle2 = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#5580E1'
  }
});


export default InfoCard;
