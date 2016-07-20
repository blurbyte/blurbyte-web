import * as types from '../actions/actionTypes';
import initialState from  './initialState';

const actionTypeEndsInSuccess = (type) => (
  type.substring(type.length - 8) === '_SUCCESS'
);

const fetchStatusReducer = (state = initialState.fetchRequestsInProgress, action) => {
  if(action.type === types.BEGIN_FETCH_REQUEST) {
    return state + 1;
  }
  else if(action.type === types.FETCH_REQUEST_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state -1;
  }
  return state;
};

export default fetchStatusReducer;
