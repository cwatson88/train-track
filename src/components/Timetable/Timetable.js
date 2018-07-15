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
      <Grid
        container
        justify="center"
        style={{
          marginTop: "20px",
          backgroundColor: "#008fbd",
          color: "white"
        }}
      >
        <Grid item xs={3}>
          {" "}
          <h4 style={{ fontWeight: 100 }}>Leaves</h4>{" "}
        </Grid>
        <Grid item xs={3}>
          {" "}
          <h4 style={{ fontWeight: 100 }}>Arrives</h4>
        </Grid>
        <Grid item xs={3}>
          {" "}
          <h4 style={{ fontWeight: 100 }}>On Platform</h4>
        </Grid>
        <Grid item xs={3}>
          {" "}
          <h4 style={{ fontWeight: 100 }}>Status</h4>
        </Grid>
      </Grid>
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
                <Grid item xs={3}>
                  {" "}
                  {journey.std}
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  {journey.origin.name}
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  {journey.platform}
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  {journey.etd}
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
