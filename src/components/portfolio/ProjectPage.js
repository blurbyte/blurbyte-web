/*eslint-disable no-console */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//lodash
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

//components
import ProjectPageContent from './ProjectPageContent';

//actions
import * as imageGalleryActions from '../../actions/imageGalleryActions';
import * as projectsActions from '../../actions/projectsActions';

//cdn paths
import * as paths from '../../utilities/cdnPaths';

//getAllImagesForGallery select function
import {getAllImagesForGallery} from '../../utilities/getImagesForGallery';

class ProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    let {projects} = this.props;

    if (isEmpty(projects)) {
      this.props.actions.loadAllProjects()
        .then(() => {
          this.populateGallery(this.props.projects, this.props.projectId);
        })
        .catch(err => {
          console.log(err);
        });
    }
    else if(projects) {
      this.populateGallery(this.props.projects, this.props.projectId);
    }
  }

  componentWillUnmount() {
    this.props.actions.emptyImageGallery();
  }

  populateGallery(projects, id) {
    //populating image gallery with images from project content
    let project = find(projects, { id });
    this.props.actions.populateImageGallery(getAllImagesForGallery(project, paths.PROJECTS_PATH));
  }

  render() {
    //finding project by id
    let {projects, projectId} = this.props;
    //dummy project, passed before data got fetched from server
    let project = { id: '', title: '', description: '', category: '', content: [] };
    if (!isEmpty(projects)) {
      project = find(projects, { id: projectId });
    }

    return (
      <ProjectPageContent project={project} path={paths.PROJECTS_PATH} />
    );
  }
}

ProjectPage.propTypes = {
  projects: PropTypes.array.isRequired,
  projectId: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => (
  { projects: state.projects, projectId: ownProps.params.projectId }
);

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(Object.assign({}, projectsActions, imageGalleryActions), dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
