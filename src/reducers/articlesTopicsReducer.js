import initialState from './initialState';
import * as types from '../actions/actionTypes';

const articlesTopicsReducer = (state = initialState.articlesTopics, action) => {
  switch(action.type) {
    case types.POPULATE_TOPICS_LIST:
      return action.articlesTopics;
    case types.SELECT_FILTER_TOPIC:
      return state.map(
        filter => {
          if(filter.topic !== action.topic) {
            return Object.assign({}, filter, {selected: false});
          }
          else {
            return Object.assign({}, filter, {selected: true});
          }
        }
      );
    default:
      return state;
  }
};

export default articlesTopicsReducer;
