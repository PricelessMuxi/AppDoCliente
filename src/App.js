/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import { TabNavigator } from 'react-navigation';
import Resgate from './scenes/Resgate'
// import Points from './scenes/Points'
import Badges from './scenes/Badges'

const ScreenNavigator = TabNavigator(
    {
        Resgate: {screen: Resgate},
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
