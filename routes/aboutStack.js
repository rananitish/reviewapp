import {createStackNavigator} from 'react-navigation-stack'; //this is used to create the stack of pages 


import About from '../screens/about'
import Header from '../shared/header';
import React from 'react';

const aboutNavigator={
    AboutDetails:{  //this is object in object name Home
        screen:About ,                 //screen
       navigationOptions:({navigation})=>{
        return{
            headerTitle:() => <Header navigation={navigation} title='About ' />,
            headerStyle:{
               // backgroundColor:'green'
            }
        } 
    }
    },
    
}
const aboutStack=createStackNavigator(aboutNavigator,{
    defaultNavigationOptions: {
        headerTintColor:"#444",
       
    }
}
    
    )

    export default aboutStack;

