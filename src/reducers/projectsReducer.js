import initialState from './initialState';
import * as types from '../actions/actionTypes';

const projectsReducer = (state = initialState.projects, action) => {
  switch(action.type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
