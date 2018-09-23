import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import ServiceAlerts from "../components/service-alerts/ServiceAlerts";
import TrainSearch from "../components/train-search/TrainSearch";

class Search extends Component {
  render() {
    return (
      <Grid item xs={12} style={{ marginTop: "50px" }}>
        <ServiceAlerts serviceAlerts={this.props.serviceAlerts} />
        <TrainSearch
          updateStation={this.props.updateStation}
          updateDate={this.props.updateDate}
          updateTime={this.props.updateTime}
        />
      </Grid>
    );
  }
}

Search.propTypes = {};

export default Search;
