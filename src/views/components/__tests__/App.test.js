/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";

// Components
import App from "../App";

function setup() {
  const props = {
    hasToken: true
  };
  const wrapper = shallow(<App />);
  return { wrapper, props };
}

describe("App Test Suite", () => {
  it("Should match snapshot", () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
