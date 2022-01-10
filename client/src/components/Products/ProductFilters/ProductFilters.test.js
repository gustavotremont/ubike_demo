import React from "react";
import { shallow } from "enzyme";
import ProductFilters from "./ProductFilters";

describe("ProductFilters", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductFilters />);
    expect(wrapper).toMatchSnapshot();
  });
});
