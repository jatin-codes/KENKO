import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
    render (){
        return (
            <View style={styles.container}>
                <Text>Logo and Title here</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
    contentContainer: {
      paddingVertical: 20,
      backgroundColor: "#769EF5",
    }
    ,
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f3f3f3',
      marginTop: 0,
      padding: 20,
      height: 20,
    },
  });
  