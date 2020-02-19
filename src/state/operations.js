import axios from 'axios';
import _ from 'lodash';

import * as repoActions from './actions';
import * as repoSelectors from './selectors';

export const fetchRepos = (values, history) => async (dispatch, getState) => {
  try {
    dispatch(repoActions.setToken(values.token));

    const { data } = await axios.get(`https://api.github.com/user/repos?per_page=100`, {
      headers: {
        Authorization: `Bearer ${values.token}`,
      },
    });
    dispatch(repoActions.setRepos(data));
    history.push('/prioritize', { hasToken: true });
    window.localStorage.setItem('userToken', values.token);
  } catch (error) {
    console.error(error);
    history.push('/');
  }
};

export const fetchIssues = () => async (dispatch, getState) => {
  const state = getState();
  const token = repoSelectors.getUserToken(state);
  const sort = repoSelectors.getSortKey(state);
  const direction = repoSelectors.getSortOrder(state);
  const activeRepo = repoSelectors.getActiveRepo(state);
  const repoIsEmpty = _.isEmpty(activeRepo);

  if (!repoIsEmpty) {
    try {
      dispatch(repoActions.setIssuesLoading(true));
      const { data } = await axios.get(
        `https://api.github.com/repos/${activeRepo.owner.login}/${activeRepo.name}/issues?sort=${sort}&direction=${direction}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      dispatch(repoActions.setIssues(data));
      dispatch(repoActions.setIssuesLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(repoActions.setIssuesLoading(false));
    }
  }
};
