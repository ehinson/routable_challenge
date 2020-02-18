import React, { useState } from "react";
import { array } from "prop-types";
import { Field } from "redux-form";

import Issues from "../../containers/Issues";

import { sortAttributes } from "../../../state/utils/constants";

const propTypes = {
  repos: array.isRequired
};

const PrioritizationInterface = ({ repos }) => {
  const [activeRepo, setActiveRepo] = useState({});
  const activeRepoExists = activeRepo.owner && activeRepo.repo;

  const clearActiveRepo = () => {
    setActiveRepo({});
  };

  return (
    <>
      <h2>Prioritization Interface</h2>
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
          {["asc", "desc"].map(direction => (
            <option key={direction} value={direction}>
              {direction}
            </option>
          ))}
        </Field>
      </div>
      <div>ActiveRepo</div>
      <div>{JSON.stringify(activeRepo)}</div>
      {activeRepoExists && (
        <Issues clearActiveRepo={clearActiveRepo} {...activeRepo} />
      )}
      <div>
        {repos.map(repo => (
          <div
            key={repo.id}
            onClick={() =>
              setActiveRepo({ owner: repo.owner.login, repo: repo.name })
            }
          >
            {repo.name}
          </div>
        ))}
      </div>
    </>
  );
};

PrioritizationInterface.propTypes = propTypes;

export default PrioritizationInterface;
