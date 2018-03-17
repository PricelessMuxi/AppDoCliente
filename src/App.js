/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import { TabNavigator } from 'react-navigation';
import Home from './scenes/Home'
import Points from './scenes/Points'
import Badges from './scenes/Badges'

const ScreenNavigator = TabNavigator(
    {
        Home: {screen: Home},
        Points: {screen: Points},
        Badges: {screen: Badges},
    },
    {
        tabBarOptions: {
            activeTintColor: '#d88100',
            inactiveTintColor: '#999999',
            style: {
                backgroundColor: '#ffffff',
            }
        }
    }
);


ScreenNavigator.navigationOptions = {
    title: 'Tab Dunno'
};

export default ScreenNavigator;
