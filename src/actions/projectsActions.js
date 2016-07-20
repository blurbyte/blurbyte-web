import * as types from './actionTypes';
import * as paths from '../utilities/apiPaths';

//fetch requests actions
import {fetchRequestError, beginFetchRequest} from './fetchRequestsActions';

import 'whatwg-fetch';

export const loadProjectsSuccess = (projects) => (
  { type: types.LOAD_PROJECTS_SUCCESS, projects }
);

export const loadAllProjects = () => {
  return (dispatch) => {
    //dispatching fetch status actions
    dispatch(beginFetchRequest());
    //fetching data from server
    return fetch(paths.PROJECTS_PATH)
      .then(response => {
        if(response.status >= 200 && response.status < 300) {
          return response.json();
        }
        else {
          const err = new Error(response.statusText);
          err.response = response;
          dispatch(fetchRequestError(err));
          throw err;
        }
      })
      .then(projects => {
        dispatch(loadProjectsSuccess(projects));
      })
      .catch(err => {
        dispatch(fetchRequestError(err));
        console.log('Request failed', err);
      });
  };
};
