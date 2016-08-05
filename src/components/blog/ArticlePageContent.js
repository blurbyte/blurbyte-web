import React, {PropTypes} from 'react';

//common components
import SideLogo from '../common/SideLogo';
import BackTop from '../common/BackTop';
import PageContent from '../common/PageContent';
import Image from '../common/Image';
import Time from '../common/Time';

//icons
import {SmallClock} from '../common/Icons';

//cdn paths
import * as paths from '../../utilities/cdnPaths';

const ArticlePageContent = ({article, path}) => (
  <div className="bgr-wrapper no-header">
    <div className="wrapper">
      <SideLogo hasHeader={false} />
      <article className="main-content full-article col2 wide9">
        <header>
          <div className="full-article-info"><Time date={article.pubdate} /></div>
          <h1><span>{article.title}</span></h1>
          <h2>TOPIC {article.topic}  • <SmallClock width={22} height={22} />{article.readtime} {article.readtime > 1 ? 'minutes' : 'minute'} {'read'}</h2>
        </header>
        {article.foldImage && <Image url={paths.ARTICLES_PATH + article.foldImage.file} alt={article.foldImage.alt} />}
        <PageContent content={article.content} path={path}/>
      </article>
      <BackTop />
    </div>
  </div>
);

ArticlePageContent.propTypes = {
  article: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

export default ArticlePageContent;
