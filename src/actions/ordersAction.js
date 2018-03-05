import {GET_ORDERS, ORDER_STATUS} from '../actionTypes';
import {database} from '../firebase';

export function getOrders(){
    return dispatch => {

        dispatch({
            type: ORDER_STATUS,
            payload: true
        });

        database.on('value', (snapshot) => {

            dispatch({
                type: GET_ORDERS,
                payload: snapshot.val()
            });

            dispatch({
                type: ORDER_STATUS,
                payload: false
            });
        }, () => {
            dispatch({
                type: ORDER_STATUS,
                payload: -1
            });
        });
    }
}

export function saveOrder(order) {
    return dispatch => database.push(order);
}

export function deleteOrder(id){
    return dispatch => database.child(id).remove();
}