import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Service from "./Service";
import { Trail, config } from "react-spring";

const Timetable = props => {
  const {
    journeyTimetable: { service }
  } = props;
  return (
    <Grid>
      <Trail
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        keys={service.map(item => item.rid)}
        config={config.molasses}
      >
        {service.map(currentJourney => styles => (
          <Fragment key={currentJourney.rid}>
            <Grid container justify="center" style={styles}>
              <Service journey={currentJourney} />
            </Grid>
          </Fragment>
        ))}
      </Trail>
    </Grid>
  );
};

Timetable.propTypes = {
  currentJourney: PropTypes.array
};

export default Timetable;
