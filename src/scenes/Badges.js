import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Badges extends Component {
    static navigationOptions = {
        tabBarLabel: 'Badges'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>I'm Badges!</Text>
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
