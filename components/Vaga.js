import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    StatusBar,
} from "react-native";
import Modal from 'react-native-modal';
import moment from "moment";
import "moment/locale/pt-br";
import api from '../services/api';

export default class Vaga extends Component {
    state = {
        visibleModal: false,
    };

    _renderButton = (text, onPress) => (
        <TouchableOpacity style={styles.buttonTouch} onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    getCandidato = async (cand) => {
        const candidato = await api.get('funcionario/buscar/id/' + cand);
        return candidato.data;
    }

    _renderModalContent = () => (
        <View style={styles.modalContent}>
        <StatusBar barStyle="dark-content"/>

            <Text>{this.props.data.nome}</Text>
            <Text>{this.props.data.descricao}</Text>
            
            <FlatList
            data={[{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'},{key: 'maria'}, {key: 'brenda'}]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />

            {this._renderButton('Fechar', () => this.setState({ visibleModal: false }))}
        </View>
    );

    render() {
        moment.locale("pt-br");
        return (
            <View style={styles.vagas}>
                <View style={styles.vagaInfo}>
                    <View style={styles.container}></View>
                    <View style={styles.vagaInfoHeader}>
                        <Text style={styles.vagaNome}>{this.props.data.nome}
                            {this._renderButton('Ver', () => this.setState({ visibleModal: true }))}
                        </Text>
                        <Text style={styles.vagaDta}>
                            Anunciada {moment(this.props.data.dataCriacao).fromNow()}
                            <Text style={styles.qtdCandidatos}>
                                {" "} - {this.props.data.candidatos.length} candidatos
                            </Text>
                        </Text>
                    </View>
                    <Text style={styles.vagasDescricao}>{this.props.data.descricaoMini}</Text>
                </View>

                <Modal 
                isVisible={this.state.visibleModal} 
                animationIn={'slideInLeft'} 
                animationOut={'slideOutRight'}
                swipeArea={20} 
                swipeThreshold={50}>
                    {this.state.visibleModal === true ? this._renderModalContent() : ""}
                </Modal>
                
            </View>
            

        );
    }
}

const styles = StyleSheet.create({
    vagas: {
        padding: 10,
        backgroundColor: "#FFF",
        marginBottom: 20,
        borderRadius: 5,
        marginLeft: 10
    },

    vagaDta: {
        color: "#222",
        fontSize: 12
    },

    vagaInfo: {
        marginLeft: 10
    },

    vagaNome: {
        fontWeight: "bold",
        color: "#222",
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },

    vagasDescricao: {
        fontSize: 12,
        color: "#999"
    },

    qtdCandidatos: {},

    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 2,
        margin: 2,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    buttonTouch: {
        alignItems: 'flex-end'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});
