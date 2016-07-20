import initialState from './initialState';
import * as types from '../actions/actionTypes';

const articlesReducer = (state = initialState.articles, action) => {
  switch(action.type) {
    case types.LOAD_ARTICLES_SUCCESS:
      return action.articles;
    default:
      return state;
  }
};

export default articlesReducer;
