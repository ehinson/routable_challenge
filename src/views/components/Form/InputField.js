import React from 'react';
import { oneOfType, object, string, node } from 'prop-types';
import styled from 'styled-components';

export const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  background-image: none;
  border-bottom: 1px solid black;
  margin: 0.5rem;
  width: 100%;
  font-family: sans-serif;
  -webkit-appearance: none;
`;

const StyledLabel = styled.label`
  font-size: 0.85em;
  text-transform: uppercase;
  text-align: center;
`;

const StyledError = styled.strong`
  color: red;
  font-size: 0.85em;
  text-transform: uppercase;
  font-style: italic;
  text-align: center;
  display: inline-block;
`;

const Input = ({ input, label, type, meta: { touched, error }, placeholder }) => (
  <div>
    <StyledLabel>{label}</StyledLabel>
    <div>
      <StyledInput {...input} placeholder={placeholder} type={type} />
      {touched && error && <StyledError>{error}</StyledError>}
    </div>
  </div>
);

Input.propTypes = {
  input: object.isRequired,
  label: oneOfType([string, node]),
  type: string.isRequired,
  meta: object.isRequired,
  placeholder: string,
};

export default Input;
