import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getUserRepos,
  getRepoIssues,
  getIssuesLoading,
  getActiveRepo,
} from '../../state/selectors';
import { fetchIssues } from '../../state/operations';
import * as actions from '../../state/actions';

import PrioritizationInterface from '../components/Prioritization/PrioritizationInterface';
import { reduxForm } from 'redux-form';

const mapStateToProps = state => ({
  repos: getUserRepos(state),
  issues: getRepoIssues(state),
  isIssueLoading: getIssuesLoading(state),
  activeRepo: getActiveRepo(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchIssues,
      setIssues: actions.setIssues,
      resetIssues: actions.resetIssues,
      setActiveRepo: actions.setActiveRepo,
      resetActiveRepo: actions.resetActiveRepo,
    },
    dispatch,
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchIssues();
    },
  }),
  reduxForm({
    form: 'prioritization',
    initialValues: {
      sort: 'created',
      direction: 'desc',
    },
  }),
)(PrioritizationInterface);
