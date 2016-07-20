import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//components
import ArticlePageContent from './ArticlePageContent';

//actions
import * as imageGalleryActions from '../../actions/imageGalleryActions';
import * as articlesActions from '../../actions/articlesActions';

//lodash
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

//cdn paths
import * as paths from '../../utilities/cdnPaths';

//getAllImagesForGallery select function
import {getAllImagesForGallery} from '../../utilities/getImagesForGallery';


class ArticlePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    let {articles} = this.props;

    //loading articles if they dont't exist
    if (isEmpty(articles)) {
      this.props.actions.loadAllArticles()
        .then(() => {
          //populateing image gallery
          this.populateGallery(this.props.articles, this.props.articleId);
        })
        .catch(err => {
          console.log(err);
        });
    }
    else if(articles) {
      this.populateGallery(this.props.articles, this.props.articleId);
    }
  }

  componentWillUnmount() {
    this.props.actions.emptyImageGallery();
  }

  populateGallery(articles, id) {
    //populating image gallery with images from current article content
    let article = find(articles, { id });
    let images = getAllImagesForGallery(article, paths.ARTICLES_PATH);
    //adding fold image to front of gallery
    images.unshift({file: paths.ARTICLES_PATH + article.foldImage.file, alt: article.foldImage.alt});

    this.props.actions.populateImageGallery(images);
  }

  render() {
    //finding article by id
    let {articles, articleId} = this.props;
    //dummy article, passed before data got fetched from server
    let article = {id: '', title: '', description: '', topic: '', foldImage: null, pubdate: '', readtime: 0, content: []};
    if(!isEmpty(articles)) {
      article = find(articles, {id: articleId });
    }
    return (
      <ArticlePageContent article={article} path={paths.ARTICLES_PATH} />
    );
  }
}

ArticlePage.propTypes = {
  articles: PropTypes.array.isRequired,
  articleId: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => (
  { articles: state.articles, articleId: ownProps.params.articleId }
);

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(Object.assign({}, articlesActions, imageGalleryActions), dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
