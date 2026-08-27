import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
const nome = 'Isa';
function mostrarMensagem() { 
  alert('Bem-vindo ao aplicativo!'); 
}
export default
 function ComponentesBasicos(){
    return(
        <View>
            <Text>Ola Mundo!</Text>
         () => 
            <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
            <View> 
                <Text>Button</Text> 
                <Button title="Clique aqui" onPress={alert('Botão pressionado!')} /> 
                <Button title='Ok' onPress={mostrarMensagem} />           
            </View> 
            <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
            <View>
                <Text>TouchableOpacity</Text>
                <TouchableOpacity onPress={() => alert('TouchableOpacity pressionado!')} > 
                <Text>Clique aqui</Text> 
                </TouchableOpacity>
            </View>
            <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
            <View>
                <Text>TouchableOpacity</Text>
                <TouchableOpacity onPress={mostrarMensagem} > 
                <Text>Ok</Text> 
                </TouchableOpacity>
            </View>
            <Text>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</Text>
        <View>
            <TouchableOpacity onPress={() => alert('Imagem pressionada!')} > 
            <Image source={{ uri:'https://reactnative.dev/img/tiny_logo.png' }}  style={{ width: 100, height: 100 }} /> 
            <Text>Clique na imagem</Text>
            </TouchableOpacity> 
        </View>
        </View>
    );
}