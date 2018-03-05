import { ORDER_STATUS, USER_STATUS } from '../actionTypes';

export default function(state = {}, action){
    switch(action.type) {
        case ORDER_STATUS:
            return {...state, orders: action.payload}
        case USER_STATUS:
            return {...state, user: action.payload}
        default:
            return state;
    }
}