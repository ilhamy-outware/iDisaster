/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import Images from './constants/Images';

type Props = {};
export default class Home extends Component<Props> {

    static navigationOptions = {
        title: 'Choose',
        headerStyle: {
          backgroundColor: '#363636',
        },
        headerTitleStyle: {},
        headerTintColor: '#fff',
    };

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
});
