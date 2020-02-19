import { compose } from 'recompose';
import { connect } from 'react-redux';

import { getUserRepos, getRepoIssues } from '../../state/selectors';

import PrioritizationInterface from '../components/Prioritization/PrioritizationInterface';
import { reduxForm } from 'redux-form';

const mapStateToProps = state => ({
  repos: getUserRepos(state),
  issues: getRepoIssues(state),
});

const mapDispatchToProps = dispatch => ({});

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
