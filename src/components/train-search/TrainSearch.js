import { Grid, Button } from "@material-ui/core";
import { Train } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Component, default as React } from "react";
import StationFinder from "../station/StationFinder";
import styled from "styled-components";

class TrainSearch extends Component {
  render() {
    const { updateStation } = this.props;
    return (
      <Grid container justify="center" alignItems="flex-start" direction="row">
        <Grid item xs={10}>
          <StationFinder
            label="I'm starting at:"
            stationType="departureStation"
            updateStation={updateStation}
          />
        </Grid>
        <Grid item xs={10}>
          <StationFinder
            label="I want to get to:"
            stationType="destinationStation"
            updateStation={updateStation}
          />
        </Grid>
        <Button
          // set an onClick to show the timetable
          variant="raised"
          color="secondary"
          aria-label="Search Trains"
          style={{ marginTop: "30px" }}
        >
          <Train />
          Get Journey!
        </Button>
      </Grid>
    );
  }
}

TrainSearch.propTypes = {};

export default TrainSearch;
