import React from 'react';
import { createSwitchNavigator,createStackNavigator, createAppContainer } from 'react-navigation';
import TabNavigator from './BottomNav.js';

export default createAppContainer(createSwitchNavigator(
  {
  Main: TabNavigator,
}));
