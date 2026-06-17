import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native-web';




export default function ComponentInput() {

    const [nome, setNome] = useState('');
    function pegaNome(texto) {
       setNome(texto)
    }

    const [input, setInput] = useState('');
    function entrar(){
        setNome(input)
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={(texto) => setInput(texto)} />
            <Button title="entrar" onPress={entrar} />

            {//nome.length < 5 ? null : 
            <Text style={styles.text}>Bem vindo (a) {nome}!</Text>}

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 25,
        padding: 10,
        backgroundColor: 'white'
    },

    text: {
        textAlign: 'center',
        fontSize: 25
    }

});