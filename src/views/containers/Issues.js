import React from "react";
import { func, oneOfType, object, string } from "prop-types";
import { reduxForm } from "redux-form";
import { compose, setPropTypes, lifecycle } from "recompose";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import Issues from "../components/Prioritization/Issues";
import { fetchIssues } from "../../state/operations";
import * as actions from "../../state/actions";
import * as s from "../../state/selectors";

const propTypes = {
  mapStateToProps: func,
  mapDispatchToProps: oneOfType([func, object]),
  owner: string.isRequired,
  repo: string.isRequired
};

const mapStateToProps = state => ({
  issues: s.getRepoIssues(state)
});
const mapDispatchToProps = (dispatch, { owner, repo }) =>
  bindActionCreators(
    {
      fetchIssues: values => fetchIssues(owner, repo),
      setIssues: actions.setIssues,
      resetIssues: actions.resetIssues
    },
    dispatch
  );

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchIssues();
    },
    componentDidUpdate(prevProps) {
      const { owner, repo } = this.props;

      if (repo !== prevProps.repo || owner !== prevProps.owner) {
        this.props.resetIssues();
        this.props.fetchIssues();
      }
    }
  })
)(Issues);
