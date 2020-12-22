import  React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


const CustomButton = ({label,onPressed}) => {
  return (
    <View style={{alignItems:'center',justifyContent:'center',height:50,backgroundColor:'red'}}>
      <TouchableOpacity onPress={()=>onPressed()}>
        <Text style={{color:'white'}}>{label}</Text>
      </TouchableOpacity>
    </View>
  );

}

export default CustomButton