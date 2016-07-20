import * as types from './actionTypes';
import * as paths from '../utilities/apiPaths';

//fetch requests actions
import {fetchRequestError, beginFetchRequest} from './fetchRequestsActions';

import 'whatwg-fetch';

export const loadAboutSuccess = (about) => (
  { type: types.LOAD_ABOUT_SUCCESS, about }
);

export const loadAboutContent = () => {
  return (dispatch) => {
    //dispatching fetch status actions
    dispatch(beginFetchRequest());
    //fetching data from server
    return fetch(paths.ABOUT_PATH)
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
      .then(about => {
        dispatch(loadAboutSuccess(about));
      })
      .catch(err => {
        dispatch(fetchRequestError(err));
        console.log('Request failed', err);
      });
  };
};
