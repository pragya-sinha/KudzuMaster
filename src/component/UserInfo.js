import React from 'react';
import {View, Text} from 'react-native';

const UserInfo = ({name, age}) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};

export default UserInfo;
