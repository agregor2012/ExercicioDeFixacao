import { StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity } from 'react-native';

export default function ComponentCalculator() {

    return (
        <View style={styles.containerTouch}>

            <View style={styles.containerTouch2}>
                <TouchableOpacity onPress={() => Alert("Botão Clicado!!!")}>

                    <View style={styles.containerNumbers}>

                        
                        <View style={styles.containerPainelInterno}>
                            <Text style={styles.textPainel}>0</Text>
                        </View>


                        <View style={styles.botao}>
                            <Text style={styles.textoZera}>C</Text>
                            <Text style={styles.textoZera}>CE</Text>
                            <Text style={styles.textoOp}>%</Text>
                            <Text style={styles.textoOp}>/</Text>
                        </View>

                        <View style={styles.botao}>
                            <Text style={styles.texto}>7</Text>
                            <Text style={styles.texto}>8</Text>
                            <Text style={styles.texto}>9</Text>
                            <Text style={styles.textoOp}>x</Text>
                        </View>

                        <View style={styles.botao}>
                            <Text style={styles.texto}>4</Text>
                            <Text style={styles.texto}>5</Text>
                            <Text style={styles.texto}>6</Text>
                            <Text style={styles.textoOp}>-</Text>
                        </View>

                        <View style={styles.botao}>
                            <Text style={styles.texto}>1</Text>
                            <Text style={styles.texto}>2</Text>
                            <Text style={styles.texto}>3</Text>
                            <Text style={styles.textoOp}>+</Text>
                        </View>

                        <View style={styles.botao}>
                            <Text style={styles.textoOp}>(  )</Text>
                            <Text style={styles.texto}>0</Text>
                            <Text style={styles.texto}>,</Text>
                            <Text style={styles.textoIgual}>=</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerTouch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerTouch2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: 320,
        height: 480,
        borderRadius: 8,
    },

    containerNumbers: {
        backgroundColor: 'gray',
        width: 300,
        height: 460,
        borderRadius: 8,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
    },



    containerPainelInterno: {
        backgroundColor: 'black',
        padding: 30,
        width: 240,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        marginBottom: 15
    },

    textPainel: {
        color: '#fff',
        textAlign: 'center'
    },

    botao: {
        padding: 2,
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5,
    },

    texto: {
        justifyContent: 'space-evenly',
        backgroundColor: '#007AFF',
        padding: 20,
        width: 60,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
    },

    textoOp: {
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: '#ff9900',
        width: 60,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
    },

    textoZera: {
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: '#ff3c00',
        width: 60,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
    },

    textoIgual: {
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: '#46a52a',
        width: 60,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
    },


})