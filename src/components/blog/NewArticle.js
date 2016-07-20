import React, {PropTypes} from 'react';
import {Link} from 'react-router';

//components
import Time from '../common/Time';
import {SmallClock} from '../common/Icons';

const NewArticle = ({article}) => (
  <article className="main-content new-article col2 wide9" role="main">
    <header>
      <div className="new-article-info"><span className="new-label">New</span>{<Time date={article.pubdate} />}</div>
      <h1><Link to={`/articles/${article.id}`}>{article.title}</Link></h1>
      <h2>TOPIC {article.topic} • <SmallClock width={22} height={22} />{article.readtime} {article.readtime > 1 ? 'minutes' : 'minute'} {'read'}</h2>
    </header>
    <p><span dangerouslySetInnerHTML={{__html: article.description}} /></p>
  </article>
);

NewArticle.propTypes = {
  article: PropTypes.object.isRequired
};

export default NewArticle;
