import { FETCH_POKEMON, FETCH_SUCCESS, FETCH_FAILED } from '../redux_actions/pokemon/pokemon.types';

const pokemonReducers = (pokemons = [], action) => {
    switch(action.type) {
        case FETCH_SUCCESS:
            return action.receivedPokemons.results;
        case FETCH_FAILED:
            return [];
        default:
            return pokemons;       
    }
}

export default pokemonReducers;