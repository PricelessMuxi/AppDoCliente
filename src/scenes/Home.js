import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>I'm Home!</Text>
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
