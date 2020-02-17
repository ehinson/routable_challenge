import { compose } from "recompose";
import { connect } from "react-redux";

import App from "../components/App";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
