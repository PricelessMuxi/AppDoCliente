/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import Home from './scenes/Home'
import Points from './scenes/Points'
import Badges from './scenes/Badges'

const ScreenNavigator = TabNavigator({
    Home: {screen: Home},
    Points: {screen: Points},
    Badges: {screen: Badges},
});

ScreenNavigator.navigationOptions = {
    title: 'Tab Dunno'
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sample text here!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
