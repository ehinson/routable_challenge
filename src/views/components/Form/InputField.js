import React from 'react';
import PropTypes from 'prop-types';
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

const Input = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <StyledInput {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

Input.propTypes = {};

export default Input;
