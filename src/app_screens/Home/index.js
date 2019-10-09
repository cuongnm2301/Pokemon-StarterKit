import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

//import action
import { increaseAction } from '../../redux_actions/home/home.actions'
import { decreaseAction } from '../../redux_actions/home/home.actions'


//import pokemon action
import { fetchPokemonAction, fetchSuccessAction, fecthFailedAction } from '../../redux_actions/pokemon/pokemon.actions'

const data = [1,1,1,1,1]


class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroudColor: 'red' }}>
        {/* <Text style={{margin: 20, fontWeight: 'bold', color: 'forestgreen', fontSize: 20}}>Home screen!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <View style={{height: 50, margin: 10, flexDirection: 'row'}}>
          <Button style={{height: 10, width: 20, backgroudColor: 'lightblue', padding: 10,}} title="+" onPress={() => {
            this.props.onIncrement(1)
          }} />
          <Button style={{height: 10, width: 20, backgroudColor: 'lightblue', padding: 10,}} title="-" onPress={() => {
            this.props.onDecrement(1)
          }} />
        </View>
        <Text style={{ margin: 10, fontWeight: 'bold', color: 'darkblue', fontSize: 17 }}>
          Count: {this.props.times}
        </Text> */}
        <Text style={{margin: 20, fontWeight: 'bold', color: 'forestgreen', fontSize: 20}}>Pokemon list</Text>
        <View style={{height: 'auto', margin: 10, flexDirection: 'row'}}>
          <Button style={{backgroudColor: 'lightblue'}} title="Fetch Pokemon" onPress={() => {
            this.props.onFetchPokemon(20)
          }} />
        </View>
        <View style={{backgroudColor: 'green', width: '100%', height: 20}}></View>
        <FlatList
          data={data}
          //keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => 
          <View style={{backgroudColor: 'blue', padding: 10}}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: 'red',
            }}>asdsad</Text>
          </View> }
          />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    times: state.homeReducers ? state.homeReducers : 0,
    pokemons: state.pokemonReducers
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (step) => {
      dispatch(increaseAction(step));
    },
    onDecrement: (step) => {
      dispatch(decreaseAction(step));
    },
    onFetchPokemon: (limit) => {
      dispatch(fetchPokemonAction(limit));
    }
  }
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeContainer;
