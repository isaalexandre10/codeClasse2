import { useState } from 'react';

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


export default function CadastroClienteScreen() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');


  const [erroNome, setErroNome] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroEndereco, setErroEndereco] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');
  const [erroCidade, setErroCidade] = useState('');
  const [erroBairro, setErroBairro] = useState('');
  const [erroEstado, setErroEstado] = useState('');


  function validarNome() {

    if (nome.trim() === '') {
      setErroNome('O nome é obrigatório');
      return false;
    }

    setErroNome('');
    return true;
  }


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


  function validarEndereco() {

    if (endereco.trim() === '') {
      setErroEndereco('O endereço é obrigatório');
      return false;
    }

    setErroEndereco('');
    return true;
  }


  function validarTelefone() {

    const somenteNumeros =
      telefone.replace(/\D/g, '');

    if (somenteNumeros.length === 0) {
      setErroTelefone('O telefone é obrigatório');
      return false;
    }

    if (somenteNumeros.length < 10) {
      setErroTelefone(
        'O telefone deve possuir pelo menos 10 números'
      );

      return false;
    }

    setErroTelefone('');
    return true;
  }


  function validarCidade() {

    if (cidade.trim() === '') {
      setErroCidade('A cidade é obrigatória');
      return false;
    }

    setErroCidade('');
    return true;
  }


  function validarBairro() {

    if (bairro.trim() === '') {
      setErroBairro('O bairro é obrigatório');
      return false;
    }

    setErroBairro('');
    return true;
  }


  function validarEstado() {

    if (estado.trim() === '') {
      setErroEstado('O estado é obrigatório');
      return false;
    }

    setErroEstado('');
    return true;
  }


  const telefoneValido =
    telefone.replace(/\D/g, '').length >= 10;


  const formularioValido =

    nome.trim() !== '' &&

    email.trim() !== '' &&
    email.includes('@') &&

    endereco.trim() !== '' &&

    telefoneValido &&

    cidade.trim() !== '' &&

    bairro.trim() !== '' &&

    estado.trim() !== '';


  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >

      <Text style={styles.titulo}>
        Cadastro Cliente
      </Text>


      {/* NOME */}

      <Text style={styles.label}>
        Nome
      </Text>

      <TextInput
        style={[
          styles.input,
          erroNome !== '' && styles.inputErro
        ]}
        placeholder="Digite seu nome"
        value={nome}

        onChangeText={(texto) => {
          setNome(texto);

          if (texto.trim() !== '') {
            setErroNome('');
          }
        }}

        onBlur={validarNome}
      />

      {erroNome !== '' && (
        <Text style={styles.erro}>
          {erroNome}
        </Text>
      )}


      {/* EMAIL */}

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={[
          styles.input,
          erroEmail !== '' && styles.inputErro
        ]}
        placeholder="exemplo@email.com"
        value={email}

        onChangeText={(texto) => {

          setEmail(texto);

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


      {/* ENDEREÇO */}

      <Text style={styles.label}>
        Endereço
      </Text>

      <TextInput
        style={[
          styles.input,
          erroEndereco !== '' && styles.inputErro
        ]}
        placeholder="Rua das Flores, 120"
        value={endereco}

        onChangeText={(texto) => {

          setEndereco(texto);

          if (texto.trim() !== '') {
            setErroEndereco('');
          }

        }}

        onBlur={validarEndereco}
      />

      {erroEndereco !== '' && (
        <Text style={styles.erro}>
          {erroEndereco}
        </Text>
      )}


      {/* TELEFONE */}

      <Text style={styles.label}>
        Telefone
      </Text>

      <TextInput
        style={[
          styles.input,
          erroTelefone !== '' && styles.inputErro
        ]}
        placeholder="Digite seu telefone"
        value={telefone}

        onChangeText={(texto) => {

          setTelefone(texto);

          if (
            texto.replace(/\D/g, '').length >= 10
          ) {
            setErroTelefone('');
          }

        }}

        onBlur={validarTelefone}

        keyboardType="phone-pad"
      />

      {erroTelefone !== '' && (
        <Text style={styles.erro}>
          {erroTelefone}
        </Text>
      )}


      {/* CIDADE */}

      <Text style={styles.label}>
        Cidade
      </Text>

      <TextInput
        style={[
          styles.input,
          erroCidade !== '' && styles.inputErro
        ]}
        placeholder="Digite sua cidade"
        value={cidade}

        onChangeText={(texto) => {

          setCidade(texto);

          if (texto.trim() !== '') {
            setErroCidade('');
          }

        }}

        onBlur={validarCidade}
      />

      {erroCidade !== '' && (
        <Text style={styles.erro}>
          {erroCidade}
        </Text>
      )}


      {/* BAIRRO */}

      <Text style={styles.label}>
        Bairro
      </Text>

      <TextInput
        style={[
          styles.input,
          erroBairro !== '' && styles.inputErro
        ]}
        placeholder="Digite seu bairro"
        value={bairro}

        onChangeText={(texto) => {

          setBairro(texto);

          if (texto.trim() !== '') {
            setErroBairro('');
          }

        }}

        onBlur={validarBairro}
      />

      {erroBairro !== '' && (
        <Text style={styles.erro}>
          {erroBairro}
        </Text>
      )}


      {/* ESTADO */}

      <Text style={styles.label}>
        Estado
      </Text>

      <TextInput
        style={[
          styles.input,
          erroEstado !== '' && styles.inputErro
        ]}
        placeholder="Ex: MG"
        value={estado}

        onChangeText={(texto) => {

          setEstado(texto);

          if (texto.trim() !== '') {
            setErroEstado('');
          }

        }}

        onBlur={validarEstado}

        autoCapitalize="characters"

        maxLength={2}
      />

      {erroEstado !== '' && (
        <Text style={styles.erro}>
          {erroEstado}
        </Text>
      )}


      {/* BOTÃO */}

      <TouchableOpacity
        style={[
          styles.botao,
          !formularioValido &&
          styles.botaoDesabilitado
        ]}
        disabled={!formularioValido}
      >

        <Text style={styles.textoBotao}>
          CADASTRAR
        </Text>

      </TouchableOpacity>

    </ScrollView>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },

  conteudo: {
    padding: 20,
    paddingBottom: 50,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 25,
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