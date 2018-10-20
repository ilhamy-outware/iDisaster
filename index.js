/** @format */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from '../iDisaster/configureStore';
import App from './App';
import {name as appName} from './app.json';

const store = configureStore();

export default class IDisasterApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => IDisasterApp);
