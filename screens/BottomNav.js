import React from 'react';
import { Platform, Image, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Left from './left.js';
import Center from './center.js';
import Right from './right.js';

const HomeStack = createStackNavigator({
  Home: Left,
});
HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    focused ? <Image
          source={require('./assets/images/bell-notification-white.png')}
          style={{flex:1}}
        />
        :
        <Image
          source={require('./assets/images/bell-notification.png')}
          style={{flex:1}}
        />
  ),
};

const LinksStack = createStackNavigator({
  Links: Center,
});
LinksStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    focused ? <Image
      source={require('./assets/images/camera-white.png')}
      style={{flex:1}}
    />
    :
    <Image
      source={require('./assets/images/camera.png')}
      style={{flex:1}}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: Right,
});
SettingsStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    focused ? <Image
      source={require('./assets/images/setting-icon-white.png')}
      style={{flex:1}}
    />
    :
    <Image
      source={require('./assets/images/setting-icon.png')}
      style={{flex:1}}
    />
  ),
};

const TabNavigator= createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},
{
  initialRouteName: 'LinksStack',
  tabBarOptions: {style: {backgroundColor: '#769EF5', paddingTop:'2%'}},
}
);
export default createAppContainer(TabNavigator);
