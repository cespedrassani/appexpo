import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Funcionario extends Component {
    render() {
        return (
            <View style={styles.funcionarios}>
                <View style={styles.funcInfo}>
                    <Text style={styles.funNome}>{this.props.data.nome}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    funcionarios: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    funcInfo: {
        marginLeft: 10,
    },

    funNome: {
        fontWeight: 'bold',
        color: '#222'
    },

    funIdade: {
        fontSize: 12,
        color: '#999'
    },

})