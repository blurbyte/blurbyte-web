import initialState from './initialState';
import * as types from '../actions/actionTypes';

const galleryImagesLoadedReducer = (state = initialState.galleryImagesLoaded, action) => {
  switch(action.type) {
    case types.ALL_IMAGES_LOADED:
      return true;
    case types.EMPTY_IMAGE_GALLERY:
      return false;
    default:
      return state;
  }
};

export default galleryImagesLoadedReducer;
