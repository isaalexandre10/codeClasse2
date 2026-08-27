import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function EstilizacaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aula Estilização</Text>
      <Text style={styles.subtitulo}>Disciplina: Dispositivos Moveis</Text>
      <Text style={styles.descricao}>A programação, também conhecida como codificação ou desenvolvimento de software, desempenha um papel fundamental na sociedade contemporânea. </Text>
      <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  textoBotao:{
    padding: 20,
    fontSize:25,
    fontWeight: 'bold',
  },
   botao:{
    marginTop: 20,
    marginLeft: 20,
    marginRight:20,
    marginBottom: 20,
    backgroundColor: 'green',
    width: 80,
    height: 150,
  },
  container:{
    backgroundColor: '#fffff',
  },
  titulo:{
    color: '#000080',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  subtitulo:{
    fontSize: 20,
    fontWeight: '400',
    textDecorationLine: 'underline',
    color: '#000000',
  },
  descricao:{
    fontSize: 16,
  },
 
  
});