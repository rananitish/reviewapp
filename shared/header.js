import React from 'react';
import { StyleSheet,Text,View,Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({navigation,title}) {
const openMenu=()=>{
    navigation.openDrawer();
}

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
        {/* icon for the menu */}
        <MaterialIcons name='menu' size={28}  onPress={openMenu} style={styles.icon} />
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
             <Text style={styles.headerText}>{title}</Text> 

        
        </ImageBackground>
    )
    
}
const styles=StyleSheet.create({
    header:{
        
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
        flex:1
       
    },
    headerText:{
        
        fontWeight:'bold',
        fontSize:20,
        color:'brown',
        letterSpacing:1
    },
    icon:{
        position:'absolute',
        left:16,
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10
    }
})
