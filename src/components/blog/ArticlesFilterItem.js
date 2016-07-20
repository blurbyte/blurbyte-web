import React, {PropTypes} from 'react';

const ArticlesFilterItem = ({label, onUpdateTopics}) => {
  const selected = label.selected ? 'selected' : '';
  return (
    <div className={`articles-filter-item ${selected}`} ><a onClick={(e) => onUpdateTopics(e, label.topic)} href="#">{label.topic}</a></div>
  );
};

ArticlesFilterItem.propTypes = {
  label: PropTypes.object.isRequired,
  onUpdateTopics: PropTypes.func.isRequired
};

export default ArticlesFilterItem;
