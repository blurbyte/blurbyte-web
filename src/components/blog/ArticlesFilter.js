import React, {PropTypes} from 'react';

//import components
import ArticlesFilterItem from './ArticlesFilterItem';

const ArticlesFilter = ({topics, onUpdateTopics}) => {
  return (
    <section className="main-content articles-filter col2 wide8">
      <h2>Filter articles by topic</h2>
      <div className="articles-filter-container">
      {topics.map((topic, index) => <ArticlesFilterItem key={index} label={topic} onUpdateTopics={onUpdateTopics} />)}
      </div>
    </section>
  );
};

ArticlesFilter.propTypes = {
  topics: PropTypes.array.isRequired,
  onUpdateTopics: PropTypes.func.isRequired
};

export default ArticlesFilter;
