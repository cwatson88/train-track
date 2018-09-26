import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Service from "./Service";

const Timetable = props => {
  const { journeyTimetable } = props;
  return (
    <Grid>
      {journeyTimetable &&
        journeyTimetable.map(currentJourney => (
          <Fragment key={currentJourney.serviceID}>
            <Grid container justify="center">
              <Service journey={currentJourney} />
            </Grid>
          </Fragment>
        ))}
    </Grid>
  );
};

Timetable.propTypes = {
  currentJourney: PropTypes.array
};

export default Timetable;
