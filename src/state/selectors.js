import { createSelector } from "reselect";
import { getFormValues } from "redux-form";

export const getAppState = state => state.app;

export const getFormState = state => getFormValues("githubToken")(state);

export const getHasUserToken = createSelector(getAppState, appState =>
  Boolean(appState.userToken)
);

export const getUserToken = createSelector(
  getAppState,
  appState => appState.userToken
);

export const getUserRepos = createSelector(
  getAppState,
  appState => appState.repos.results
);

export const getRepoSortParams = createSelector(
  getAppState,
  appState => appState.repos.sortParams
);

export const getSortOrder = createSelector(
  getRepoSortParams,
  sortParams => sortParams.order
);

export const getSortKey = createSelector(
  getRepoSortParams,
  sortParams => sortParams.key
);

export const getRepoIssues = createSelector(
  getAppState,
  appState => appState.issues.results
);
