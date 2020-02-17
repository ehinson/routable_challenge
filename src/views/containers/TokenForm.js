import React from "react";
import { func, oneOfType, object } from "prop-types";
import { reduxForm } from "redux-form";
import { compose, setPropTypes } from "recompose";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import TokenForm from "../components/Form/TokenForm";
import { fetchRepos } from "../../state/operations";

const propTypes = {
  mapStateToProps: func,
  mapDispatchToProps: oneOfType([func, object])
};

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, { history }) =>
  bindActionCreators(
    {
      fetchRepos: values => fetchRepos(values, history)
    },
    dispatch
  );

export default compose(
  setPropTypes(propTypes),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "githubToken"
  })
)(TokenForm);
