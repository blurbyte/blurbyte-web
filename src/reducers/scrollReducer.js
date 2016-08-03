import initialState from './initialState';
import * as types from '../actions/actionTypes';

const scrollReducer = (state = initialState.scroll, action) => {
  switch(action.type) {
    case types.UPDATE_SCROLL:
      return Object.assign({}, state, action.scroll);
    default:
      return state;
  }
};

export default scrollReducer;
