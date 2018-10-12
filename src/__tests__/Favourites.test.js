import { shallow } from "enzyme";
import React from "react";
import FavouriteList from "../components/favourites/FavouriteList";
import FavouriteItem from "../components/favourites/FavouriteItem";
import "../setupTests";

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
  const wrapper = shallow(<FavouriteItem />);
  test("Favourite components to mount", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

/* 
  Favourites: (favourite list and favourite items, two seperate components)
    - list of favourites
    - favourites get deleted when you click the x 
    - a favourite item comes from props
*/
