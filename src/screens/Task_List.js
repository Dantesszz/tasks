import React, {Component} from "react" //import dos componentes
import {StylesSheet, View, Text} from "react-native" //import do css, view e text

import today_Image from "../../assets/imgs/today.jpg"

// cria uma classe padrão que será usada em outras partes do programa
export default class TaskList extends Component{ // tem todas as características de um componente (herança)
    render(){
        return(
            <View style ={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    
                </ImageBackground>
                <View style={styles.taskList}>

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
    }

})