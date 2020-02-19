import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { bool } from 'prop-types';

import TokenForm from '../containers/TokenForm';
import Prioritization from '../containers/PrioritizationInterface';
import PrivateRoute from './PrivateRoute';

const propTypes = {
  hasToken: bool.isRequired,
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body, html, #root {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    position: relative;
  }

  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
  }
`;

const App = ({ hasToken }) => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <PrivateRoute path="/prioritize" component={Prioritization} hasToken={hasToken} />
          <Route path="/">
            <TokenForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

App.propTypes = propTypes;

export default App;
