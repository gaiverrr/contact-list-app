import {combineReducers} from 'redux';
import сontactsReducer from './reducer_contacts';

const rootReducer = combineReducers({
  contacts: сontactsReducer
});

export default rootReducer;