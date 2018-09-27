import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Service from "./Service";
import { Trail, config } from "react-spring";

const Timetable = props => {
  const { journeyTimetable } = props;
  return (
    <Grid>
      <Trail
        native
        from={{ opacity: 0, transform: "translate3d(0px,0,0)" }}
        to={{ opacity: 1, transform: "translate3d(100px,0,0)" }}
        keys={journeyTimetable.map(item => item.serviceID)}
        config={config.molasses}
      >
        {journeyTimetable.map(currentJourney => styles => (
          <Fragment key={currentJourney.serviceID}>
            <Grid container justify="center" style={{...styles}}>
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
