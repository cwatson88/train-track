import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import ServiceAlerts from "../components/service-alerts/ServiceAlerts";
import TrainSearch from "../components/train-search/TrainSearch";
import { ContextConsumer } from "../mainContext";

class Search extends Component {
  render() {
    return (
      <ContextConsumer>
        {({ state, actions }) => (
          <Grid item xs={12} style={{ ...this.props.style, marginTop: "50px" }}>
            {console.log(this.props.style)}
            <ServiceAlerts serviceAlerts={state.serviceAlerts} />
            <TrainSearch
              departureStation={state.journey.departureStation}
              destinationStation={state.journey.destinationStation}
              updateStation={actions.updateStation}
              getTrains={actions.getTrains}
            />
          </Grid>
        )}
      </ContextConsumer>
    );
  }
}

Search.propTypes = {};

export default Search;
