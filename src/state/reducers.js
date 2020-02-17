import produce from "immer";
import { handleActions } from "redux-actions";

import {
  setRepos,
  addRepo,
  removeRepo,
  updateRepo,
  setToken,
  setSortParams
} from "./actions";

const initialState = {
  repos: [],
  userToken: window.localStorage.getItem("userToken") || null,
  sortParams: {
    order: "desc",
    key: "created"
  }
};

const reducer = handleActions(
  {
    [setRepos]: produce((draft, { payload: { values } }) => {
      draft["repos"] = values;
    }),
    [addRepo]: produce((draft, { payload: { value } }) => {
      draft.repos.concat(value);
    }),
    [removeRepo]: produce((draft, { payload: { index } }) => {
      draft.repos.splice(index, 1);
    }),
    [updateRepo]: produce((draft, { payload: { value, index } }) => {
      draft.repos[index] = value;
    }),
    [setToken]: produce((draft, { payload: { value } }) => {
      draft["userToken"] = value;
    }),
    [setSortParams]: produce((draft, { payload: { values } }) => {
      draft["sortParams"] = {
        ...draft.sortParams,
        ...values.data
      };
    })
  },
  initialState
);

export default reducer;
