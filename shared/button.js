import React from 'react';

import { StyleSheet, TouchableOpacity ,Text ,View } from 'react-native'


export default function FlatButton({text}) {
    return(       
        
        <TouchableOpacity >
        <View style={styles.button} >
        <Text style={styles.buttonText}>{ text }</Text>
        
        </View>
        </TouchableOpacity>
         
  

    )
    
}
const styles = StyleSheet.create({
    button:{
        borderRadius:10,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#f01d71'

    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center'
    }
})