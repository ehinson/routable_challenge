import React, { useState } from "react";
import { array, func, string } from "prop-types";
import { Field } from "redux-form";
import _ from "lodash";

import Issues from "../../containers/Issues";

const sortAttributes = {
  created: "created_at",
  updated: "updated_at",
  pushed: "pushed_at",
  "full name": "full_name"
};

const propTypes = {
  repos: array.isRequired,
  sort: string.isRequired,
  direction: string.isRequired
};

const PrioritizationInterface = ({ repos, sort, direction }) => {
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
            <option>{direction}</option>
          ))}
        </Field>
      </div>
      <hr />
      <div>ActiveRepo</div>
      <div>{JSON.stringify(activeRepo)}</div>
      {activeRepoExists && (
        <Issues clearActiveRepo={clearActiveRepo} {...activeRepo} />
      )}
      <div>
        {console.log(sort, direction)}
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
