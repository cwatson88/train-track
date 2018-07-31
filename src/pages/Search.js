import React, { Component } from "react";
import { Grid, Slide } from "@material-ui/core";
import ServiceAlerts from "../components/service-alerts/ServiceAlerts";
import TrainSearch from "../components/train-search/TrainSearch";

class Search extends Component {
  render() {
    const { display } = this.props;
    return (
      <Slide direction="left" in={display} mountOnEnter unmountOnExit>
        <Grid item xs={12} style={{ marginTop: "50px" }}>
          <ServiceAlerts serviceAlerts={this.props.serviceAlerts} />
          <TrainSearch
            updateStation={this.props.updateStation}
            updateDate={this.props.updateDate}
            updateTime={this.props.updateTime}
          />
        </Grid>
      </Slide>
    );
  }
}

Search.propTypes = {};

export default Search;
