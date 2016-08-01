/*eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

//router
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';

//import styles
import './styles/styles.css';

//store
import configureStore from './store/configureStore';

//mock data
//import foldImages from './mockData/foldImages';
//import projects from './mockData/projects';
//import articles from './mockData/articles';
//import about from './mockData/about';

//es6 promises polyfill
require('es6-promise').polyfill();

//setting up inintial data
//setting initial list of articles topics
let articlesTopics = [{ topic: 'All', selected: true }];

const defaultState = {
  articlesTopics
};

//in browser console use $r.store.getState() when Provider selected in ReactDevTools

const store = configureStore(defaultState);
const history = syncHistoryWithStore(browserHistory, store);

//Changing scroll position to top after each route update

render(
  <Provider store={store}>
    <Router history={history} routes={routes} onUpdate={() => document.querySelector('.app-scroll-wrapper').scrollTop = 0} />
  </Provider>,
  document.getElementById('app')
);
