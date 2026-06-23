import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity } from 'react-native';

export default function ComponentCalculator() {

    const [numero, setNumero] = useState('');

    function calcular() {
        try {
            let novoNumero = eval(numero);
            String(novoNumero)

            setNumero(novoNumero)
        } catch {
            setNumero('Erro');
        }
    }

    function remover() {
        let stringSalva = String(numero)
        stringSalva = stringSalva.slice(0, stringSalva.length - 1)
        setNumero(stringSalva)
    }

    function adicionar(digito) {
        if (numero == 'Erro') {
            setNumero('')
        }
        else { if (numero.length > 21) { alert("Operação muito grande, use C/CE para prosseguir!") } else { setNumero(numero + digito) } }
    }

    return (
        <View style={styles.containerTouch}>

            <View style={styles.containerTouch2}>


                <View style={styles.containerNumbers}>


                    <View style={styles.containerPainelInterno}>
                        <Text style={styles.textPainel}>{numero || 0}</Text>
                    </View>



                    <View style={styles.botao}>

                        <TouchableOpacity>
                            <Text style={styles.textoDel} onPress={() => setNumero('')}>C</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.textoDel} onPress={() => { if (numero == 'Erro') { setNumero('') } else { remover() } }}>CE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('%')}>%</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.textoOperator} onPress={() => adicionar('/')}>/</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.botao}>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('7')}>7</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('8')}>8</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('9')}>9</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.textoOperator} onPress={() => adicionar('*')}>x</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.botao}>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('4')}>4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('5')}>5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('6')}>6</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.textoOperator} onPress={() => adicionar('-')}>-</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.botao}>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('1')}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('2')}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('3')}>3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.textoOperator} onPress={() => adicionar('+')}>+</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.botao}>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => alert("⚠️O Botão quebrou!!!⚠️")}>⛓️‍💥</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('0')}>0</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.texto} onPress={() => adicionar('.')}>.</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.textoIgual} onPress={calcular}>=</Text>
                        </TouchableOpacity>

                    </View>


                </View>
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
        width: 300,
        height: 470,
        borderRadius: 12,
        paddingRight: 30,
        paddingBottom: 25
    },

    containerNumbers: {
        backgroundColor: 'gray',
        width: 300,
        height: 460,
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
    },



    containerPainelInterno: {
        backgroundColor: 'black',
        padding: 30,
        width: 240,
        borderRadius: 12,
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
        backgroundColor: '#464d55',
        padding: 20,
        width: 60,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        borderRadius: 30,
        color: "white"
    },

    textoDel: {
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: '#464d55',
        width: 60,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        borderRadius: 30,
        color: '#ff1e00',
        fontStyle: 'italic',
        fontWeight: '500'
    },

    textoOperator: {
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: '#56595e',
        width: 60,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        borderRadius: 30,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: '500'
    },

    textoIgual: {
        justifyContent: 'space-evenly',
        padding: 20,
        backgroundColor: '#30b9b9',
        width: 60,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        borderRadius: 30,
        color: 'white',
        fontWeight: '500'
    },


})