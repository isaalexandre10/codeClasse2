import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
export default function HomeScreen({ navigation }: any) {
  return (
    // ScrollView permite rolar a tela
    // caso existam muitos botões.
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        CodeClass
      </Text>
      <Text style={styles.subtitulo}>
        Escolha uma area
      </Text>
      {/*
        BOTÃO: Apresentação Quando o usuário clicar, 
        o navigation.navigate procura a rota chamada "Apresentacao".
      */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          navigation.navigate('ComponentesBasicos')
        }
      >
        <Text>
          Apresentacao do CodeClass
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botaoDestaque}
        onPress={() =>
          navigation.navigate('GerenciadorProdutos',1)
        }
      >
        <Text style={styles.textoBranco}>
          Gerenciador de Produtos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          navigation.navigate('CadastroCliente')
        }>
        <Text>
          Cadastro de Cliente
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Cria os estilos utilizados nesta tela.
const styles = StyleSheet.create({
  // Estilo geral da tela.
  container: {
    flex: 1,                    // Faz a tela ocupar todo o espaço disponível.
    backgroundColor: '#f1f5f9', // Define a cor do fundo.
    padding: 20,                // Cria espaço interno nas bordas.
  },
  // Estilo do título "CodeClass".
  titulo: {
    fontSize: 30,            // Tamanho da fonte.
    fontWeight: 'bold',      // Deixa o texto em negrito.
    color: '#1e3a8a',        // Define a cor do texto.
  },
  // Estilo do texto "Escolha uma área".
  subtitulo: {
    fontSize: 16,            // Tamanho da fonte.
    color: '#64748b',        // Cor do texto.
    marginBottom: 20,        // Espaço abaixo do texto.
  },
  // Estilo usado nos botões normais.
  botao: {
    backgroundColor: '#ffffff', // Fundo branco.
    padding: 18,                 // Espaço interno do botão.
    borderRadius: 10,            // Arredonda as bordas.
    marginBottom: 12,            // Espaço entre os botões.
  },
  // Estilo especial do botão
  // "Produtos e Clientes".
  botaoDestaque: {
    backgroundColor: '#4338ca', // Fundo roxo.
    padding: 18,                // Espaço interno.
    borderRadius: 10,           // Bordas arredondadas.
    marginTop: 8,               // Espaço acima do botão.
    marginBottom: 12,            // Espaço entre os botões.
  },
  // Estilo do texto do botão em destaque.
  textoBranco: {
    color: '#ffffff',        // Texto branco.
    fontWeight: 'bold',      // Texto em negrito.
  },
});