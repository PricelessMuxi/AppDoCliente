import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { List, ListItem } from 'react-native-elements';


export default class Points extends Component {
    static navigationOptions = {
        tabBarLabel: 'Points'
    };
    render() {
        const items = [
            {
                date: '01/03/2018',
                amount: 10.0,
                points: 100
            },
            {
                date: '04/03/2018',
                amount: 110.0,
                points: 1100
            },
            {
                date: '09/03/2018',
                amount: 20.0,
                points: 200
            },
            {
                date: '15/03/2018',
                amount: 50.0,
                points: 500
            },
        ];
        return (
            <List>
                <FlatList data={items} renderItem={({ item }) => (
                    <ListItem
                        title={item.date}
                        subtitle={`${item.points} pontos adquiridos em compras`}
                        keyExtractor={item => item.date}
                    />
                )} />
            </List>
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
