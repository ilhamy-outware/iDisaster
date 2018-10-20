/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Disaster from './Disaster';

StatusBar.setBarStyle('light-content', true);

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Disaster: {
      screen: Disaster,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;
