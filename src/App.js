/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';


//declaring global
let test = 'test';
let isAvaialble = true;

const App = () => {

  //local const cannot be modified
  const testArray = [{name: 'test'}];

  //local variable can be modified 
  let name="test";

  return (
    <View>
      <Text>{test}</Text>
    </View>
  );
};

export default App;
