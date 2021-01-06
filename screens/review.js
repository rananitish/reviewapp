import React, { Component } from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import {globalStyles,images} from '../styles/style';
import Card from '../shared/card';

export default function Review ({navigation}) { //navigation =props , props.navigation
  //  const pressHeandler=()=>{
    //    navigation.goBack()
   // h }
   const rating=navigation.getParam('rating');
    return(
        <View style={globalStyles.container}>
        <Card>
       <Text>Title: {navigation.getParam('title')}</Text>
       
       <View style={style.rating}>
         <Text>Rating:{navigation.getParam('rating')}</Text>
         <Image source={images.ratings[rating]}></Image>
         </View>
       </Card>
     {/*  <Button title='go back to home' onPress={pressHeandler}></Button>*/}
        </View>
    )
    
    
}
const style = StyleSheet.create({
  rating:{
   fontSize:18,
   color:'blue'
  },
}
)
