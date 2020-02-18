/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";

// Components
import App from "../App";

describe("App Test Suite", () => {
  it("Should match snapshot when there is a user token", () => {
    const props = {
      hasToken: true
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should match snapshot when there is not a user token", () => {
    const props = {
      hasToken: false
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
