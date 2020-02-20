import React from 'react';
import { shallow } from 'enzyme';

// Components
import PrioritizationInterface from '../Prioritization/PrioritizationInterface';

const props = {
  hasToken: true,
  repos: [
    {
      id: 1234567890,
      name: 'My_cool_repo',
      owner: {
        login: 'ehinson',
      },
    },
  ],
  issues: [
    {
      assignee: null,
      created_at: '2019-11-12T20:14:36Z',
      updated_at: '2019-11-12T20:14:36Z',
    },
  ],
  fetchIssues: jest.fn(),
  isIssueLoading: false,
  setActiveRepo: jest.fn(),
  resetActiveRepo: jest.fn(),
  activeRepo: {},
};

describe('PrioritizationInterface Test Suite', () => {
  it('renders', () => {
    const wrapper = shallow(<PrioritizationInterface {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Should match snapshot', () => {
    const wrapper = shallow(<PrioritizationInterface {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Should list repos', () => {
    const wrapper = shallow(<PrioritizationInterface {...props} />);
    console.log(wrapper.debug());
    expect(wrapper.find('PrioritizationInterface__StyledRepo').exists()).toBe(true);
  });
});
