import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { ContextConsumer } from "../../mainContext";
import Service from "./Service";

const Timetable = props => {
  const stripes = { backgroundColor: "#ccd8a8" };
  const timeTableRows = { paddingTop: "20px" };

  return (
    <ContextConsumer>
      {({ state, actions }) => {
        const { currentJourney } = state;

        return (
          <Grid>
            {currentJourney &&
              currentJourney.map((journey, index) => {
                const striped = index % 2 === 0 ? stripes : null;
                return (
                  <Fragment key={journey.serviceID}>
                    <Grid
                      container
                      justify="center"
                      style={{ ...timeTableRows, ...striped }}
                    >
                      <Service />
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
