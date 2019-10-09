import {INCREMENT, DECREMENT} from '../redux_actions/home/home.types';

const homeReducers = (times = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return times + action.step;
        case DECREMENT:
            return times - action.step;
        default:
            return times;       
    }
}

export default homeReducers;