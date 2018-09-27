import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Timetable from "../components/timetable/Timetable";
import { getTrainServices, dataStub } from "../helpers/apiCaller";

class Results extends Component {
  state = {
    journeyDetailst: "",
    journeyTimetable: null,
    offlineTesting: true
  };
  // TODO: needs a train like loader!
  componentDidMount() {
    const { departureStation, destinationStation } = this.props.match.params;
    this.getTrains({ departureStation, destinationStation });
  }

  getTrains = ({ departureStation, destinationStation }) => {
    if (this.state.offlineTesting) {
      this.setState({ journeyTimetable: dataStub.trainServices });
    } else {
      getTrainServices({ departureStation, destinationStation }).then(
        timetable =>
          this.setState({ journeyTimetable: timetable.trainServices })
      );
    }
  };

  render() {
    const { match, location, styles } = this.props;
    return (
      <Grid item xs={12} style={{ ...styles }}>
        {this.state.journeyTimetable && (
          <Timetable journeyTimetable={this.state.journeyTimetable} />
        )}
      </Grid>
    );
  }
}

Results.propTypes = {};

export default Results;
