import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';

var totalPontos = 1230;

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home'
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
        return (
            <View style={styles.container}>
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
