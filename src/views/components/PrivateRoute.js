import React from 'react';
import { array, node, oneOfType } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const propTypes = {};

const PrivateRoute = ({ component: Component, hasToken, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log(props);
      return hasToken ? <Component {...props} /> : <Redirect to="/" />;
    }}
  />
);

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;
