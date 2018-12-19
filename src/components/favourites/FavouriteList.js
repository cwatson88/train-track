import React, { Component } from "react";
import FavouriteItem from "./FavouriteItem";

class FavouriteList extends Component {
  render() {
    const favourites = [
      { departureStation: "BHI", destinationStation: "Eus" },
      { departureStation: "EUS", destinationStation: "BHI" }
    ];
    return (
      <div>
        {favourites.map((item, index) => (
          <FavouriteItem
            key={index}
            destinationStation={item.destinationStation}
            departureStation={item.departureStation}
          />
        ))}
      </div>
    );
  }
}

export default FavouriteList;
