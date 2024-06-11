import React, {Component} from "react" //import dos componentes
import {StylesSheet, View, Text} from "react-native" //import do css, view e text

import moment from "moment"
import 'moment/locale/pt-br'

import today_Image from "../../assets/imgs/today.jpg"

// cria uma classe padrão que será usada em outras partes do programa
export default class TaskList extends Component{ // tem todas as características de um componente (herança)
    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <View style ={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <View style = {styles.titleBar}>
                        <Text style = {styles.title}>Hoje</Text>
                        <Text style = {styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>Lista de tarefas</Text>
                </View>
            </View>
        )
    }
} 

//esquema de css
const styles = StylesSheet.create({ //variável q guarda os estilos
    container: {
        flex: 1
    },
    backgroud:{
        flex: 3
    },
    taskList:{
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30
    }

})