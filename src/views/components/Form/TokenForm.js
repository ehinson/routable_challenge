import React from 'react';
import { Field } from 'redux-form';
import { object, func, bool } from 'prop-types';
import 'core-js';
import 'regenerator-runtime';

import InputField from './InputField';

const propTypes = {
  error: object.isRequired,
  handleSubmit: func.isRequired,
  pristine: bool.isRequired,
  reset: func.isRequired,
  submitting: bool.isRequired,
  fetchRepos: func.isRequired,
};

const TokenForm = props => {
  const { error, handleSubmit, pristine, reset, submitting, fetchRepos } = props;
  return (
    <form onSubmit={handleSubmit(fetchRepos)}>
      <Field name="token" type="text" component={InputField} label="Github Token" />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>
          Submit API Key
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

TokenForm.propTypes = propTypes;

export default TokenForm;
