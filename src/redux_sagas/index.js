import { delay } from 'redux-saga'
import { call, all } from 'redux-saga/effects'

import { helloWorld, watchIncrement, watchDecrement } from './homeSagas'
import { watchFetchPokemon } from './pokemon.sagas'

export default function* rootSaga() {
    
    yield call(watchFetchPokemon);
    // yield all([
    //     helloWorld,
    //     watchIncrement(),
    //     watchDecrement(),
        
    // ])
}