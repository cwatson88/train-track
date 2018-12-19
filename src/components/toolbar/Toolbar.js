import React, { Component } from "react";
import styled from "styled-components";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TrainIcon from "@material-ui/icons/Train";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RefreshIcon from "@material-ui/icons/Refresh";
import CurrentIcon from "@material-ui/icons/PlayCircleOutline";
import { Link } from "react-router-dom";

const StyledNavigation = styled(BottomNavigation)`
  &&& {
    position: fixed;
    bottom: 0;
    overflow: hidden;
    // background-color: #804578e3;
    background-color: rgba(152, 30, 88, 0.89);
    width: 100%;
    color: white;
    border-radius: 50px 50px 0 0;
    box-shadow: 0px -1px 8px 0px #00000030;
    && button {
      color: white;
      font-family: Raleway;
    }
  }
`;

class Toolbar extends Component {
  state = { value: 0 };
  handleChange = (event, value) => {
    this.props.history.push(value);
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <StyledNavigation value={value} onChange={this.handleChange} showLabels>
        <BottomNavigationAction
          value="/"
          label="New Journey"
          icon={<TrainIcon />}
        />
        <BottomNavigationAction
          value="/current"
          label="Current Journey"
          icon={<CurrentIcon />}
        />
        <BottomNavigationAction
          value="/favourites"
          label="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          value="/recent"
          label="Recent"
          icon={<RefreshIcon />}
        />
      </StyledNavigation>
    );
  }
}

export default Toolbar;
