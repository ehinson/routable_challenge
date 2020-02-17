import axios from "axios";
import React from "react";

import * as repoActions from "./actions";
import * as repoSelectors from "./selectors";

export const fetchRepos = (values, history) => async (dispatch, getState) => {
  try {
    dispatch(repoActions.setToken(values.token));

    const sort = repoSelectors.getSortKey(getState());
    const direction = repoSelectors.getSortOrder(getState());

    const { data } = await axios.get(
      `https://api.github.com/user/repos?per_page=100&sort=${sort}&direction=${direction}`,
      {
        headers: {
          Authorization: `Bearer ${values.token}`
        }
      }
    );
    dispatch(repoActions.setRepos(data));
    history.push("/prioritize", { hasToken: true });
    window.localStorage.setItem("userToken", values.token);
  } catch (error) {
    console.error(error);
    history.push("/");
  }
};

export const fetchIssues = value => async (dispatch, getState) => {
  try {
    console.log("fetching issue", value);
    const { data } = await axios.get(
      `https://api.github.com//repos/6962590/241201449/issues`
    );
  } catch (error) {
    console.error(error);
  }
};
