import { combineReducers } from 'redux';
import {
  ADD_ONE,
  SUBTRACT_ONE
} from '../actions';

const changeReducer = (state = 0, action) => {
  let num = state;
  switch (action.type) {
    case ADD_ONE:
      num++
      return num;
    case SUBTRACT_ONE:
      num--
      return num;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  change: changeReducer
});

export default rootReducer;
