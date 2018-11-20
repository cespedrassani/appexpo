import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  AsyncStorage,
} from 'react-native';
import Vaga from '../components/Vaga';
import api from '../services/api';

export default class HomeScreenCompany extends Component {
  static navigationOptions = {
    title: "Vagas"
  };

  state = {
    vagas: []
  }

  async componentDidMount() {
    this.loadVagas();
  }

  loadVagas = async () => {
    const jsonToken = await AsyncStorage.getItem('@api:token');
    const token = JSON.parse(jsonToken);
    const response = await api.get('vaga/buscar/empregador/' + token[0].id);
    
    //if (){} SE N POSSUI VAGA PARA ESSE EMPREGADOR

    this.setState({
      vagas: response.data
    });

    //await AsyncStorage.setItem('@api:vaga', JSON.stringify(this.state.vagas));
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.vagaList}>
        {this.state.vagas.map(vaga => 
            <Vaga key={vaga._id} data={vaga} />
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222'
  },

  vagaList: {
    padding: 20,
  },

  vagas: {
    padding: 20,
    backgroundColor: '#FFF',
    height: 120,
    marginBottom: 20,
    borderRadius: 5,
  },

  headerButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222'
  }
});