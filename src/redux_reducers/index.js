import { combineReducers } from 'redux';
import homeReducers from './home.reducers';
import pokemonReducers from './pokemon.reducers'

const allReducers = combineReducers({
    homeReducers,
    pokemonReducers
});

export default allReducers;
