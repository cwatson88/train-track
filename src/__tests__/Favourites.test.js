import { shallow } from "enzyme";
import React from "react";
import FavouritePage from "../components/favourites/FavouriteList";
import "../setupTests";

describe("Lets get the favourite up and running!", () => {
  const wrapper = shallow(<FavouritePage />);

  test("Favourite page does mount", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("Render a list of favourites from props", () => {
    expect(wrapper.find(".favourite")).toHaveLength(favourites.length);
  });
});
