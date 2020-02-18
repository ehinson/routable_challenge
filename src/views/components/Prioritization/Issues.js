import React from "react";
import PropTypes from "prop-types";

const Issues = ({ issues }) => {
  return (
    <div>
      {issues.map(issue => (
        <div key={issue.id}>{issue.title}</div>
      ))}
    </div>
  );
};

Issues.propTypes = {};

export default Issues;
