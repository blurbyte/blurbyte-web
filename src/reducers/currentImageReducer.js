import initialState from './initialState';
import * as types from '../actions/actionTypes';

const currentImageReducer = (state = initialState.currentImage, action) => {
  switch(action.type) {
    case types.SHOW_IMAGE_GALLERY:
      return action.currentImage;
    case types.SHOW_NEXT_IMAGE:
      return action.nextImage;
    case types.HIDE_IMAGE_GALLERY:
    case types.EMPTY_IMAGE_GALLERY:
      return '';
    default:
      return state;
  }
};

export default currentImageReducer;
