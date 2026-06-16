import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function ComponentButton() {

    const [valor, setValor] = useState(0)
    return (
        <View style={styles.container}>

            <View style={styles.texto}>
                <Text>Você Clicou {valor} vezes</Text>
            </View>

            <View style={styles.buttons}>
                <Button title="Aumentar" onPress={() => setValor(valor + 1)} />
                <Button title="Diminuir" onPress={() => setValor(valor - 1)} />
                <Button title="Zerar" onPress={() => setValor(0)} />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    buttons: {
        flex: 1,
        flexDirection: "row",
        gap: 20,
         padding: 20
    },

    texto: {
        alignItems: "center",
        height: 100,
        justifyContent: "center",
        backgroundColor: "gray",
        borderRadius: 20
    },

    container: {
        padding: 20
    }
});