import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { func, oneOfType, object } from "prop-types";
import { compose, setPropTypes } from "recompose";
import { connect } from "react-redux";

import { getHasUserToken } from "../../state/selectors";

import TokenForm from "../containers/TokenForm";
import Prioritization from "../containers/PrioritizationInterface";
import PrivateRoute from "./PrivateRoute";

const propTypes = {};

const App = ({ hasToken }) => {
  return (
    <Router>
      <Switch>
        <PrivateRoute
          path="/prioritize"
          component={Prioritization}
          hasToken={hasToken}
        />
        <Route path="/">
          <TokenForm />
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = propTypes;

export default App;
