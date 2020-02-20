import React from 'react';
import { Field } from 'redux-form';
import { object, func, bool } from 'prop-types';
import styled from 'styled-components';
import { required } from 'redux-form-validators';

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

const StyledFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledButton = styled.button`
  margin: 15px;
  outline: none;
  border: 1px solid #286c81;
  font-size: 0.85em;
  text-transform: uppercase;
  padding: 10px 15px;
`;

const TokenForm = props => {
  const { error, handleSubmit, pristine, reset, submitting, fetchRepos } = props;
  return (
    <StyledFormWrapper onSubmit={handleSubmit(fetchRepos)}>
      <Field
        name="token"
        type="text"
        component={InputField}
        placeholder="token"
        label="Please enter your Github Token"
        validate={[required({ msg: 'A token is required.' })]}
      />
      <div>
        <StyledButton type="submit" disabled={submitting}>
          Submit API Key
        </StyledButton>
        <StyledButton type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </StyledButton>
      </div>
    </StyledFormWrapper>
  );
};

TokenForm.propTypes = propTypes;

export default TokenForm;
