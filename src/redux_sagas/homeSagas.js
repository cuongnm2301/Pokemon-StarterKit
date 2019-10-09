import { INCREMENT, DECREMENT } from '../redux_actions/home/home.types'
//Saga effects
import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export function* helloWorld() {
    console.log('Hello word!')
}

function* increment() {
    console.log('this is increment saga');
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}

function* decrement() {
    console.log('this is decrement saga');
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement)
}