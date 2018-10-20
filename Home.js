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
        title: 'Choose your disaster',
        headerStyle: {
          backgroundColor: '#363636',
        },
        headerTitleStyle: {},
        headerTintColor: '#fff',
    };

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.tileContainer}>
                        <TouchableOpacity style={{...styles.leftTile, backgroundColor: '#2e448c'}}>
                            <Text style={styles.tileText}>Tsunami</Text>
                            <Image
                                resizeMode={'center'}
                                style={styles.image}
                                source={Images.home.tsunami}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.rightTile, backgroundColor: '#89040c'}}>
                            <Text style={styles.tileText}>Volcano</Text>
                            <Image
                                resizeMode={'center'}
                                style={styles.image}
                                source={Images.home.volcano}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tileContainer}>
                        <TouchableOpacity style={{...styles.leftTile, backgroundColor: '#f79712'}}>
                            <Text style={styles.tileText}>Earthquake</Text>
                            <Image
                                resizeMode={'center'}
                                style={styles.image}
                                source={Images.home.earthquake}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.rightTile, backgroundColor: '#05687d'}}>
                            <Text style={styles.tileText}>Flood</Text>
                            <Image
                                resizeMode={'center'}
                                style={styles.image}
                                source={Images.home.flood}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tileContainer}>
                        <TouchableOpacity style={{...styles.leftTile, backgroundColor: '#ad3d05'}}>
                            <Text style={styles.tileText}>Wildfire</Text>
                            <Image
                                resizeMode={'center'}
                                style={styles.image}
                                source={Images.home.wildfire}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.rightTile, backgroundColor: '#4a6577'}}>
                            <Text style={styles.tileText}>Tornado</Text>
                            <Image
                                resizeMode={'center'}
                                style={styles.image}
                                source={Images.home.tornado}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    scrollView: {
        flex: 1,
        paddingVertical: 30,
    },
    tileContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 30,
    },
    leftTile: {
        flex: 1,
        marginRight: 15,
        height: 162,
        backgroundColor: 'blue',
    },
    rightTile: {
        flex: 1,
        height: 162,
        backgroundColor: 'red',
    },
    tileText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
        marginLeft: 15,
    },
    image: {
        width: 100,
        height: 100,
    }
});
