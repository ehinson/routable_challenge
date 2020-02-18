import { createActions } from "redux-actions";

export const {
  setRepos,
  addRepo,
  removeRepo,
  updateRepo,
  setToken,
  setRepoSortParams,
  setIssues,
  setIssueSortParams
} = createActions({
  SET_REPOS: (values = []) => ({ values }),
  ADD_REPO: (value = {}) => ({ value }),
  REMOVE_REPO: (index = 0) => ({ index }),
  UPDATE_REPO: (index = 0, value = {}) => ({ index, value }),
  SET_TOKEN: (value = 0) => ({ value }),
  SET_REPO_SORT_PARAMS: (values = {}) => ({ values }),
  SET_ISSUES: (values = []) => ({ values }),
  SET_ISSUE_SORT_PARAMS: (values = {}) => ({ values })
});
