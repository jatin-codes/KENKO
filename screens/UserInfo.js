import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class UserInfo extends Component{
    render (){
        return (
            <View style={styles.container}>
                <Text>Lottie Design</Text>

                <Text>This is the container for lottie animation</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f3f3f3",
      padding: 20,
      margin: 5,
      alignItems: 'center',
    },
  });