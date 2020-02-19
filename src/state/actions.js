import { createActions } from 'redux-actions';

export const {
  setRepos,
  resetRepos,
  addRepo,
  removeRepo,
  updateRepo,
  setToken,
  setRepoSortParams,
  setReposLoading,
  setIssues,
  resetIssues,
  setIssueSortParams,
  setIssuesLoading,
} = createActions({
  SET_REPOS: (values = []) => ({ values }),
  RESET_REPOS: () => undefined,
  ADD_REPO: (value = {}) => ({ value }),
  REMOVE_REPO: (index = 0) => ({ index }),
  UPDATE_REPO: (index = 0, value = {}) => ({ index, value }),
  SET_TOKEN: (value = 0) => ({ value }),
  SET_REPO_SORT_PARAMS: (values = {}) => ({ values }),
  SET_REPOS_LOADING: (value = false) => ({ value }),
  SET_ISSUES: (values = []) => ({ values }),
  RESET_ISSUES: () => undefined,
  SET_ISSUE_SORT_PARAMS: (values = {}) => ({ values }),
  SET_ISSUES_LOADING: (value = false) => ({ value }),
});
