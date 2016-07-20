import React, {PropTypes} from 'react';
import BlogArticle from './BlogArticle';
import CSSTransitionGroup from 'react-addons-css-transition-group';

//lodash
import filter from 'lodash/filter';

const ArticlesList = ({articles, topic}) => {
  let filteredArticles = articles;
  if(topic !== 'All') {
    filteredArticles = filter(filteredArticles, { topic: topic });
  }

  return (
    <CSSTransitionGroup component="div" className="articles-list-container" transitionName="filter-articles" transitionEnterTimeout={700} transitionLeaveTimeout={500}>
      {filteredArticles.map((article, index) => <BlogArticle key={index} article={article} />)}
    </CSSTransitionGroup>
  );
};

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  topic: PropTypes.string.isRequired
};

export default ArticlesList;
