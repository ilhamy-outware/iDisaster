/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList} from 'react-native';
import DisasterData from './assets/data/DisasterData';
import {
    createMaterialTopTabNavigator,
} from 'react-navigation';
import Before from './Before';
import During from './During';
import After from './After';

const ToDo = createMaterialTopTabNavigator({
  Before: {
    screen: Before,
  },
  During: {
    screen: During,
  },
  After: {
    screen: After,
  },
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'grey',
    showLabel: true,
    showIcon: false,
    style: {
      backgroundColor: 'black',
      height: 52,
      shadowRadius: 12,
      borderTopWidth: 0,
      shadowOffset: {
        width: 0,
        height: -12
      },
      shadowColor: 'grey',
      shadowOpacity: 0.25
    },
    indicatorStyle: {
      backgroundColor: 'white',
    },
  },
  tabBarPosition: 'top',
  swipeEnabled: false,
  backBehavior: 'none',
  animationEnabled: true
});

export default ToDo;
