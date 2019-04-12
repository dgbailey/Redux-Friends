import { combineReducers } from 'redux';
import loginR  from '../reducers/loginreducer';
import getData from '../reducers/getdata';

export default combineReducers({
  loginR,
  getData

});