import { useState } from "react";
import { TouchableOpacity, View, TextInput, Text, StyleSheet } from "react-native"

export default function CadastroClienteScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
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
    const formularioValido =
        nome.trim() !== '' &&
        email.trim() !== '' &&
        email.includes('@');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro Cliente</Text>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={[styles.input, erroNome !== '' && styles.inputErro]}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
                onBlur={validarNome}
            />
            {erroNome !== '' && (
                <Text style={styles.erro}>
                    {erroNome}
                </Text>
            )}
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={[styles.input, erroEmail !== '' && styles.inputErro]}
                placeholder="exemplo@email.com"
                value={email}
                onChangeText={setEmail}
                onBlur={validarEmail}
                maxLength={6}
            />
            {erroEmail !== '' && (
                <Text style={styles.erro}>
                    {erroEmail}
                </Text>
            )}
            <TouchableOpacity style={[styles.botao, !formularioValido && styles.botaoDesabilitado]} 
                disabled={!formularioValido}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
 },
 titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
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
    marginBottom: 10,
 },
 inputErro: {
    borderColor: 'red',
    borderWidth: 2,
 },
 erro: {
    color: 'red',
    marginTop: 4,
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
    backgroundColor: '#A0A0A0', // Cor cinza para indicar que está desativado
    opacity: 0.7,
 },
 textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
 },
});
