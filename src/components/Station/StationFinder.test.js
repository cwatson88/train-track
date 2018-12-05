import { shallow } from "enzyme";
import React from "react";
import "../../EnzymeConfig";
import StationFinder from "./StationFinder";

const wrapper = shallow(<StationFinder />);

it("should render without throwing an error", () => {
  expect(wrapper.length).toBe(1);
});
