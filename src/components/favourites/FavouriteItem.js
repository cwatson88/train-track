import React, { Component } from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";

class FavouriteItem extends Component {
  state = {
    icon: <FavoriteIcon />,
    delete: false
  };
  handleClick = () => {
    console.log("clicked");
  };
  handleDelete = () => {
    if (this.state.delete) {
      console.log("deleted");
    } else {
      console.log("Nah don't delete brah");
    }
  };

  handleButtonPress = () => {
    this.buttonPressTimer = setTimeout(
      () => this.setState({ icon: <DeleteIcon />, delete: true }),
      1300
    );
  };

  handleButtonRelease = () => {
    clearTimeout(this.buttonPressTimer);
  };

  render() {
    return (
      <Chip
        label={`${this.props.departureStation} to ${
          this.props.destinationStation
        }`}
        onClick={this.handleClick}
        onDelete={this.handleDelete}
        deleteIcon={this.state.icon}
        color="secondary"
        onTouchStart={this.handleButtonPress}
        onTouchEnd={this.handleButtonRelease}
        onMouseDown={this.handleButtonPress}
        onMouseUp={this.handleButtonRelease}
      />
    );
  }
}

FavouriteItem.propTypes = {
  destinationStation: PropTypes.string,
  departureStation: PropTypes.string
};

export default FavouriteItem;
