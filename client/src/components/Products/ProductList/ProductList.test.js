import React from "react";
import { shallow } from "enzyme";
import ProductList from "./ProductList";

describe("ProductList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper).toMatchSnapshot();
  });
});
