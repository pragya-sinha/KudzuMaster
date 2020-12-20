import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Taste = (props) => {
  return (
    <View style={styles.backgroundColor}>
      <TouchableOpacity onPress={() => props.onPress()}>
        
        <Text style={styles.textStyle}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'cyan',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    margin: 40,
  },
  textStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Taste
