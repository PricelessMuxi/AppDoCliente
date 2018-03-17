import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Points extends Component {
    static navigationOptions = {
        tabBarLabel: 'Points'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>I'm Points!</Text>
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
    }
});