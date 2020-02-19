import { compose } from 'recompose';
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

const mapDispatchToProps = (dispatch, { owner, repo }) =>
  bindActionCreators(
    {
      fetchIssues: (owner, repo) => fetchIssues(owner, repo),
      setIssues: actions.setIssues,
      resetIssues: actions.resetIssues,
      setActiveRepo: actions.setActiveRepo,
      resetActiveRepo: actions.resetActiveRepo,
    },
    dispatch,
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'prioritization',
    initialValues: {
      sort: 'created',
      direction: 'desc',
    },
  }),
)(PrioritizationInterface);
