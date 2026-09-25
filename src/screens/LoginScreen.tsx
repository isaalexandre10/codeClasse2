import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function LoginScreen() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  function validarEmail() {

    if (email.trim() === '') {
      setErroEmail('O e-mail é obrigatório');
      return false;
    }

    if (!email.includes('@')) {
      setErroEmail('Digite um e-mail válido');
      return false;
    }

    setErroEmail('');
    return true;
  }

  function validarSenha() {

    if (senha.trim() === '') {
      setErroSenha('A senha é obrigatória');
      return false;
    }

    if (senha.length < 6) {
      setErroSenha('A senha deve possuir no mínimo 6 caracteres');
      return false;
    }

    setErroSenha('');
    return true;
  }


  // O botão somente será habilitado
  // quando todo o formulário estiver correto
  const formularioValido =
    email.trim() !== '' &&
    email.includes('@') &&
    senha.length >= 6;


  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Login
      </Text>


      {/* CAMPO E-MAIL */}

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={[
          styles.input,
          erroEmail !== '' && styles.inputErro
        ]}
        placeholder="Digite seu e-mail"
        value={email}

        onChangeText={(texto) => {
          setEmail(texto);

          // Se o usuário corrigir o campo,
          // retiramos a mensagem de erro
          if (texto.includes('@')) {
            setErroEmail('');
          }
        }}

        onBlur={validarEmail}

        keyboardType="email-address"

        autoCapitalize="none"
      />

      {erroEmail !== '' && (
        <Text style={styles.erro}>
          {erroEmail}
        </Text>
      )}


      {/* CAMPO SENHA */}

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={[
          styles.input,
          erroSenha !== '' && styles.inputErro
        ]}
        placeholder="Digite sua senha"
        value={senha}

        onChangeText={(texto) => {
          setSenha(texto);

          if (texto.length >= 6) {
            setErroSenha('');
          }
        }}

        onBlur={validarSenha}

        secureTextEntry
      />

      {erroSenha !== '' && (
        <Text style={styles.erro}>
          {erroSenha}
        </Text>
      )}


      {/* BOTÃO */}

      <TouchableOpacity
        style={[
          styles.botao,
          !formularioValido && styles.botaoDesabilitado
        ]}
        disabled={!formularioValido}
      >

        <Text style={styles.textoBotao}>
          ENTRAR
        </Text>

      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f1f5f9',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1e3a8a',
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 8,
  },

  inputErro: {
    borderColor: 'red',
    borderWidth: 2,
  },

  erro: {
    color: 'red',
    marginBottom: 12,
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  botaoDesabilitado: {
    backgroundColor: '#A0A0A0',
    opacity: 0.7,
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },

});