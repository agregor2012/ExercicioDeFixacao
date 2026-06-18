import { StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity } from 'react-native';

export default function ComponentTouch() {

    return (
        <View style={styles.containerTouch}>

            <TouchableOpacity style={styles.botao} onPress={()=> Alert("Botão Clicado!!!")}>
                <Text style={styles.texto}>Clique Aqui</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    containerTouch: {
        flex: 1,
    },

    botao:{
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10
    },

    texto: {
        color:  '#FFF',
        textAlign: 'center',
        fontSize: 18
    }
})