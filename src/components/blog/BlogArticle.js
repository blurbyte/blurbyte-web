import React, {PropTypes} from 'react';
import {Link} from 'react-router';

//components
import Time from '../common/Time';
import {SmallClock} from '../common/Icons';

const BlogArticle = ({article}) => (
  <article className="main-content blog-article col2 wide8">
    <h4><Link to={`/articles/${article.id}`}>{article.title}</Link></h4>
    <p><span dangerouslySetInnerHTML={{__html: article.description}} /></p>
    <footer>
      <p>{article.topic} • {<Time date={article.pubdate} mode={'long'} />} • <SmallClock width={20} height={20} />{article.readtime}{'m'}</p>
    </footer>
  </article>
);

BlogArticle.propTypes = {
  article: PropTypes.object.isRequired
};

export default BlogArticle;
