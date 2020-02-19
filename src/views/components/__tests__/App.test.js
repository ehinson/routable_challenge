import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../App';

describe('App Test Suite', () => {
  it('renders', () => {
    const props = {
      hasToken: true,
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('Should match snapshot', () => {
    const props = {
      hasToken: false,
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
