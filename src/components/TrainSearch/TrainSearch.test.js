import React from "react";
import "../../EnzymeConfig";
import TrainSearch from "./TrainSearch";
import { shallow, mount, render } from "enzyme";

const wrapper = shallow(<TrainSearch />);

it('should render without throwing an error', function () {
    expect(shallow(<TrainSearch />).length).toBe(1);
});
