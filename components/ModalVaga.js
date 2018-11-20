import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

class ModalVaga extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _renderModalContent = () => (
    <View style={styles.modalContent}>

      <Text>{this.props.data.nome}</Text>
      <Text>{this.props.data.descricao}</Text>
      {this.props.data.candidatos.map(cand => {
        const candidato = this.getCandidato(cand);
        console.log(candidato);
      })}

      {this._renderButton('Fechar', () => this.setState({ modalVisible: null }))}
    </View>
  );

  _renderButton = (text, onPress) => (
    <TouchableOpacity style={styles.buttonTouch} onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal isVisible={this.state.modalVisible === 2} animationIn={'slideInLeft'} animationOut={'slideOutRight'}>
            {this._renderModalContent()}
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}