/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList, Modal, TextInput} from 'react-native';

type Props = {};
export default class AddModal extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
          text: '',
        };
    }

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.modalContainer}>
                  <TextInput
                      style={styles.textInput}
                      multiline = {true}
                      numberOfLines = {4}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />
                  <View style={styles.buttonsContainer}>
                      <TouchableOpacity style={styles.button}
                          onPress={() => {
                              this.props.onCancel();
                          }}>
                          <Text style={styles.buttonText}>{'Cancel'}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}
                          onPress={() => {
                              this.props.onAdd(this.state.text);
                          }}>
                          <Text style={styles.buttonText}>{'Add'}</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#00000088',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        height: 200,
        width: 300,
        backgroundColor: '#363636',
        borderRadius: 10,
    },
    textInput: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 15,
        marginHorizontal: 15,
        padding: 10,
    },
    buttonsContainer: {
      height: 40,
      marginVertical: 15,
      marginRight: 15,
      marginLeft: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
        height: 40,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
    titleText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
    },
    list: {
        flex: 1,
    },
});
