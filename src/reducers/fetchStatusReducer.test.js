import {expect} from 'chai';
import * as actions from '../actions/fetchRequestsActions';
import fetchStatusReducer from './fetchStatusReducer';

describe('Fetch Status reducer', () => {
  it('should increase number of fetch requests in progress by 1 when fetch begins', () => {
    const stateBefore = 0;
    const action = actions.beginFetchRequest();
    const stateAfter  = 1;

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(fetchStatusReducer(stateBefore, action)).to.equal(stateAfter);
  });
  it('should decrease number of fetch requests in progress by 1 when request type ends with success', () => {
    const stateBefore = 2;
    const action = actions.fetchRequestSuccess();
    const stateAfter  = 1;

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(fetchStatusReducer(stateBefore, action)).to.equal(stateAfter);
  });
  it('should decrease number of fetch requests in progress by 1 when request ends with error', () => {
    const stateBefore = 2;
    const action = actions.fetchRequestError('Bad fetch request');
    const stateAfter  = 1;

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(fetchStatusReducer(stateBefore, action)).to.equal(stateAfter);
  });
});
