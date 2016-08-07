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
    this.state = {
      listWrapperHeight: 0
    };

    this.onUpdateTopics = this.onUpdateTopics.bind(this);
  }

  onUpdateTopics(e, topic) {
    e.preventDefault();
    this.props.actions.selectFilterTopic(topic);
    //set wrapper height once with the initial value, when it contains list of all articles
    this.setState({ listWrapperHeight: this.state.listWrapperHeight > 0 ? this.state.listWrapperHeight : this.listWrapper.offsetHeight });
  }

  render() {
    let {topic} = find(this.props.articlesTopics, 'selected');
    //set fixed height for articles wrapper to prevent content shifting
    return (
      <div className="filterable-articles-list" ref={node => this.listWrapper = node} style={{ height: this.state.listWrapperHeight > 0 ? this.state.listWrapperHeight + 'px' : '' }}>
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
