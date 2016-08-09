import initialState from './initialState';
import * as types from '../actions/actionTypes';

//lodash
import assign from 'lodash/assign';

const imageGalleryReducer = (state = initialState.imageGallery, action) => {
  switch (action.type) {
    case types.POPULATE_IMAGE_GALLERY:
      return action.images.map(image => assign({}, image, { loaded: false }));
    case types.GALLERY_IMAGE_LOADED:
      return state.map(image => (image.file === action.imageUrl ? assign({}, image, { loaded: true }) : image));
    default:
      return state;
  }
};

export default imageGalleryReducer;
