import { Button } from "@material-ui/core";
import { Train } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import StationFinder from "../station/StationFinder";
import styled from "styled-components";

const TrainSearch = ({
  updateStation,
  destinationStation,
  departureStation
}) => {
  const departure = React.createRef();
  const destination = React.createRef();

  const [disableButton, setDisableButton] = useState(true);

  useEffect(
    () =>
      setDisableButton(destinationStation && departureStation ? false : true),
    [departureStation, destinationStation]
  );

  const scrollViewable = item => {
    item.scrollIntoView();
  };

  return (
    <Fragment>
      <StationFinder
        onClick={() => scrollViewable(departure.current)}
        ref={departure}
        label="I'm starting at:"
        stationType="departureStation"
        updateStation={updateStation()}
      />
      <StationFinder
        onClick={() => scrollViewable(destination.current)}
        ref={destination}
        label="I want to get to:"
        stationType="destinationStation"
        updateStation={updateStation()}
      />
      <Button
        disabled={disableButton}
        variant="contained"
        color="secondary"
        aria-label="Search Trains"
        style={{ marginTop: "30px" }}
        component={Link}
        to={`/${departureStation.stationCRS}/to/${destinationStation.stationCRS}`}
      >
        <Train />
        Get Journey!
      </Button>
    </Fragment>
  );
};

export default TrainSearch;
