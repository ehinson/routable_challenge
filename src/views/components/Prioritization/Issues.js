import React from 'react';
import { array } from 'prop-types';

const propTypes = {
  issues: array.isRequired,
};

const Issues = ({ issues }) => {
  return (
    <div>
      {issues.map(issue => (
        <div key={issue.id}>{issue.title}</div>
      ))}
    </div>
  );
};

Issues.propTypes = propTypes;

export default Issues;
