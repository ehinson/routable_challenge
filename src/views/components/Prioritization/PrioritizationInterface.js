/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { array } from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Issues from '../../containers/Issues';

import { sortAttributes } from '../../../state/utils/constants';
import LoadingDots from '../Loading';

const propTypes = {
  repos: array.isRequired,
  issues: array.isRequired,
};

const StyledWrapper = styled.div`
  background-color: antiquewhite;
  display: flex;
  flex: 1;
  @media (min-width: 768px) {
  }
`;

const StyledHeader = styled.div`
  background-color: pink;
  flex: 100%;
`;

const StyledRepoWrapper = styled.div`
  background-color: purple;
  flex: 1;
  height: calc(100vh - 200px);
  overflow: scroll;
`;

const StyledIssueWrapper = styled.div`
  background-color: blue;
  flex: 0 0 61%;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledFooter = styled.div`
  background-color: green;
  /* height: 100px; */
  position: sticky;
  bottom: 0;
`;

const PrioritizationInterface = ({ repos, issues, fetchIssues, isIssueLoading }) => {
  const [activeRepo, setActiveRepo] = useState({});
  const activeRepoExists = activeRepo.owner && activeRepo.repo;

  const clearActiveRepo = () => {
    setActiveRepo({});
  };

  const handleRepoClick = repo => {
    setActiveRepo({ owner: repo.owner.login, repo: repo.name, id: repo.id });
    fetchIssues(repo.owner.login, repo.name);
  };

  return (
    <>
      <StyledHeader>
        <h2>Prioritization Interface</h2>
      </StyledHeader>
      <StyledWrapper>
        <StyledRepoWrapper>
          <div>
            <Field name="sort" component="select">
              {Object.keys(sortAttributes).map(attribute => (
                <option key={attribute} value={sortAttributes[attribute]}>
                  {attribute}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <Field name="direction" component="select">
              {['asc', 'desc'].map(direction => (
                <option key={direction} value={direction}>
                  {direction}
                </option>
              ))}
            </Field>
          </div>
          {/* <div>ActiveRepo</div>
      <div>{JSON.stringify(activeRepo)}</div> */}

          <div>
            {repos.map(repo => (
              <div
                key={repo.id}
                onClick={() => handleRepoClick(repo)}
                active={repo.id === activeRepo.id}
              >
                {repo.name}
              </div>
            ))}
          </div>
        </StyledRepoWrapper>
        {activeRepoExists && (
          <StyledIssueWrapper>
            {isIssueLoading ? (
              <LoadingDots />
            ) : issues.length > 0 ? (
              <Issues clearActiveRepo={clearActiveRepo} {...activeRepo} />
            ) : (
              'There are no open issues for this repository'
            )}
          </StyledIssueWrapper>
        )}
      </StyledWrapper>
      <StyledFooter />
    </>
  );
};

PrioritizationInterface.propTypes = propTypes;

export default PrioritizationInterface;
