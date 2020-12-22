import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Food = ({foodName ,onPressed}) => {
  return (
      <View>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../asset/1.jpg')} />
      <Text style={styles.paragraph}>{foodName}</Text>
      <TouchableOpacity onPressed={()=>onPressed(foodName)}>
        <Text>Select</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../asset/2.jpg')} />
    <Text style={styles.paragraph}>{foodName}</Text>
    <TouchableOpacity onPressed={()=>onPressed(foodName)}>
      <Text>Select</Text>
    </TouchableOpacity>
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 70,
    width: 70,
  },
});

export default Food