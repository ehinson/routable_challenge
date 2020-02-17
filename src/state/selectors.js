import { createSelector } from "reselect";
import { getFormValues } from "redux-form";

export const getAppState = state => state.app;

export const getFormState = state => getFormValues("githubToken")(state);

export const getHasUserToken = createSelector(getAppState, appState =>
  Boolean(appState.userToken)
);

export const getUserRepos = createSelector(
  getAppState,
  appState => appState.repos
);

export const getSortParams = createSelector(
  getAppState,
  appState => appState.sortParams
);

export const getSortOrder = createSelector(
  getSortParams,
  sortParams => sortParams.order
);

export const getSortKey = createSelector(
  getSortParams,
  sortParams => sortParams.key
);
