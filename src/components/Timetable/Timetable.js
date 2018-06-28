import React from 'react';
import PropTypes from 'prop-types';
import { Grid, List, ListItem } from '@material-ui/core';

const Timetable = props => {
    const { journeyTimetable} = props

    return <Grid>
        <List>
          {journeyTimetable && journeyTimetable.departures.all.map(journey => (
          <ListItem key={journey.train_uid}>
          <p> {journey.expected_departure_time}.. </p>
          <br/>
          <p> {journey.origin_name}</p>
          </ListItem>
          ))}
        </List>
      </Grid>;
};

Timetable.propTypes = {
    journeyTimetable:PropTypes.object
};

export default Timetable;