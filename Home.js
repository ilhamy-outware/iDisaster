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
import DisasterType from './constants/DisasterType';
import {connect} from 'react-redux';
import Actions from './actions';

type Props = {};
class Home extends Component<Props> {

    static navigationOptions = {
        title: 'iDisaster',
        headerStyle: {
          backgroundColor: '#363636',
        },
        headerTitleStyle: {},
        headerTintColor: '#fff',
    };

    constructor(props) {
        super(props);

        this.state = {
            showWarning: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.showWarning ? <TouchableOpacity
                   onPress={() => {
                        this.props.setDisasterType(DisasterType.flood);
                        this.props.setWarning(true);
                        this.props.navigation.navigate('During');
                   }}
                   style={styles.warningContainer}>
                    <Image
                        style={styles.warningImage}
                        source={Images.danger}
                    />
                </TouchableOpacity> : null}
                <View style={styles.tileContainer}>
                    <TouchableOpacity
                      onPress={() => {
                          this.props.setDisasterType(DisasterType.tsunami);
                          this.props.navigation.navigate('Disaster', {
                            disasterType: DisasterType.tsunami,
                          });
                      }}
                      style={{...styles.leftTile, backgroundColor: '#2e448c'}}>
                        <Text style={styles.tileText}>Tsunami</Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={Images.home.tsunami}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                          this.props.setDisasterType(DisasterType.volcano);
                          this.props.navigation.navigate('Disaster', {
                            disasterType: DisasterType.volcano,
                          });
                      }}
                      style={{...styles.rightTile, backgroundColor: '#89040c'}}>
                        <Text style={styles.tileText}>Volcano</Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={Images.home.volcano}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tileContainer}>
                    <TouchableOpacity
                      onPress={() => {
                          this.props.setDisasterType(DisasterType.earthquake);
                          this.props.navigation.navigate('Disaster', {
                            disasterType: DisasterType.earthquake,
                          });
                      }}
                      style={{...styles.leftTile, backgroundColor: '#f79712'}}>
                        <Text style={styles.tileText}>Earthquake</Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={Images.home.earthquake}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                          this.props.setDisasterType(DisasterType.flood);
                          this.props.navigation.navigate('Disaster', {
                            disasterType: DisasterType.flood,
                          });
                      }}
                      style={{...styles.rightTile, backgroundColor: '#05687d'}}>
                        <Text style={styles.tileText}>Flood</Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={Images.home.flood}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tileContainer}>
                    <TouchableOpacity
                      onPress={() => {
                          this.props.setDisasterType(DisasterType.wildfire);
                          this.props.navigation.navigate('Disaster', {
                            disasterType: DisasterType.wildfire,
                          });
                      }}
                      style={{...styles.leftTile, backgroundColor: '#ad3d05'}}>
                        <Text style={styles.tileText}>Wildfire</Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={Images.home.wildfire}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                          this.props.setDisasterType(DisasterType.tornado);
                          this.props.navigation.navigate('Disaster', {
                            disasterType: DisasterType.tornado,
                          });
                      }}
                      style={{...styles.rightTile, backgroundColor: '#4a6577'}}>
                        <Text style={styles.tileText}>Tornado</Text>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={Images.home.tornado}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
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
    setDisasterType : (disasterType) => {
      dispatch(Actions.setDisasterType(disasterType));
    },
    setWarning : (warning) => {
      dispatch(Actions.setWarning(warning));
    },
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    scrollView: {
        flex: 1,
        paddingVertical: 30,
    },
    warningContainer: {
        height: 50,
        backgroundColor: '#89040c',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    warningImage: {
        height: 35,
        resizeMode: 'contain',
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
        borderRadius: 10,
    },
    rightTile: {
        flex: 1,
        height: 162,
        borderRadius: 10,
    },
    imageContainer: {
        flex: 1,
    },
    tileText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
        marginLeft: 15,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});
