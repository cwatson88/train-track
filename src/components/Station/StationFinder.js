import React, { Component } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import crsCodes from "../../crsCode";
import { List, ListItem } from "@material-ui/core";

class StationFinder extends Component {
  state = {
    stations: [],
    searchBoxValue: "",
    stationCRS: ""
  };

  findStation = e => {
    const searchString = e.target.value;
    const stationSearch = crsCodes.filter(item => {
      const currentCrs = item["CRS Code"].toUpperCase();
      const currentStation = item["Station Name"].toUpperCase();
      if (
        searchString.length > 1 &&
        (currentCrs.includes(searchString.toUpperCase()) ||
          currentStation.includes(searchString.toUpperCase()))
      ) {
        return item;
      }
    });
    this.setState({ stations: stationSearch, searchBoxValue: searchString });
    console.log(stationSearch);
  };

  setStation = (e, crs) => {
    console.log(crs, e.target);
    this.setState({
      searchBoxValue: e.target.innerText,
      stations: [],
      stationCRS: crs
    });
  };

  getStationList = () => {
    if(this.state.stations.length > 0) {
      return this.state.stations.map(station => (
        <ListItem onClick={e => this.setStation(e, station["CRS Code"])}>
          {station["CRS Code"]}-
          {station["Station Name"]}
        </ListItem>
      )
    )
  }else {
    return 'No Stations Found'
  }
  }

  render() {
    const { searchBoxValue } = this.state;
    return (
      <div>
        <form action="">
          <TextField
            style={{ width: "300px" }}
            id="with-placeholder"
            label="Station"
            placeholder="Find Station"
            type="search"
            margin="normal"
            onChange={this.findStation}
            value={searchBoxValue}
          />
          <List>{
            this.getStationList()
          }</List>
        </form>
      </div>
    );
  }
}

StationFinder.propTypes = {};

export default StationFinder;
