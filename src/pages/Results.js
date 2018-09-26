import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Timetable from "../components/timetable/Timetable";
import { getTrainServices } from "../helpers/apiCaller";

class Results extends Component {
  state = {
    journeyDetailst: "",
    journeyTimetable: null
  };
  componentDidMount() {
    const { departure, destination } = this.props.match.params;
    getTrainServices(departure, destination).then(timetable =>
      this.setState({ journeyTimetable: timetable.trainServices })
    );
    // TODO: needs a train like loader!
    // TODO: add the api call here and pass to timetable? OR as state? AND to context state
  }
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
