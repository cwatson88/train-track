import React, { Component } from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

class FavouriteList extends Component {
  handleClick = () => {
    console.log("clicked");
  };
  handleDelete = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <Chip
          label={`${this.props.departureStation} to ${
            this.props.destinationStation
          }}`}
          onClick={this.handleClick}
          onDelete={this.handleDelete}
          deleteIcon={<DoneIcon />}
        />
      </div>
    );
  }
}

FavouriteList.propTypes = {};

export default FavouriteList;
