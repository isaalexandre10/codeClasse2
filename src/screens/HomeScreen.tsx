import { Text, View } from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/globalStyles'
export default function HomeScreen() {
  return (
    <View>
        <Header />
      <Text style = {{fontSize: globalStyles.title.fontSize, fontWeight: globalStyles.title.fontWeight}}>CodeClass</Text>
      <Text>Biblioteca virtual de aulas de programação.</Text>
    </View>
  );
}