import {INCREMENT, DECREMENT} from './home.types.js';

export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step,
    }
}

export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step,
    }
}