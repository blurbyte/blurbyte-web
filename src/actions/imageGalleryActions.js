import * as types from './actionTypes';

export const populateImageGallery = (images) => (
  { type: types.POPULATE_IMAGE_GALLERY, images }
);

export const showImageGallery = (currentImage) => (
  { type: types.SHOW_IMAGE_GALLERY, currentImage }
);

export const hideImageGallery = () => (
  { type: types.HIDE_IMAGE_GALLERY }
);

export const showNextImage = (nextImage) => (
  { type: types.SHOW_NEXT_IMAGE, nextImage }
);

export const galleryImageLoaded = (imageUrl) => (
  { type: types.GALLERY_IMAGE_LOADED, imageUrl }
);

export const allImagesLoaded = () => (
  { type: types.ALL_IMAGES_LOADED }
);

export const emptyImageGallery = () => (
  { type: types.EMPTY_IMAGE_GALLERY }
);

//delaying next image to prevent click spam
export const showNextImageWithTimeout = (nextImage, timeout = 400) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(showNextImage(nextImage));
    }, timeout);
  };
};
