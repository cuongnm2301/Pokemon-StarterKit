/**
 * @author Cuong Nguyen
 * @email cuongmn2301@gmail.com
 * @create date 2019-10-09 14:40:29
 * @modify date 2019-10-09 14:40:29
 * @desc pokemon sagas
 */

import { INCREMENT, DECREMENT } from '../redux_actions/home/home.types'
import { Api } from './Api'
//Saga effects
import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FETCH_SUCCESS, FETCH_FAILED, FETCH_POKEMON } from '../redux_actions/pokemon/pokemon.types';

function* fetchPokemon() {
    try {
        
        const recivedPokemon = yield Api.getPokemonsFromApi();
        console.log('watch2', recivedPokemon)
        yield put( { type: FETCH_SUCCESS, receivedPokemons: recivedPokemon } );
    } catch (error) {
        yield put( { type: FETCH_FAILED, recivedPokemon: error } );
    }
}

export function* watchFetchPokemon() {
    
    yield takeLatest(FETCH_POKEMON, fetchPokemon)
}

