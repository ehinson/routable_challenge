import React from 'react';
import { func, oneOfType, object, string, array } from 'prop-types';
import { compose, setPropTypes, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import Issues from '../components/Prioritization/Issues';

import { fetchIssues } from '../../state/operations';
import * as actions from '../../state/actions';
import * as s from '../../state/selectors';

const propTypes = {
  mapStateToProps: func,
  mapDispatchToProps: oneOfType([func, object]),
  owner: string.isRequired,
  repo: string.isRequired,
  issues: array.isRequired,
};

const mapStateToProps = state => ({
  issues: s.getRepoIssues(state),
  isLoading: s.getIssuesLoading(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchIssues,
      setIssues: actions.setIssues,
      resetIssues: actions.resetIssues,
    },
    dispatch,
  );

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { activeRepo } = this.props;

      if (activeRepo.id !== prevProps.activeRepo.id) {
        this.props.fetchIssues();
      }
    },
    componentWillUnmount() {
      this.props.resetIssues();
    },
  }),
)(Issues);
