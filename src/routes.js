import React from 'react';
import {Route, IndexRoute} from 'react-router';

//import components
import App from './components/App';
import PortfolioPage from './components/portfolio/PortfolioPage';
import ProjectPage from './components/portfolio/ProjectPage';
import BlogPage from './components/blog/BlogPage';
import ArticlePage from './components/blog/ArticlePage';
import Aboutpage from './components/about/Aboutpage';
import NotFoundPage from './components/common/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PortfolioPage} />
    <Route path="/blog" component={BlogPage} />
    <Route path="/articles/:articleId" component={ArticlePage} />
    <Route path="/about" component={Aboutpage} />
    <Route path="/portfolio/:projectId" component={ProjectPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
