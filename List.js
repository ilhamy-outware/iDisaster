
import React, {Component} from 'react';
import {Platform, View, StyleSheet, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Images from './constants/Images';

type Props = {};
export default class List extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Checklist</Text>
                <FlatList
                    style={styles.list}
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <SelectableCell text={item.key}/>}
                />
            </View>
        );
    }
}

class SelectableCell extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {isChecked: false}
    }



    render() {
        return (
            <TouchableOpacity style={styles.touchable}
                onPress={() => {
                    this.setState(previousState => {
                        return { isChecked: !previousState.isChecked }
                    });
                }}>
                <Text style={styles.listText}>{this.props.text}</Text>
                {this.state.isChecked ?
                    <Image
                        style={styles.image}
                        source={Images.list.checked}
                    />
                    : null
                }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    titleText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 15,
        marginLeft: 15,
    },
    list: {
        flex: 1,
        paddingVertical: 30,
    },
    touchable: {
        flexDirection: 'row',
    },
    listText: {
        flex: 1,
        fontSize: 22,
        color: '#fff',
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 15,
    },
    image: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
    }
});
