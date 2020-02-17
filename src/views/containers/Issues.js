import React from "react";
import { func, oneOfType, object } from "prop-types";
import { reduxForm } from "redux-form";
import { compose, setPropTypes } from "recompose";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import Issues from "../components/Prioritization/Issues";
import { fetchIssues } from "../../state/operations";

const propTypes = {
  mapStateToProps: func,
  mapDispatchToProps: oneOfType([func, object])
};

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, { history }) =>
  bindActionCreators(
    {
      fetchIssues: values => fetchIssues(values, history)
    },
    dispatch
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(Issues);
