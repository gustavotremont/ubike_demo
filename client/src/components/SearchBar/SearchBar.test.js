import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
