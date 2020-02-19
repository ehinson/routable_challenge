import { compose, setPropTypes } from 'recompose';
import { connect } from 'react-redux';
import { func, oneOfType, object } from 'prop-types';

import { getHasUserToken } from '../../state/selectors';

import App from '../components/App';

const propTypes = {
  mapStateToProps: func,
  mapDispatchToProps: oneOfType([func, object]),
};

const mapStateToProps = state => ({
  hasToken: getHasUserToken(state),
});

const mapDispatchToProps = () => ({});

export default compose(setPropTypes(propTypes), connect(mapStateToProps, mapDispatchToProps))(App);
