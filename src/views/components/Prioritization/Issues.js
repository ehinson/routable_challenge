import React from 'react';
import { array } from 'prop-types';
import LoadingDots from '../Loading';

const propTypes = {
  issues: array.isRequired,
};

const Issues = ({ issues, isLoading }) => {
  return (
    <div>
      {isLoading && <LoadingDots />}
      {issues.length > 0 && issues.map(issue => <div key={issue.id}>{issue.title}</div>)}
    </div>
  );
};

Issues.propTypes = propTypes;

export default Issues;
