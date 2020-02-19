import React, { useState } from 'react';
import { array } from 'prop-types';
import { Field } from 'redux-form';
import styled from 'styled-components';

import Issues from '../x../containers/Issues';

import { sortAttributes } from '../../../state/utils/constants';

const propTypes = {
  repos: array.isRequired,
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
`;

const StyledFooter = styled.div`
  background-color: green;
  /* height: 100px; */
  position: sticky;
  bottom: 0;
`;

const PrioritizationInterface = ({ repos }) => {
  const [activeRepo, setActiveRepo] = useState({});
  const activeRepoExists = activeRepo.owner && activeRepo.repo;

  const clearActiveRepo = () => {
    setActiveRepo({});
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
                onClick={() => setActiveRepo({ owner: repo.owner.login, repo: repo.name })}
              >
                {repo.name}
              </div>
            ))}
          </div>
        </StyledRepoWrapper>
        {activeRepoExists && (
          <StyledIssueWrapper>
            <Issues clearActiveRepo={clearActiveRepo} {...activeRepo} />
          </StyledIssueWrapper>
        )}
      </StyledWrapper>
      <StyledFooter />
    </>
  );
};

PrioritizationInterface.propTypes = propTypes;

export default PrioritizationInterface;
