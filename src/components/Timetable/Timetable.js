import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { ContextConsumer } from "../../mainContext";
import Service from "./Service";

const Timetable = props => {
  return (
    <ContextConsumer>
      {({ state, actions }) => {
        const { currentJourney } = state;

        return (
          <Grid>
            {currentJourney &&
              currentJourney.map((journey, index) => {
                return (
                  <Fragment key={journey.serviceID}>
                    <Grid container justify="center">
                      <Service journey={journey} />
                    </Grid>
                  </Fragment>
                );
              })}
          </Grid>
        );
      }}
    </ContextConsumer>
  );
};

Timetable.propTypes = {
  currentJourney: PropTypes.array,
  virginTrains: PropTypes.bool
};

export default Timetable;
