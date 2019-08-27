import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Service from "./Service";
import { useSprings, animated } from "react-spring";

const Timetable = props => {
  const {
    journeyTimetable: { service }
  } = props;

  console.log(service);

  const springs = useSprings(
    service.length,
    service.map(item => ({ opacity: item.opacity }))
  );

  return springs.map(props => (
    <Grid>
      <animated.div style={props}>
        {service.map(currentJourney => styles => (
          <Fragment key={currentJourney.rid}>
            <Grid container justify="center" style={styles}>
              <Service journey={currentJourney} />
            </Grid>
          </Fragment>
        ))}
      </animated.div>
    </Grid>
  ));
};

Timetable.propTypes = {
  currentJourney: PropTypes.array
};

export default Timetable;
