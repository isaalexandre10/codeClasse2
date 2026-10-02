import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define o formato de cada produto.
interface Produto {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  quantidade: number;
}
const CHAVE_PRODUTOS = '@codeclass:produtos';
export default function GerenciadorProdutosScreen({ route, navigation }: any) {
  // Guarda todos os produtos cadastrados.
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const produtoId = route.params;
  
  async function carregarProdutos() {
    try {
  // Busca os produtos salvos no AsyncStorage.
  const dadosSalvos =
  await AsyncStorage.getItem(CHAVE_PRODUTOS);
  if (dadosSalvos !== null) {
    // Converte o JSON salvo em uma lista de produtos.
    const listaProdutos: Produto[] =
    JSON.parse(dadosSalvos);
    // Atualiza a lista exibida na tela.
    setProdutos(listaProdutos);
  } else {
    // Se não houver produtos salvos,
    // inicia com uma lista vazia.
    setProdutos([]);
  }
  } catch (error) {
  // Mostra no console caso ocorra algum erro.
  console.log('Erro ao carregar produtos:', error);
  }
  }
  useEffect(() => {
    // Carrega os produtos quando a tela é aberta.
    carregarProdutos();
    // Recarrega os produtos sempre que a tela
    // volta a ficar em foco.
    const unsubscribe = navigation.addListener(
    'focus',
    () => {
    carregarProdutos();
    }
  );
  // Remove o listener quando a tela for desmontada.
  return unsubscribe;
  }, [navigation]);
  function editarProduto(produto: Produto) {
    // Abre a tela de cadastro e envia
    // o produto selecionado para edição.
    navigation.navigate(
    'CadastroProdutoScreen',
    { produto }
    );
  }
  async function excluirProduto(id: string) {
  try {
    // Cria uma nova lista removendo o produto que possui o ID informado.
    const novaLista = produtos.filter(
    (produto) => produto.id !== id
    );
    // Atualiza a lista exibida na tela.
    setProdutos(novaLista);
    // Salva a nova lista no AsyncStorage.
    await AsyncStorage.setItem(
    CHAVE_PRODUTOS,
    JSON.stringify(novaLista)
    );
  } catch (error) {
  // Mostra no console caso ocorra algum erro.
  console.log('Erro ao excluir produto:', error);
  }
  }

  return (
    <ScrollView >
      {/* Cabeçalho da aplicação */}
      <Text style={styles.titulo}>
        Gerenciador de Produtos
      </Text>

      <Text style={styles.subtitulo}>
        Cadastre produtos na lista
      </Text>

      {/* Área do formulário */}
      <View style={styles.formulario}>
        <TouchableOpacity
          style={styles.botao}
          // Executa a função ao pressionar o botão.
          onPress={()=> navigation.navigate('CadastroProdutoScreen')}
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
        // Define como cada produto será mostrado na tela.
        renderItem={({ item }) => (
        <View style={styles.card}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text>Descrição: {item.descricao}</Text>
        <Text>Categoria: {item.categoria}</Text>
        <Text>Preço: R$ {Number(item.preco ?? 0).toFixed(2)}</Text>
        <Text>Quantidade: {item.quantidade}</Text>
        <View style={styles.areaBotoes}>
        <TouchableOpacity
        style={styles.botaoEditar}
        onPress={() => editarProduto(item)}>
          <Text style={styles.textoBotao}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.botaoExcluir}
        onPress={() => excluirProduto(item.id)}
        >
          <Text style={styles.textoBotao}>Excluir</Text>
        </TouchableOpacity>
        </View>
        </View>
        )}

        // Aparece quando não existem produtos.
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum produto cadastrado.
          </Text>
        }
      />
    </ScrollView>
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
  nomeProduto: {
 fontSize: 20,
 fontWeight: 'bold',
 color: '#1e3a8a',
 marginBottom: 10,
 },

card: {
 backgroundColor: '#ffffff',
 padding: 16,
 borderRadius: 10,
 marginBottom: 15,
 },
 areaBotoes: {
 flexDirection: 'row',
 gap: 10,
 marginTop: 15,
 },
 botaoEditar: {
 flex: 1,
 backgroundColor: '#2563EB',
 padding: 10,
 borderRadius: 8,
 alignItems: 'center',
 },
 botaoExcluir: {
 flex: 1,
 backgroundColor: '#dc2626',
 padding: 10,
 borderRadius: 8,
 alignItems: 'center',
 },
 textoBotao: {
 color: '#ffffff',
 fontWeight: 'bold',
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