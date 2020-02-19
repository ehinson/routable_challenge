import React from 'react';
import { array, node, oneOfType, string, bool, func, element } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const propTypes = {
  Component: oneOfType([array, node, string, func, element]),
  hasToken: bool.isRequired,
};

const PrivateRoute = ({ component: Component, hasToken, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return hasToken ? <Component {...props} /> : <Redirect to="/" />;
    }}
  />
);

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;
