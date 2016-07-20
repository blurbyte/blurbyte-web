import React, {PropTypes} from 'react';

//common components
import Header from '../common/Header.js';
import SideLogo from '../common/SideLogo';
import FoldImage from '../common/FoldImage';
import BackTop from '../common/BackTop';
//articles components
import NewArticle from './NewArticle';
import FilterableArticlesList from './FilterableArticlesList';

//cdn paths
import * as paths from '../../utilities/cdnPaths';

const BlogPageContent = ({foldImage, articles}) => {
  let [newestArticle, ...olderArticles] = articles;
  return(
    <div className="bgr-wrapper">
      <div className="wrapper">
        <Header />
        <SideLogo />
        {foldImage && <FoldImage url={paths.ARTICLES_PATH + foldImage.file} alt={foldImage.alt} description={foldImage.description} />}
        <NewArticle article={newestArticle} />
        <FilterableArticlesList articles={olderArticles} />
        <BackTop />
      </div>
    </div>
  );
};

BlogPageContent.propTypes = {
  foldImage: PropTypes.object,
  articles: PropTypes.array.isRequired
};

export default BlogPageContent;
