import React, { useState } from "react";
import { array, func, string } from "prop-types";
import _ from "lodash";

const sortAttributes = {
  created: "created_at",
  updated: "updated_at",
  pushed: "pushed_at",
  full_name: "full_name"
};

const propTypes = {
  repos: array.isRequired,
  setSortParams: func.isRequired,
  sort: string.isRequired,
  direction: string.isRequired
};

const PrioritizationInterface = ({ repos, setSortParams, sort, direction }) => {
  const [activeRepo, setActiveRepo] = useState({});
  return (
    <>
      <h2>Prioritization Interface</h2>
      <div
        onClick={() => setSortParams({ data: { key: "created" } })}
        isActive={sort === "created"}
      >
        created(default)
      </div>
      <div
        onClick={() => setSortParams({ data: { key: "updated" } })}
        isActive={sort === "updated"}
      >
        updated
      </div>
      <div
        onClick={() => setSortParams({ data: { key: "pushed" } })}
        isActive={sort === "pushed"}
      >
        pushed
      </div>
      <div
        onClick={() => setSortParams({ data: { key: "full_name" } })}
        isActive={sort === "full_name"}
      >
        full_name
      </div>
      <div
        onClick={() => setSortParams({ data: { order: "asc" } })}
        isActive={direction === "asc"}
      >
        asc
      </div>
      <div
        onClick={() => setSortParams({ data: { order: "desc" } })}
        isActive={direction === "desc"}
      >
        desc
      </div>
      <hr />
      <div>ActiveRepo</div>
      <div>{JSON.stringify(activeRepo)}</div>
      {_.orderBy(repos, [data => data[sortAttributes[sort]]], [direction]).map(
        repo => (
          <div
            key={repo.id}
            onClick={() =>
              setActiveRepo({ ownerID: repo.owner.id, repoID: repo.id })
            }
          >
            {repo.name}
          </div>
        )
      )}
    </>
  );
};

PrioritizationInterface.propTypes = propTypes;

export default PrioritizationInterface;
