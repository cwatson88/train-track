import React from "react";
import "../../EnzymeConfig";
import TrainSearch from "./TrainSearch";
import { shallow, mount, render } from "enzyme";

const wrapper = shallow(<TrainSearch />);

it('should render without throwing an error', () => {
    expect(wrapper.length).toBe(1); 
});

// it('Should render the datePicker',() => {
//     expect(wrapper.find(<DatePicker/>)).tobe(true);
// })
