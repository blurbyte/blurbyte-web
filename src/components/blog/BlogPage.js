import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// components
import BlogPageContent from './BlogPageContent';

//actions
import * as imageGalleryActions from '../../actions/imageGalleryActions';
import * as articlesActions from '../../actions/articlesActions';
import * as articlesFilterActions from '../../actions/articlesFilterActions';

//lodash
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import uniqWith from 'lodash/uniqWith';
import isEqual from 'lodash/isEqual';

//cdn paths
import * as paths from '../../utilities/cdnPaths';

//getFoldImageForGallery select function
import {getFoldImageForGallery} from '../../utilities/getImagesForGallery';


class BlogPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    let {articles} = this.props;

    //loading articles if they dont't exist
    //using foldImage from the newest article
    if (isEmpty(articles)) {
      this.props.actions.loadAllArticles()
        .then(() => {
          //populateing image gallery
          this.populateGallery(this.props.articles[0].foldImage);
        })
        .then(() => {
          this.fillArticlesTopicsList(this.props.articles);
        })
        .catch(err => {
          console.log(err);
        });
    }
    else if(articles) {
      this.populateGallery(this.props.articles[0].foldImage);
      this.fillArticlesTopicsList(this.props.articles);
    }
  }

  componentWillUnmount () {
    this.props.actions.emptyImageGallery();
  }

  populateGallery(foldImage) {
    //populating image gallery with fold image
    this.props.actions.populateImageGallery(getFoldImageForGallery(foldImage, paths.ARTICLES_PATH));
  }

  fillArticlesTopicsList(articles) {
    //filling articles topics list
    let articlesTopics = [{ topic: 'All', selected: true }];
    map(articles, article => {
      articlesTopics.push({ topic: article.topic, selected: false});
    });

    //removing duplicates
    articlesTopics = uniqWith(articlesTopics, isEqual);

    //populating store
    this.props.actions.populateTopicsList(articlesTopics);
  }

  render() {
    let {articles} = this.props;
    let foldImage = null;

    if(!isEmpty(articles)) {
      //ordering articles by date
      articles = reverse(sortBy(this.props.articles, 'pubdate'));
      foldImage = articles[0].foldImage;
    }
    else {
      //passing dummy article untill data are fetched from server
      articles = [{id: '', title: '', description: '', topic: '', foldImage: null, pubdate: '', readtime: 0, content: []}];
    }

    return (
      <BlogPageContent foldImage={foldImage} articles={articles} />
    );
  }
}

BlogPage.propTypes = {
  articles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  {
    articles: state.articles
  }
);

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(Object.assign({}, articlesActions, articlesFilterActions, imageGalleryActions), dispatch) }
);


export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
