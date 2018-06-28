import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import crsCodes from "../../crsCode";
import { List, ListItem } from "@material-ui/core";
import { Z_DEFAULT_STRATEGY } from "zlib";

class StationFinder extends Component {
  state = {
    stations: [],
    searchBoxValue: "",
    stationCRS: "",
    stationFound: false
  };
  /**
   * Auto complete to find the station from the crsCodes file
   * when found they are then put into an array of stations
   */
  findStation = e => {
    this.setState({stationFound:false})
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
  };
  /**
   * Add the selected station from the auto complete list to state
   * Set the top level state of the station (updateStation)
   */
  setStation = (e, stationCRS, stationName) => {
    const { stationType, updateStation } = this.props
    updateStation(stationType,
      {stationName,stationCRS}
    );
    this.setState({
      searchBoxValue: stationName,
      stations: [],
      stationCRS,
      stationFound: true
    });
  };

  /**
   * return a list of stations for the autocomplete
   */
  getStationList = () => {
    if (this.state.stations.length > 0) {
      return this.state.stations.map(station => (
        <ListItem key={station["CRS Code"]}
          onClick={e =>
            this.setStation(
              e,
              station["CRS Code"],
              station["Station Name"]
            )
          }
        >
          {station["CRS Code"]}-
          {station["Station Name"]}
        </ListItem>
      ));
    } else {
      return "No Stations Found";
    }
  };
  handleSubmit(e) {
    e.preventDefault();
  }
  
  render() {
    const { searchBoxValue } = this.state;
    const { label } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <TextField
            style={{ width: "300px" }}
            id="with-placeholder"
            label={label}
            type="search"
            margin="normal"
            onChange={this.findStation}
            value={searchBoxValue}
          />
          <div
            style={{
              maxHeight: "180px",
              overflow: "scroll",
              backgroundColor: "#eaeaea",
              width: "300px"
            }}
          >
          {/* if there is something in the box and therea */}
           { this.state.searchBoxValue.length > 0 && !this.state.stationFound && <List>{this.getStationList()}</List>} 
          </div>
        </form>
      </Fragment>
    );
  }
}

StationFinder.propTypes = {};

export default StationFinder;
