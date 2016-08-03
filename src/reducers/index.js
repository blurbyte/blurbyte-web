import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import foldImages from './foldImagesReducer';
import imageGallery from './imageGalleryReducer';
import currentImage from './currentImageReducer';
import projects from './projectsReducer';
import articles from './articlesReducer';
import articlesTopics from './articlesTopicsReducer';
import about from './aboutReducer';
import fetchRequestsInProgress from './fetchStatusReducer';
import galleryImagesLoaded from './galleryImagesLoadedReducer';
import scroll from './scrollReducer';

const rootReducer = combineReducers({
  foldImages, imageGallery, currentImage, galleryImagesLoaded, projects, articles, articlesTopics, about, scroll, fetchRequestsInProgress, routing: routerReducer
});

export default rootReducer;
