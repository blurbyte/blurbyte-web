import * as types from './actionTypes';

export const populateTopicsList = (articlesTopics) => (
  {type: types.POPULATE_TOPICS_LIST, articlesTopics }
);

export const selectFilterTopic = (topic) => (
  { type: types.SELECT_FILTER_TOPIC, topic }
);
