import React from "react";
import { shallow } from "enzyme";
import ProductDetail from "./ProductDetail";

describe("ProductDetail", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
