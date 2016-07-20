import {expect} from 'chai';
import * as actions from '../actions/imageGalleryActions';
import imageGalleryReducer from './imageGalleryReducer';

describe('Image Gallery reducer', () => {
  it('should return gallery populated by new images', () => {
    const stateBefore = [{ file: 'bladelords-main-menu.jpg', alt: 'somealt' }, { file: 'bladelords-character-select.jpg', alt: 'somealt' }, { file: 'bladelords-level-up-popup.jpg', alt: 'somealt' }];
    const action = actions.populateImageGallery([{ file: 'watchtower-sunset', alt: 'somealt' }, { file: 'watchtower-closeup', alt: 'somealt' }]);
    const stateAfter = [{ file: 'watchtower-sunset', alt: 'somealt', loaded: false }, { file: 'watchtower-closeup', alt: 'somealt', loaded: false }];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(imageGalleryReducer(stateBefore, action)).to.deep.equal(stateAfter);
  });
  it('should change loaded flag when image got loaded', () => {
    const stateBefore = [{ file: 'watchtower-sunset', alt: 'somealt', loaded: false }, { file: 'watchtower-closeup', alt: 'somealt', loaded: false }];
    const action = actions.galleryImageLoaded('watchtower-closeup');
    const stateAfter = [{ file: 'watchtower-sunset', alt: 'somealt', loaded: false }, { file: 'watchtower-closeup', alt: 'somealt', loaded: true }];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(imageGalleryReducer(stateBefore, action)).to.deep.equal(stateAfter);
  });
});
