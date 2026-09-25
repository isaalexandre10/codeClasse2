import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


export default function CadastroProdutoScreen() {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');


  const [erroNome, setErroNome] = useState('');
  const [erroDescricao, setErroDescricao] = useState('');
  const [erroCategoria, setErroCategoria] = useState('');
  const [erroPreco, setErroPreco] = useState('');
  const [erroQuantidade, setErroQuantidade] = useState('');


  function validarNome() {

    if (nome.trim() === '') {
      setErroNome('O nome do produto é obrigatório');
      return false;
    }

    setErroNome('');
    return true;
  }


  function validarDescricao() {

    if (descricao.trim() === '') {
      setErroDescricao('A descrição é obrigatória');
      return false;
    }

    setErroDescricao('');
    return true;
  }


  function validarCategoria() {

    if (categoria.trim() === '') {
      setErroCategoria('A categoria é obrigatória');
      return false;
    }

    setErroCategoria('');
    return true;
  }


  function validarPreco() {

    if (preco.trim() === '') {
      setErroPreco('Informe o preço do produto');
      return false;
    }

    setErroPreco('');
    return true;
  }


  function validarQuantidade() {

    if (quantidade.trim() === '') {
      setErroQuantidade('Informe a quantidade');
      return false;
    }

    if (Number(quantidade) <= 0) {
      setErroQuantidade(
        'A quantidade deve ser maior que zero'
      );

      return false;
    }

    setErroQuantidade('');
    return true;
  }


  const formularioValido =
    nome.trim() !== '' &&
    descricao.trim() !== '' &&
    categoria.trim() !== '' &&
    preco.trim() !== '' &&
    quantidade.trim() !== '' &&
    Number(quantidade) > 0;


  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >

      <Text style={styles.titulo}>
        Cadastro de Produto
      </Text>


      {/* NOME */}

      <Text style={styles.label}>
        Nome do Produto
      </Text>

      <TextInput
        style={[
          styles.input,
          erroNome !== '' && styles.inputErro
        ]}
        placeholder="Digite o nome do produto"
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


      {/* DESCRIÇÃO */}

      <Text style={styles.label}>
        Descrição
      </Text>

      <TextInput
        style={[
          styles.input,
          styles.inputDescricao,
          erroDescricao !== '' && styles.inputErro
        ]}
        placeholder="Digite a descrição do produto"
        value={descricao}

        onChangeText={(texto) => {
          setDescricao(texto);

          if (texto.trim() !== '') {
            setErroDescricao('');
          }
        }}

        onBlur={validarDescricao}

        multiline
      />

      {erroDescricao !== '' && (
        <Text style={styles.erro}>
          {erroDescricao}
        </Text>
      )}


      {/* CATEGORIA */}

      <Text style={styles.label}>
        Categoria
      </Text>

      <TextInput
        style={[
          styles.input,
          erroCategoria !== '' && styles.inputErro
        ]}
        placeholder="Ex: Informática"
        value={categoria}

        onChangeText={(texto) => {
          setCategoria(texto);

          if (texto.trim() !== '') {
            setErroCategoria('');
          }
        }}

        onBlur={validarCategoria}
      />

      {erroCategoria !== '' && (
        <Text style={styles.erro}>
          {erroCategoria}
        </Text>
      )}


      {/* PREÇO */}

      <Text style={styles.label}>
        Preço
      </Text>

      <TextInput
        style={[
          styles.input,
          erroPreco !== '' && styles.inputErro
        ]}
        placeholder="Digite o preço"
        value={preco}

        onChangeText={(texto) => {
          setPreco(texto);

          if (texto.trim() !== '') {
            setErroPreco('');
          }
        }}

        onBlur={validarPreco}

        keyboardType="decimal-pad"
      />

      {erroPreco !== '' && (
        <Text style={styles.erro}>
          {erroPreco}
        </Text>
      )}


      {/* QUANTIDADE */}

      <Text style={styles.label}>
        Quantidade
      </Text>

      <TextInput
        style={[
          styles.input,
          erroQuantidade !== '' && styles.inputErro
        ]}
        placeholder="Digite a quantidade"
        value={quantidade}

        onChangeText={(texto) => {

          setQuantidade(texto);

          if (Number(texto) > 0) {
            setErroQuantidade('');
          }

        }}

        onBlur={validarQuantidade}

        keyboardType="numeric"
      />

      {erroQuantidade !== '' && (
        <Text style={styles.erro}>
          {erroQuantidade}
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
          CADASTRAR PRODUTO
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

  inputDescricao: {
    height: 100,
    textAlignVertical: 'top',
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
    padding: 16,
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