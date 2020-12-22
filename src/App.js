import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Food from '../src/Food';
import CustomButton from '../src/CustomButton';
import Route from './routes/routes';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };

    this.foodSelected = [];
  }

  renderFood() {
    const foodList = [
      { name: 'Veg Noodles' },
      { name: 'Paneer Chili' },
    ];

    return (
      <View>
          <FlatList
            data={foodList}
            renderItem={({ item }) => (
              <Food
                foodName={item.name}
                onPressed={() => this.foodSelected.add({ name: 'test' })}
              />
            )}
          />
        <CustomButton
          label="Order"
          onPressed={() => this.setState({ selected: true })}
        />
      </View>
    );
  }
  render(){
    return(
     <Route />
    )
 }

 
  render() {
    const orderConfirmation = (
      <View>
        <Text style={{colour:"green", alignItems:"center"}}>Order Confirmed </Text>
        <FlatList data={this.foodSelected}
        />
      </View>
    );

    const uiToRender = this.state.selected
      ? orderConfirmation
      : this.renderFood();

    return <View style={styles.container}>{uiToRender}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;