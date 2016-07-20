import map from 'lodash/map';
import filter from 'lodash/filter';

export const getAllImagesForGallery = (page, path) => {
  const images = map(filter(page.content, { type: 'image' }), image => ({ file: path + image.file, alt: image.alt }));
  return images;
};

export const getFoldImageForGallery = (image, path) => {
  const galleryImage = { file: path + image.file, alt: image.alt };
  return [galleryImage];
};
