import {expect} from 'chai';
import * as actions from '../actions/imageGalleryActions';
import currentImageReducer from './currentImageReducer';

describe('Image Gallery Visibility reducer', () => {
  it('should return path to currently selected image', () => {
    const stateBefore = '';
    const action = actions.showImageGallery('bladelords-main-menu.jpg');
    const stateAfter = 'bladelords-main-menu.jpg';

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(currentImageReducer(stateBefore, action)).to.equal(stateAfter);
  });
  it('should return path to next image', () => {
    const stateBefore = 'bladelords-main-menu.jpg';
    const action = actions.showNextImage('bladelords-character-select');
    const stateAfter = 'bladelords-character-select';

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(currentImageReducer(stateBefore, action)).to.equal(stateAfter);
  });
  it('should return empty string', () => {
    const stateBefore = 'bladelords-main-menu.jpg';
    const action = actions.hideImageGallery();
    const stateAfter = '';

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(currentImageReducer(stateBefore, action)).to.equal(stateAfter);
  });
});
