import { compose } from "recompose";
import { connect } from "react-redux";

import { getUserRepos, getSortKey, getSortOrder } from "../../state/selectors";
import { setSortParams } from "../../state/actions";

import Prioritization from "../components/Prioritization/PrioritizationInterface";

const mapStateToProps = state => ({
  repos: getUserRepos(state),
  sort: getSortKey(state),
  direction: getSortOrder(state)
});

const mapDispatchToProps = dispatch => ({
  setSortParams: params => dispatch(setSortParams(params))
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  Prioritization
);
