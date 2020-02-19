import produce from 'immer';
import { handleActions } from 'redux-actions';

import {
  setRepos,
  addRepo,
  removeRepo,
  updateRepo,
  setToken,
  setRepoSortParams,
  setIssues,
  resetIssues,
  setIssueSortParams,
} from './actions';

const initialState = {
  repos: {
    sortParams: {
      order: 'desc',
      key: 'created',
    },
    results: [],
  },
  issues: {
    sortParams: {
      order: 'desc',
      key: 'created',
    },
    results: [],
  },
  userToken: window.localStorage.getItem('userToken') || null,
};

const reducer = handleActions(
  {
    [setRepos]: produce((draft, { payload: { values } }) => {
      draft['repos']['results'] = values;
    }),
    [addRepo]: produce((draft, { payload: { value } }) => {
      draft.repos.results.concat(value);
    }),
    [removeRepo]: produce((draft, { payload: { index } }) => {
      draft.repos.results.splice(index, 1);
    }),
    [updateRepo]: produce((draft, { payload: { value, index } }) => {
      draft.repos.results[index] = value;
    }),
    [setToken]: produce((draft, { payload: { value } }) => {
      draft['userToken'] = value;
    }),
    [setRepoSortParams]: produce((draft, { payload: { values } }) => {
      console.log(draft, values);
      draft.repos = {
        ...draft.repos,
        sortParams: {
          ...draft.repos.sortParams,
          ...values.data,
        },
      };
    }),
    [setIssues]: produce((draft, { payload: { values } }) => {
      draft['issues']['results'] = values;
    }),
    [resetIssues]: produce(draft => {
      draft['issues']['results'] = [];
    }),
    [setIssueSortParams]: produce((draft, { payload: { values } }) => {
      draft.issues['sortParams'] = {
        ...draft.issues.sortParams,
        ...values.data,
      };
    }),
  },
  initialState,
);

export default reducer;
