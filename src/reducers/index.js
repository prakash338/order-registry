import {combineReducers} from 'redux';
import ordersReducer from './ordersReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    orders: ordersReducer,
    user: userReducer,
    loading: loadingReducer
});

export default rootReducer;