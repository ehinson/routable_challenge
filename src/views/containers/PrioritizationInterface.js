import { compose } from "recompose";
import { connect } from "react-redux";

import { getUserRepos, getSortKey, getSortOrder } from "../../state/selectors";
import { setRepoSortParams } from "../../state/actions";

import PrioritizationInterface from "../components/Prioritization/PrioritizationInterface";
import { reduxForm } from "redux-form";

const mapStateToProps = state => ({
  repos: getUserRepos(state),
  sort: getSortKey(state),
  direction: getSortOrder(state)
});

const mapDispatchToProps = dispatch => ({});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "prioritization",
    initialValues: {
      sort: "created",
      direction: "desc"
    }
  })
)(PrioritizationInterface);
