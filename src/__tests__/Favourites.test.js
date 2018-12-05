import { shallow, mount } from "enzyme";
import React from "react";
import FavouriteList from "../components/favourites/FavouriteList";
import FavouriteItem from "../components/favourites/FavouriteItem";
import "../setupTests";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Delete";

describe("FavouriteList tests", () => {
  const wrapper = shallow(<FavouriteList />);

  test("Favourite list mounts", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("Render a list of favourites", () => {
    expect(wrapper.find(FavouriteItem)).toHaveLength(2);
  });
});

describe("FavouriteItem tests", () => {
  const wrapper = mount(
    <FavouriteItem departureStation="EUS" destinationStation="BHI" />
  );
  test("Favourite components to mount", () => {
    expect(wrapper.exists()).toBe(true);
  });
  test("departureStation props are working", () => {
    expect(wrapper.props().departureStation).toEqual("EUS");
  });
  test("destinationStation props are working", () => {
    expect(wrapper.props().destinationStation).toEqual("BHI");
  });
  test("When given the TUC they display the name of the station", () => {
    expect(
      wrapper
        .find(Chip)
        .children()
        .find("span")
        .text()
    ).toEqual("EUS to BHI");
  });

  test("When long hold the delete icon is shown", () => {
    let icon = wrapper
      .find(Chip)
      .children()
      .find("svg");

    icon.simulate("mouseDown");

    expect(icon).toiEqual(DeleteIcon);
  });
});

/* 
  Favourites: (favourite list and favourite items, two seperate components)
    - list of favourites
    - favourites get deleted when you click the x 
    - a favourite item comes from props
*/
