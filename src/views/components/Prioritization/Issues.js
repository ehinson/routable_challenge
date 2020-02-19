import React from 'react';
import { array, func } from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';

import { sortAttributes } from '../../../state/utils/constants';
import moment from 'moment';

const propTypes = {
  issues: array.isRequired,
  fetchIssues: func.isRequired,
};

const StyledRepoTitle = styled.h3`
  margin: 30px 0;
  text-align: right;
`;

const StyledWrapper = styled.div`
  height: calc(100vh - 200px);
  min-width: 100%;
`;

const StyledSortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;

  select {
    margin: 15px;
  }

  span {
    text-transform: uppercase;
    font-size: 0.85em;
    text-align: right;
  }
`;

const StyledIssue = styled.div`
  display: grid;
  background-color: white;
  margin: 10px;
  padding: 10px;
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  text-align: right;
  grid-template-areas:
    'avatar title'
    'avatar created'
    'avatar updated';
`;

const MockImage = styled.div`
  width: 40px;
  height: 40px;
  display: inline-block;
  background-color: #eeeeee;
  grid-area: avatar;
`;

const RealImage = styled.img`
  grid-area: avatar;
`;

const Title = styled.div`
  grid-area: title;
  font-size: 0.85em;
  text-transform: uppercase;
`;

const Created = styled.div`
  grid-area: created;
  span {
    font-size: 0.85em;
    text-transform: uppercase;
  }
`;

const Updated = styled.div`
  grid-area: updated;
  span {
    font-size: 0.85em;
    text-transform: uppercase;
  }
`;

const Issues = ({ issues, fetchIssues, activeRepo }) => {
  return (
    <StyledWrapper>
      <StyledRepoTitle>{activeRepo.name}</StyledRepoTitle>
      <StyledSortWrapper>
        <span>Sort:</span>
        <Field name="sort" component="select" onChange={fetchIssues}>
          {Object.keys(sortAttributes).map(attribute => (
            <option key={attribute} value={sortAttributes[attribute]}>
              {attribute}
            </option>
          ))}
        </Field>
        <span>Order:</span>
        <Field name="direction" component="select" onChange={fetchIssues}>
          {['asc', 'desc'].map(direction => (
            <option key={direction} value={direction}>
              {direction}
            </option>
          ))}
        </Field>
      </StyledSortWrapper>
      {issues.length > 0 &&
        issues.map(issue => (
          <StyledIssue key={issue.id}>
            {issues.assignee ? (
              <RealImage src={issue.assignee.avatar_url} alt={`${issue.assignee.login}'s avatar`} />
            ) : (
              <MockImage />
            )}
            <Title>{issue.title}</Title>
            <Created>
              <span>created</span> {moment(issue.created_at).format('MM/DD/YYYY ')}
            </Created>
            <Updated>
              <span>updated </span>
              {moment(issue.updated_at).fromNow()}
            </Updated>
          </StyledIssue>
        ))}
    </StyledWrapper>
  );
};

Issues.propTypes = propTypes;

export default Issues;
