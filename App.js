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
import Preparation from './Preparation';
import ToDo from './ToDo';

StatusBar.setBarStyle('light-content', true);

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Disaster: {
      screen: Disaster,
    },
    Preparation: {
      screen: Preparation,
    },
    ToDo: {
      screen: ToDo,
      navigationOptions: {
          title: 'What to do',
          headerStyle: {
            backgroundColor: '#363636',
          },
          headerTitleStyle: {},
          headerTintColor: '#fff',
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;
