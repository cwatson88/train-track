import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import VirginTrains from "../components/filters/VirginTrains";
import Timetable1 from "../components/timetable/Timetable1";

class Results extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <VirginTrains
          virginTrains={this.props.virginTrains}
          getVirginTrains={this.props.getVirginTrains}
          disabled={this.props.virginTrainsDisabled}
        />
        <Timetable1
          journeyTimetable={this.props.journeyTimetable}
          virginTrains={this.props.virginTrains}
        />
      </Grid>
    );
  }
}

Results.propTypes = {};

export default Results;
