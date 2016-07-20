import * as types from './actionTypes';
import * as paths from '../utilities/apiPaths';

//fetch requests actions
import {fetchRequestError, beginFetchRequest} from './fetchRequestsActions';

import 'whatwg-fetch';

export const loadFoldImagesSuccess = (foldImages) => (
  { type: types.LOAD_FOLD_IMAGES_SUCCESS, foldImages }
);

export const loadAllFoldImages = () => {
  return (dispatch) => {
    //dispatching fetch status actions
    dispatch(beginFetchRequest());
    //fetching data from server
    return fetch(paths.FOLD_IMAGES_PATH)
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
      .then(foldImages => {
        dispatch(loadFoldImagesSuccess(foldImages));
      })
      .catch(err => {
        dispatch(fetchRequestError(err));
        console.log('Request failed', err);
      });
  };
};
