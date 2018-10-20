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
import DisasterData from './assets/data/DisasterData';

type Props = {};
export default class Home extends Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: DisasterData[navigation.state.params.disasterType].name,
        headerStyle: {
          backgroundColor: '#363636',
        },
        headerTitleStyle: {},
        headerTintColor: '#fff',
    });

    render() {
        const { disasterType } = this.props.navigation.state.params;
        const disasterData = DisasterData[disasterType];

        return (
            <ScrollView style={styles.container}>
              <View style={styles.container}>
                  <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={Images.home[disasterType]}
                    />
                    <Text style={styles.descriptionText}>{disasterData.description}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('ToDo', {
                          disasterType,
                        });
                    }}
                    style={{...styles.button, backgroundColor: '#2e448c'}}>
                      <Text style={styles.buttonText}>{'What to do'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Preparation', {
                          disasterType,
                        });
                    }}
                    style={{...styles.button, backgroundColor: '#608653'}}>
                      <Text style={styles.buttonText}>{'What to prepare'}</Text>
                  </TouchableOpacity>
              </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingHorizontal: 15,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 30,
        alignItems: 'center',
    },
    descriptionText: {
        marginTop: 30,
        marginHorizontal: 15,
        fontSize: 20,
        textAlign: 'left',
        color: '#fff',
        marginBottom: 30,
    },
    button: {
        height: 100,
        borderRadius: 10,
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
        marginLeft: 15,
    }
});
