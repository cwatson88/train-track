import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Timetable from "../components/timetable/Timetable";

class Results extends Component {
  componentDidMount() {
    // TODO: needs a train like loader!
    // TODO: add the api call here and pass to timetable? OR as state? AND to context state
  }
  render() {
    return (
      <Grid item xs={12} style={{ ...this.props.style }}>
        <Timetable
          journeyTimetable={this.props.journeyTimetable}
          virginTrains={this.props.virginTrains}
        />
      </Grid>
    );
  }
}

Results.propTypes = {};

export default Results;
