import initialState from './initialState';
import * as types from '../actions/actionTypes';

const aboutReducer = (state = initialState.about, action) => {
  switch(action.type) {
    case types.LOAD_ABOUT_SUCCESS:
      return action.about;
    default:
      return state;
  }
};

export default aboutReducer;
