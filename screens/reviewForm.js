import { StyleSheet,  TextInput, View, Text,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/style.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';


const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(4),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
    
    return(
  
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}  //real time error
            />
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title }</Text>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body }</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating }</Text>
            
        <TouchableOpacity
        onPress={props.handleSubmit} >
        <View style={styles.button} >
        <Text style={styles.buttonText}>submit</Text>
        
        </View>
        </TouchableOpacity>
           
          </View>
        )}
      </Formik>
    </View>)
    
        
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