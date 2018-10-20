/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList} from 'react-native';
import Images from './constants/Images';
import DisasterData from './assets/data/DisasterData';
import SelectableCell from './SelectableCell';
import {connect} from 'react-redux';
import Actions from './actions';

type Props = {};
class Preparation extends Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: 'What to prepare',
        headerStyle: {
          backgroundColor: '#363636',
        },
        headerTitleStyle: {},
        headerTintColor: '#fff',
    });

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
    }

    render() {
        const { disasterType } = this.props.navigation.state.params;
        const disasterData = this.props.disaster[disasterType].preparation;

        return (
          <View style={styles.container}>
              <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.button}
                      onPress={() => {
                      }}>
                      <Text style={styles.buttonText}>{'Add'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}
                      onPress={() => {
                          this.setState({edit: !this.state.edit});
                      }}>
                      <Text style={styles.buttonText}>{this.state.edit ? 'Cancel' : 'Edit'}</Text>
                  </TouchableOpacity>
              </View>
              <Text style={styles.titleText}>{'Prepare the following:'}</Text>
              <FlatList
                  style={styles.list}
                  data={disasterData}
                  keyExtractor={(item, index) => index.toString()}
                  extraData={this.state.edit}
                  renderItem={({item, index}) =>
                      <SelectableCell
                      onSelect={() => this.props.selectPreparation(disasterType, index)}
                      onRemove={() => this.props.removePreparation(disasterType, index)}
                      item={item}
                      edit={this.state.edit}/>
                  }
              />
          </View>
        );
    }
}

const mapStateToProps = (state) => {
  let {disaster} = state;
  return { disaster };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectPreparation : (disasterType, index) => {
      dispatch(Actions.selectPreparation(disasterType, index));
    },
    removePreparation : (disasterType, index) => {
      dispatch(Actions.removePreparation(disasterType, index));
    },
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Preparation);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    buttonsContainer: {
      height: 40,
      marginTop: 15,
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
