import React from "react";
import { shallow } from "enzyme";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProductCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
