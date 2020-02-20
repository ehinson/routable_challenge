import mockAxios from 'axios';
import { fetchRepos, fetchIssues } from '../operations';

describe('operations', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: 'server says hello!',
    }),
  );

  it('fetches Repos', async () => {
    let dispatch = jest.fn();
    let getState = jest.fn();

    const values = {
      token: 'mockToken',
    };

    const history = {
      push: jest.fn(),
    };

    await fetchRepos(values, history)(dispatch, getState);

    expect(mockAxios.get).toHaveBeenCalledWith('https://api.github.com/user/repos?per_page=25', {
      headers: { Authorization: 'Bearer mockToken' },
    });

    expect(dispatch).toHaveBeenCalledWith({
      payload: { value: 'mockToken' },
      type: 'SET_TOKEN',
    });
    expect(dispatch).toHaveBeenCalledWith({
      payload: { values: 'server says hello!' },
      type: 'SET_REPOS',
    });
  });

  it('fetches Issues', async () => {
    let dispatch = jest.fn();
    let getState = jest.fn(() => ({
      form: {
        prioritization: {
          values: {
            sort: 'updated',
            direction: 'asc',
          },
        },
      },
      app: {
        repos: {
          sortParams: {
            order: 'desc',
            key: 'created',
          },
          results: [],
          loading: false,
          active: {
            id: 'notEmpty',
            owner: {
              login: 'mocklogin',
            },
            name: 'mockname',
          },
        },
        issues: {
          sortParams: {
            order: 'desc',
            key: 'created',
          },
          results: [],
          loading: false,
        },
        userToken: 'mockToken',
      },
    }));

    await fetchIssues()(dispatch, getState);

    expect(mockAxios.get).toHaveBeenCalledWith(
      'https://api.github.com/repos/mocklogin/mockname/issues?sort=updated&direction=asc',
      {
        headers: { Authorization: 'Bearer mockToken' },
      },
    );

    expect(dispatch).toHaveBeenCalledWith({
      payload: { value: true },
      type: 'SET_ISSUES_LOADING',
    });
    expect(dispatch).toHaveBeenCalledWith({
      payload: { values: {} },
      type: 'SET_ISSUES',
    });
    expect(dispatch).toHaveBeenCalledWith({
      payload: { value: false },
      type: 'SET_ISSUES_LOADING',
    });
  });
});
