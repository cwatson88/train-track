import { Component, default as React } from "react";
import { Grid, Switch } from "@material-ui/core";
import DatePicker from "../Widgets/DatePicker";
import TimePicker from "../Widgets/TimePicker";
import StationFinder from "../Station/StationFinder";
// import { DirectionsRailway } from "@material-ui/icons";

class TrainSearch extends Component {
  render() {
    const align = {
      paddingTop: "16px"
    };
    const { updateDate, updateTime, updateStation } = this.props;
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
