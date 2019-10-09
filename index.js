/**
 * @format
 */

import {AppRegistry, View } from 'react-native';
import TabNavigator from './src/app_navigation';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation';
import React from 'react';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/redux_reducers'

//redux saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/redux_sagas'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const AppContainer =  createAppContainer(TabNavigator);
const appContainer = () => {
    return(
        <Provider store={store} style={{flex: 1, backgroundColor: 'red'}}>
            <AppContainer style={{flex: 1, backgroundColor: 'red'}}/>
        </Provider>
    )
}
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => appContainer);
