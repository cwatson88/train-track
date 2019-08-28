import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Service from "./Service";
import { useSprings, animated } from "react-spring";
import { isArray } from "util";

const Timetable = ({ journeyTimetable }) => {
  const servicesArray = Array.isArray(journeyTimetable.service)
    ? journeyTimetable.service
    : [journeyTimetable.service];

  // const springs = useSprings(
  //   servicesArray.length,
  //   servicesArray.map(item => ({ opacity: item.opacity }))
  // );

  return (
    <Fragment>
      {servicesArray.map(currentJourney => (
        <Fragment key={currentJourney.rid}>
          <Grid container justify="center">
            <Service journey={currentJourney} />
          </Grid>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Timetable;
