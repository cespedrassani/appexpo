import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  Text,
  View
} from "react-native";
import api from "../services/api";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      email: "",
      senha: "",
      errorMessage: ""
    };
  }

  static navigationOptions = {
    title: "Login"
  };

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem("token");
    if (value !== null) {
      alert(Logado com sucesso!);
    }
  };

  validacao = () => {
    if (this.state.email === "") {
      alert("O e-mail precisa ser preenchido");
      return false;
    } else if (this.state.senha === "") {
      alert("A senha precisa ser preenchida");
      return false;
    }
    return true;
  };

  login = async () => {
    if (true /*this.validacao()*/) {
      try {
        const response = await api.post("empregador/autenticacao", {
          email: this.state.email,
          senha: this.state.senha
        });

        if (response !== "undefined") {

          const data = [response.data.data];
          const token = [response.data.token];

          AsyncStorage.multiSet([
            ["@api:token", JSON.stringify(token)],
            ["@api:data", JSON.stringify(data)]
          ]);

          this.props.navigation.navigate("Home");
        }
      } catch (response) {
        this.setState({ errorMessage: "E-mail ou senha incorretos" });
      }
    }
  };

  cadastrar = () => {
    this.props.navigation.navigate("Register");
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>LOGIN</Text>

          <TextInput
            onChangeText={email => this.setState({ email })}
            style={styles.textInput}
            placeholder="E-mail"
            underlineColorAndroid="transparent"
          />
          <TextInput
            onChangeText={senha => this.setState({ senha })}
            style={styles.textInput}
            placeholder="Senha"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={this.login} style={styles.btnLogin}>
            <Text style={styles.textBtn}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.cadastrar}
            style={styles.btnCadastrar}
          >
            <Text style={styles.textBtn}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2896d3",
    paddingLeft: 30,
    paddingRight: 30
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 16,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  btnLogin: {
    alignSelf: "stretch",
    backgroundColor: "#01c853",
    padding: 20,
    alignItems: "center",
    marginBottom: 20
  },
  btnCadastrar: {
    alignSelf: "stretch",
    backgroundColor: "#FA8072",
    padding: 20,
    alignItems: "center"
  },
  textBtn: {
    color: "#fff"
  }
});
