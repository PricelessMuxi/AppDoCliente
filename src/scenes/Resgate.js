import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Points from './Points'

var totalPontos = 1230;
var showResgate = true;
var items = [
    {
        name: 'Loja do Seu José',
        points: 100
    },
    {
        name: 'Padaria do João',
        points: 1100
    }
];
export default class Resgate extends Component {
    static navigationOptions = {
        tabBarLabel: 'Points'
    };
    render() {
        this.textInputValue = '';
        const redeem = function () {
            totalPontos -= this.textInputValue;
            this.forceUpdate();
            Alert.alert(`Resgatados ${this.textInputValue} pontos`);
        }.bind(this);
        const onTextInputChange = function(event) {
            this.textInputValue = event.nativeEvent.text;
        }.bind(this);
        const rerender = function () {
            items = [
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
            showResgate = false;
            this.forceUpdate()
        }.bind(this);
        return showResgate ? (
            <List>
                <FlatList data={items} renderItem={({ item }) => (
                    <ListItem
                        title={item.name}
                        subtitle={`Pontuação total acumulada: ${item.points}`}
                        keyExtractor={item => item.date}
                        onPress={() => {rerender()}}
                    />
                )} />
            </List>
        ) : (
            <View>
                <List>
                    <FlatList data={items} renderItem={({ item }) => (
                        <ListItem
                            title={item.date}
                            subtitle={`${item.points} pontos adquiridos em compras`}
                            keyExtractor={item => item.date}
                        />
                    )} />
                </List>
                <Text>Total de pontos {totalPontos}</Text>
                <Text>Resgate de pontos</Text>
                <TextInput placeholder="Quantos pontos?"
                           style={styles.input}
                           onChange={onTextInputChange}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={redeem}
                >
                    <Text style={styles.buttonText}>Resgatar</Text>
                </TouchableOpacity>
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
    button: {
        backgroundColor: '#d88100',
        paddingVertical: 10,
        width: '80%'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    input: {
        width: '80%'
    }
});
