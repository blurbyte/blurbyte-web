import initialState from './initialState';
import * as types from '../actions/actionTypes';

const foldImagesReducer = (state = initialState.foldImages, action) => {
  switch(action.type) {
    case types.LOAD_FOLD_IMAGES_SUCCESS:
      return action.foldImages;
    default:
      return state;
  }
};

export default foldImagesReducer;
