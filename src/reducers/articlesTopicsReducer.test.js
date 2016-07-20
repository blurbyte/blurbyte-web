import {expect} from 'chai';
import * as actions from '../actions/articlesFilterActions';
import articlesTopicsReducer from './articlesTopicsReducer';

describe('Articles Topic reducer', () => {
  it('should return list of articles topics', () => {
    const stateBefore = [];
    const action = actions.populateTopicsList([{topic: 'All', selected: true}, {topic: 'JavaScript', selected: false}, {topic: 'Design', selected: false}]);
    const stateAfter = [{topic: 'All', selected: true}, {topic: 'JavaScript', selected: false}, {topic: 'Design', selected: false}];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(articlesTopicsReducer(stateBefore, action)).to.deep.equal(stateAfter);
  });
  it('should return updated list of topics', () => {
    const stateBefore = [{topic: 'All', selected: true}, {topic: 'JavaScript', selected: false}, {topic: 'Design', selected: false}];
    const action = actions.selectFilterTopic('JavaScript');
    const stateAfter = [{topic: 'All', selected: false}, {topic: 'JavaScript', selected: true}, {topic: 'Design', selected: false}];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(articlesTopicsReducer(stateBefore, action)).to.deep.equal(stateAfter);
  });
});
