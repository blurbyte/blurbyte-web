import {expect} from 'chai';
import * as actions from '../actions/scrollActions';
import scrollReducer from './scrollReducer';

describe('Scroll reducer', () => {
  it('should return new scrollTop and scrollHeight', () => {
    const stateBefore = {scrollTop: 0, scrollHeight: 0};
    const action = actions.updateScroll({scrollTop: 100, scrollHeight: 1000});
    const stateAfter = {scrollTop: 100, scrollHeight: 1000};

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(scrollReducer(stateBefore, action)).to.deep.equal(stateAfter);
  });
});
