import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from 'react';
import ProductCard from "../components/ProductCard";

// Define o formato de cada produto.
interface Produto {
  id: string;
  nome: string;
}

export default function GerenciadorProdutosScreen({ route, navigation }: any) {
  const produtoId = route.params;
  // Guarda o texto digitado no TextInput.
  const [nome, setNome] = useState('');

  // Guarda todos os produtos cadastrados.
  const [produtos, setProdutos] = useState<Produto[]>([]);

  function adicionarProduto() {
    // Impede cadastrar um produto vazio.
    if (nome.trim() === '') {
      return;
    }

    // Criamos um novo objeto de produto.
    const novoProduto: Produto = {
      // Cada produto precisa de um ID único.
      id: Date.now().toString(),
      // O nome vem do TextInput.
      nome: nome,
    };

    // Mantemos os produtos antigos
    // e adicionamos o novo produto.
    setProdutos([...produtos, novoProduto]);

    // Limpa o campo depois do cadastro.
    setNome('');
  }
  return (
    <View >
      <Text>ID: {produtoId}</Text>
        {/* Cabeçalho da aplicação */}
      <Text style={styles.titulo}>
        Gerenciador de Produtos
      </Text>

      <Text style={styles.subtitulo}>
        Cadastre produtos na lista
      </Text>

      {/* Área do formulário */}
      <View style={styles.formulario}>

        <TextInput
          style={styles.input}
          placeholder="Digite o nome do produto"
          // O valor do campo vem do State.
          value={nome}
          // Executado sempre que o usuário digita.
          onChangeText={setNome}
        />

        <TouchableOpacity
          style={styles.botao}

          // Executa a função ao pressionar o botão.
          onPress={adicionarProduto}
        >
          <Text style={styles.textoBotao}>
            Adicionar Produto
          </Text>
        </TouchableOpacity>

      </View>

      {/* Mostra quantos produtos existem */}
      <Text style={styles.contador}>
        Produtos cadastrados: {produtos.length}
      </Text>
      <FlatList
        // Lista utilizada pelo FlatList.
        data={produtos}
        // Cria uma chave única para cada item.
        keyExtractor={(item) => item.id}
        // Define como cada produto será mostrado.
        renderItem={({ item }) => (
          <ProductCard nome={item.nome} />
        )}

        // Aparece quando não existem produtos.
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum produto cadastrado.
          </Text>
        }
      />
      {/*
        TouchableOpacity cria uma área clicável.
        Aqui ele funciona como um botão de voltar.
      */}
      <TouchableOpacity

        // onPress define o que acontece
        // quando o usuário toca no botão.
        onPress={() =>
          // goBack() volta para a tela anterior
          // que já estava na pilha de navegação.
          navigation.goBack()
        }
      >
        {/* Texto exibido dentro do botão */}
        <Text>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 20,
  },

  formulario: {
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#4338ca',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  contador: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#334155',
  },

  vazio: {
    textAlign: 'center',
    marginTop: 30,
    color: '#64748b',
  },

});