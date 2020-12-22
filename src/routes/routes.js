import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Food from '../pages/Food';
import LoginPage from '../pages/LoginPage';

const Stack = createStackNavigator();

const route=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Food} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default route