/* eslint-disable no-nested-ternary */
import React from 'react';
import { array, func, object, bool } from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import Issues from '../../containers/Issues';

import LoadingDots from '../Loading';

const propTypes = {
  repos: array.isRequired,
  issues: array.isRequired,
  fetchIssues: func.isRequired,
  isIssueLoading: bool.isRequired,
  setActiveRepo: func.isRequired,
  resetActiveRepo: func.isRequired,
  activeRepo: object.isRequired,
};

const StyledWrapper = styled.div`
  background-color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0 100px;
  }
`;

const StyledHeader = styled.div`
  background-color: white;
  flex: 0;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const StyledRepoWrapper = styled.div`
  background-color: white;
  flex: 0 0 200px;
  overflow: scroll;
  @media (min-width: 768px) {
    flex: 1;
    height: calc(100vh - 200px);
  }
`;

const StyledIssueWrapper = styled.div`
  background-color: #eeeeee;
  flex: 1;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    flex: 0 0 61%;
  }
`;

const StyledFooter = styled.div`
  background-color: green;
  position: sticky;
  bottom: 0;
`;

const PrioritizationInterface = ({
  repos,
  issues,
  fetchIssues,
  isIssueLoading,
  setActiveRepo,
  resetActiveRepo,
  activeRepo,
}) => {
  const activeRepoExists = activeRepo && !_.isEmpty(activeRepo);

  return (
    <>
      <StyledHeader>
        <h2>Prioritization Interface</h2>
      </StyledHeader>
      <StyledWrapper>
        <StyledRepoWrapper>
          <div>
            {repos.map(repo => (
              <div
                key={repo.id}
                onClick={() => {
                  setActiveRepo(repo);
                  fetchIssues();
                }}
                active={activeRepo && repo.id === activeRepo.id ? 'true' : 'false'}
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
              <Issues clearActiveRepo={resetActiveRepo} activeRepo={activeRepo} />
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
