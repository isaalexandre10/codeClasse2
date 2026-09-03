import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import EstilizacaoScreen from './src/screens/EstilizacaoScreen';
import GerenciadorProdutosScreen from './src/screens/GerenciadorProdutosScreen';

export default function App() {
  return (
    <View>
      <GerenciadorProdutosScreen />
    </View>
  
  );
}

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/