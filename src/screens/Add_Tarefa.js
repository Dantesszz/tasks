import React, {Component} from "react";
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal //recurso de tela sobreposta; uma tela em cima da outra
} from "react-native"

export default class Add_Tarefa extends Component{
    render(){
        return(
            <Modal
                trasparent={true}
                visible={true}
                animationType="slide"
            >
                <TouchableWithoutFeedback>
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
                <View style={styles.principal}>
                    <Text>Nova Tarefa</Text>
                    <TextInput/>
                </View>
                <TouchableWithoutFeedback>
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
                <Text>Nova Tarefa</Text>
                <TextInput
                    placeholder="Descrição da tarefa"
                />
                <View>
                    <TouchableOpacity>
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <TouchableWithoutFeedback>
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    principal:{
        flex:1,
        backgroundColor: '#FFF'
    },
    cabecalho:{
        backgroundColor: "#B13B44",
        color: '#FFF',
        textAlign: 'center',
        padding: 20,
        fontSize: 25
    }
})