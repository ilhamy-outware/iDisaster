
import React, {Component} from 'react';
import {Platform, View, StyleSheet, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Images from './constants/Images';

type Props = {};
export default class SelectableCell extends Component<Props> {
    render() {
        const { item, edit, onSelect, onRemove } = this.props;

        return (
            <TouchableOpacity style={styles.touchable}
                onPress={() => {
                  onSelect();
                }}>
                <TouchableOpacity style={styles.imageContainer}
                  onPress={() => {
                    onRemove();
                  }}>
                    {edit ?
                        <Image
                            style={styles.remove}
                            source={Images.list.remove}
                        />
                        : null
                    }
                </TouchableOpacity>
                <Text style={styles.listText}>{item.description}</Text>
                <View style={styles.imageContainer}>
                  {item.selected ?
                      <Image
                          style={styles.selected}
                          source={Images.list.checked}
                      />
                      : <View style={styles.selected}/>
                  }
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchable: {
        flexDirection: 'row',
    },
    listText: {
        flex: 1,
        fontSize: 18,
        color: '#fff',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 30,
        marginBottom: 15,
    },
    remove: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
    },
    selected: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
