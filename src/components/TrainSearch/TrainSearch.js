import { Component, default as React } from "react";
import Grid from '@material-ui/core/Grid'
import DatePicker from "../Widgets/DatePicker";
import TimePicker from "../Widgets/TimePicker";
import StationFinder from "../Station/StationFinder";

class TrainSearch extends Component {
  render() {
    const align = {
      paddingTop:'16px'
    }
    const { updateDate, updateTime, updateStation } = this.props;
    return <Grid container justify="center" alignItems="flex-start" direction="row">
        <Grid item>
        I want to go from: <StationFinder label="Station" stationType="departureStation" updateStation={updateStation} />
        </Grid>
        <Grid item>
        to: <StationFinder label="Station" stationType="destinationStation" updateStation={updateStation} />
        </Grid>
        <Grid item style={align}>
          on: <DatePicker label="Train Date" updateDate={updateDate} />
        </Grid>
        <Grid item style={align}>
          at: <TimePicker label="Train Time" updateTime={updateTime} />
        </Grid>
      </Grid>;
  }
}

TrainSearch.propTypes = {};

export default TrainSearch;
