import { createActions } from "redux-actions";

export const {
  setRepos,
  addRepo,
  removeRepo,
  updateRepo,
  setToken,
  setSortParams
} = createActions({
  SET_REPOS: (values = []) => ({ values }),
  ADD_REPO: (value = {}) => ({ value }),
  REMOVE_REPO: (index = 0) => ({ index }),
  UPDATE_REPO: (index = 0, value = {}) => ({ index, value }),
  SET_TOKEN: (value = 0) => ({ value }),
  SET_SORT_PARAMS: (values = {}) => ({ values })
});
