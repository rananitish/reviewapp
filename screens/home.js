import React, { useState } from 'react';
import { View,Text,Modal, StyleSheet, Keyboard,TouchableWithoutFeedback} from 'react-native';
import {globalStyles} from '../styles/style';
import { FlatList, TouchableOpacity,  } from 'react-native-gesture-handler';
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';


export default function Home ({navigation}) { //navigation is take as a object prop
    const[modalOpen,setmodalOpen]=useState(false);



 // const pressHandler=(item)=>{
   //     navigation.navigate('Revieww1',item)
   // }

 
  const[reviews,setReviews]=useState([                       //list of objects
      {title:'Stranger Things',rating:4,body:'cool',key:'1'},
      {title:'13 Reasons Why',rating:3,body:'hot',key:'2'},
      {title:'YJKD',rating:4,body:'sokkhi',key:'3'},
      {title:'College Romance',rating:3,key:'4'}
    
    ])

const addReview=(review)=>{
    review.key=Math.random().toString();
    setReviews((currentReviews)=>{
        return [review,...currentReviews]
    });
    setmodalOpen(false);
}

    return(
        <View style={globalStyles.container}>


        <Modal visible={modalOpen}  animationType='slide'>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>           
        <View  style={styles.modalContent}>
        
        <MaterialIcons 
        name='close'
        size={24}
        style={{...styles.modal,...styles.modalc}}
        onPress={()=>setmodalOpen(false)} 
        />
       
        <ReviewForm  addReview={addReview}/>
       
        </View>
        </TouchableWithoutFeedback>

        

        </Modal>

        <MaterialIcons 
        name='add'
        size={24}
        style={styles.modal}
        onPress={()=>setmodalOpen(true)} 
        />

        <FlatList
        data={reviews}
        renderItem={({item})=>(
            <TouchableOpacity   >
            <Card >
            
             
            
            <Text  onPress={()=>navigation.navigate('Revieww1',item)} style={globalStyles.titleText} >SACHIN{item.title}</Text>
            </Card>
            </TouchableOpacity>
        )}
        />
      

       {/*<Button title='goo' onPress={pressHandler}></Button>*/}


        </View>
    )
}
const styles=StyleSheet.create({
    modal:{
        marginBottom:10,
        borderWidth:1,
        borderColor:"#f2f2f2",
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalc:{
        marginTop:20,
        marginBottom:0,
    },
    modalText:{
        marginTop:50,
        marginLeft:50,
    },
    modalContent:{
        flex:1
    }
})