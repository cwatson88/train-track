import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

const Timetable = props => {
  const { journeyTimetable, virginTrains } = props;

  let journeyResults = journeyTimetable;

  if (virginTrains) {
    journeyResults = journeyTimetable.filter(
      journey => journey.operator === "Virgin Trains"
    );
  }

  const stripes = { backgroundColor: "#ccd8a8" };
  // const styles2 = { backgroundColor: "yellow" };
  const timeTableRows = { paddingTop: "20px" };

  return (
    <Grid>
      {journeyResults &&
        journeyResults.map((journey, index) => {
          const striped = index % 2 === 0 ? stripes : null;
          return (
            <Fragment key={journey.serviceID}>
              <Grid
                container
                justify="center"
                style={{ ...timeTableRows, ...striped }}
              >
                <Grid item xs={3} id="leaves-at">
                  {" "}
                  {journey.std}
                </Grid>
                <Grid item xs={3} id="platform">
                  {" "}
                  {journey.origin.name}
                </Grid>
                <Grid item xs={3} id="final-destination">
                  {" "}
                  {journey.platform}
                </Grid>
                <Grid item xs={3} id="status">
                  {" "}
                  {journey.etd}
                </Grid>
              </Grid>
              <Grid
                container
                justify="center"
                style={{ ...timeTableRows, ...striped }}
              >
                <Grid item xs={6}>
                  ALARM
                </Grid>
                <Grid item xs={6}>
                  INFO
                </Grid>
              </Grid>
            </Fragment>
          );
        })}
    </Grid>
  );
};

Timetable.propTypes = {
  journeyTimetable: PropTypes.array,
  virginTrains: PropTypes.bool
};

export default Timetable;
