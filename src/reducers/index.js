import { combineReducers } from 'redux';
import rates from './rateReducer';

export default combineReducers({
    rates: rates
});