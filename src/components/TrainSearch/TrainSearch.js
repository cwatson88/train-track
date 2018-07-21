import { Grid } from "@material-ui/core";
import { Component, default as React } from "react";
import StationFinder from "../Station/StationFinder";
// import { DirectionsRailway } from "@material-ui/icons";

class TrainSearch extends Component {
  render() {
    const align = {
      paddingTop: "16px"
    };
    const { updateStation } = this.props;
    return (
      <Grid container justify="center" alignItems="flex-start" direction="row">
        <Grid item>
          <span>
            <i>I want to go from:</i>
          </span>{" "}
          <StationFinder
            label="Station"
            stationType="departureStation"
            updateStation={updateStation}
          />
        </Grid>
        <Grid item>
          <span>
            {" "}
            <i>to:</i>
          </span>{" "}
          <StationFinder
            label="Station"
            stationType="destinationStation"
            updateStation={updateStation}
          />
        </Grid>
        {/* <Grid item style={align}>
          <span>
            <i>on:</i>
          </span>{" "}
          <DatePicker label="Train Date" updateDate={updateDate} />
        </Grid>
        <Grid item style={align}>
          <span>
            <i>at:</i>
          </span>{" "}
          <TimePicker label="Train Time" updateTime={updateTime} />
        </Grid> */}
      </Grid>
    );
  }
}

TrainSearch.propTypes = {};

export default TrainSearch;
