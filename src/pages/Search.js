import { Grid } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import ServiceAlerts from "../components/service-alerts/ServiceAlerts";
import TrainSearch from "../components/train-search/TrainSearch";
import { ContextConsumer } from "../mainContext";

const Search = ({ styles }) => (
  <ContextConsumer>
    {({ state: cxState, actions }) => (
      <Grid item xs={12} style={{ ...styles, marginTop: "50px" }}>
        <ServiceAlerts serviceAlerts={cxState.serviceAlerts} />
        <TrainSearch
          departureStation={cxState.journey.departureStation}
          destinationStation={cxState.journey.destinationStation}
          updateStation={actions.updateStation}
          getTrains={actions.getTrains}
        />
      </Grid>
    )}
  </ContextConsumer>
);

export default Search;
