import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ComponentesBasicos from '../screens/ComponentesBasicos';
import EstilizacaoScreen from '../screens/EstilizacaoScreen';
import GerenciadorProdutosScreen from '../screens/GerenciadorProdutosScreen';
import CadastroCliente from '../screens/CadastroClienteScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (

    // Envolve toda a navegação do aplicativo.
    <NavigationContainer>
      {/* Cria a pilha de telas. */}
      <Stack.Navigator>
        <Stack.Screen
          name="TelaPrincipal"
          component={HomeScreen}
        />
        <Stack.Screen
            name="ComponentesBasicos"
            component={ComponentesBasicos}
        />
        <Stack.Screen
            name="EstilizacaoScreen"
            component={EstilizacaoScreen}
        />
        <Stack.Screen
            name="GerenciadorProdutos"
            component={GerenciadorProdutosScreen}
        />
        <Stack.Screen
          name="CadastroCliente"
          component={CadastroCliente}
          />
      </Stack.Navigator>

    </NavigationContainer>
  );
}