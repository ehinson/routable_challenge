import React from 'react';
import { array, func } from 'prop-types';
import { Field } from 'redux-form';

import { sortAttributes } from '../../../state/utils/constants';

const propTypes = {
  issues: array.isRequired,
  fetchIssues: func.isRequired,
};

const Issues = ({ issues, fetchIssues }) => {
  return (
    <div>
      <div>
        <Field name="sort" component="select" onChange={fetchIssues}>
          {Object.keys(sortAttributes).map(attribute => (
            <option key={attribute} value={sortAttributes[attribute]}>
              {attribute}
            </option>
          ))}
        </Field>
      </div>
      <div>
        <Field name="direction" component="select" onChange={fetchIssues}>
          {['asc', 'desc'].map(direction => (
            <option key={direction} value={direction}>
              {direction}
            </option>
          ))}
        </Field>
      </div>
      {issues.length > 0 && issues.map(issue => <div key={issue.id}>{issue.title}</div>)}
    </div>
  );
};

Issues.propTypes = propTypes;

export default Issues;
