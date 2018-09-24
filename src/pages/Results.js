import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Timetable from "../components/timetable/Timetable";

class Results extends Component {
  render() {
    return (
      <Grid item xs={12}>
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
