import React from 'react'
import { StyleSheet,View    } from 'react-native';
export default function Card(props){
    return(
        <View style={style.card}>
        <View style ={style.cardContent}>
        {props.children}
        </View>
        </View>
    )
}
const style =StyleSheet.create({
    card:{
        borderRadius:10,
        elevation:8,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:7,

    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:20

    }
})