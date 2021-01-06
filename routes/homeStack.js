import {createStackNavigator, HeaderTitle} from 'react-navigation-stack'; //this is used to create the stack of pages 
//import { createAppContainer } from 'react-navigation'; thats the app container
import Home from '../screens/home';
import Review from '../screens/review';
import Header from '../shared/header';
import React from 'react';
const screens={
    Home:{  //this is object in object name Home
        screen:Home ,                 //screen
        navigationOptions:({navigation})=>{
            return{
                headerTitle:() => <Header navigation={navigation} title ='WebSeries'/>,
                headerStyle:{
                   // backgroundColor:'blue'
                }
            } 
        },
       
       
    },
    Revieww1:{
        screen:Review,
        navigationOptions:{
            title:'Review',
            headerStyle:{
                backgroundColor:'yellow'
            }
        }
    }
}
const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor:"#444",
       
    }
}
    
    )

export default HomeStack;