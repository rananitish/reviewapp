
import React,{useState} from 'react';
import { StyleSheet   } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/drawer';



const getFonts=()=>{
 return Font.loadAsync({  
   'nunito-regular':require('./assets/Font/Nunito-Regular.ttf'),
   'nunito-bold':require('./assets/Font/Nunito-Bold.ttf')
 })
};

//we install ,npm install react-native,{-stack}, reactexpo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view-navigation,,npm install react-navigation-drawer


export default function App() {
  const[FontsLoaded,setFontsLoaded]= useState(false);
if (FontsLoaded){
  return(
  <Navigator />
  );
}
else{
  return(
  <AppLoading 
  startAsync={getFonts}
  onFinish={()=>setFontsLoaded(true)}
  />)
}

}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row'
  },
});
