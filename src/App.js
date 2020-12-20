import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import UserInfo from './component/UserInfo';
import CustomButton from './component/CustomButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    //creating state
    this.state = {
      name: 'Alpha',
      age: 30,
    };
  }

  pressed = () => {
    this.setState({name: 'Beta'});
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <UserInfo name={this.state.name} age={this.state.age} />
          <CustomButton onPress={this.pressed} label={'Done'} />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
