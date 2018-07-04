import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";

const Timetable = props => {
  const { journeyTimetable } = props;

  console.log(journeyTimetable);

  const stripes = { backgroundColor: "grey" };
  const styles2 = { backgroundColor: "yellow" };
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
          <h4 style={{ fontWeight: 100 }}>At</h4>
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
      {journeyTimetable &&
        journeyTimetable.departures.all.map((journey, index) => {
          const striped = index % 2 === 0 ? stripes : null;
          return <CSSTransition transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} timeout={300}>
              <Grid container justify="center" key={journey.train_uid} style={{ ...timeTableRows, ...striped }}>
                <Grid item xs={3} style={{ ...stripes, ...styles2 }}>
                  {" "}
                  {journey.expected_departure_time}
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  {journey.origin_name}
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  {journey.platform}
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  {journey.status}
                </Grid>
              </Grid>
            </CSSTransition>;
        })}
    </Grid>
  );
};

Timetable.propTypes = {
  journeyTimetable: PropTypes.object
};

export default Timetable;
