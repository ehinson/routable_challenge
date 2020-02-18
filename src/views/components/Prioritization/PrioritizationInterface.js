import React, { useState } from "react";
import { array, func, string } from "prop-types";
import { Field } from "redux-form";
import _ from "lodash";

import Issues from "../../containers/Issues";

const sortAttributes = {
  created: "created_at",
  updated: "updated_at",
  pushed: "pushed_at",
  full_name: "full_name"
};

const propTypes = {
  repos: array.isRequired,
  setRepoSortParams: func.isRequired,
  sort: string.isRequired,
  direction: string.isRequired
};

const PrioritizationInterface = ({
  repos,
  setRepoSortParams,
  sort,
  direction
}) => {
  const [activeRepo, setActiveRepo] = useState({});
  const activeRepoExists = activeRepo.owner && activeRepo.repo;

  const clearActiveRepo = () => {
    setActiveRepo({});
  };

  return (
    <>
      <h2>Prioritization Interface</h2>
      <div
        onClick={() => setRepoSortParams({ data: { key: "created" } })}
        isactive={sort === "created" ? "true" : "false"}
      >
        created(default)
      </div>
      <div
        onClick={() => setRepoSortParams({ data: { key: "updated" } })}
        isactive={sort === "updated" ? "true" : "false"}
      >
        updated
      </div>
      <div
        onClick={() => setRepoSortParams({ data: { key: "pushed" } })}
        isactive={sort === "pushed" ? "true" : "false"}
      >
        pushed
      </div>
      <div
        onClick={() => setRepoSortParams({ data: { key: "full_name" } })}
        isactive={sort === "full_name" ? "true" : "false"}
      >
        full_name
      </div>
      <div
        onClick={() => setRepoSortParams({ data: { order: "asc" } })}
        isactive={direction === "asc" ? "true" : "false"}
      >
        asc
      </div>
      <div
        onClick={() => setRepoSortParams({ data: { order: "desc" } })}
        isactive={direction === "desc" ? "true" : "false"}
      >
        desc
      </div>
      <hr />
      <div>ActiveRepo</div>
      <div>{JSON.stringify(activeRepo)}</div>
      {activeRepoExists && (
        <Issues clearActiveRepo={clearActiveRepo} {...activeRepo} />
      )}
      <div>
        {_.orderBy(
          repos,
          [data => data[sortAttributes[sort]]],
          [direction]
        ).map(repo => (
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
