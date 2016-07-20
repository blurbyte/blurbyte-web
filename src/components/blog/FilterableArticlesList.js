import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//action creators
import * as actionCreators from '../../actions/articlesFilterActions';

// components
import ArticlesFilter from './ArticlesFilter';
import ArticlesList from './ArticlesList';

//lodash
import find from 'lodash/find';

class FilterableArticlesList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onUpdateTopics = this.onUpdateTopics.bind(this);
  }

  onUpdateTopics(e, topic) {
    e.preventDefault();
    this.props.actions.selectFilterTopic(topic);
  }

  render() {
    let {topic} = find(this.props.articlesTopics, 'selected');
    return (
      <div>
        <ArticlesFilter topics={this.props.articlesTopics} onUpdateTopics={this.onUpdateTopics} />
        <ArticlesList articles={this.props.articles} topic={topic} />
      </div>
    );
  }
}

FilterableArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  articlesTopics: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  { articlesTopics: state.articlesTopics }
);

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(actionCreators, dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(FilterableArticlesList);
