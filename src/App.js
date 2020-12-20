import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import India from './component/India';
import Taste from './component/Taste';

class App extends React.Component {
  constructor(props) {
    super(props);

    //creating state
    this.state = {
      country: 'INDIA',
      sour: '96% people loves it',
      sweet:'4% people likes it'
    };
  }

  pressed = () => {
    this.setState({country:'USA', sour:'30% people loves it', sweet:'70% people likes it'});
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <India country={this.state.country} sour={this.state.sour} sweet={this.state.sweet} />
          <Taste onPress={this.pressed} label={'Click for other countries'} />
        </View>
      </SafeAreaView>
    );
  }
}
  
  

export default App