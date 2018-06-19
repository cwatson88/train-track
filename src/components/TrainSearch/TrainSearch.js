import { Component, default as React } from "react";
import Grid from '@material-ui/core/Grid'
import DatePicker from "../Widgets/DatePicker";
import TimePicker from "../Widgets/TimePicker";
import StationFinder from "../Station/StationFinder";

class TrainSearch extends Component {
  componentDidUpdate() {
    console.log("test");
  }
  render() {
    const { updateDate, updateTime } = this.props;
    return (
      <Grid container justify="center" alignItems="center" direction="row" >
        <Grid item xs={4}>
          <StationFinder label="findStation"/>
        </Grid>
        <Grid item xs={4}>
          <DatePicker label="Train Date" updateDate={updateDate} />
        </Grid>
        <Grid item xs={4}>
          <TimePicker label="Train Time" updateTime={updateTime} />
        </Grid>
      </Grid>
    );
  }
}

TrainSearch.propTypes = {};

export default TrainSearch;
