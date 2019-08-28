import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Timetable from "../components/timetable/Timetable";
import { getTrainServices, dataStub } from "../utils/apiCaller";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: Raleway;
`;
const Results = props => {
  const [journeyTimetable, setJourneyTimetable] = useState(null);
  const [offlineTesting, setOfflineTesting] = useState(false);
  const [departureStation, setDepartureStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");

  useEffect(() => {
    const { departureStation, destinationStation } = props.match.params;
    setDepartureStation(departureStation);
    setDestinationStation(destinationStation);
    const setTrains = () => getTrains({ departureStation, destinationStation });
    setTrains();
  }, [props.match.params]);

  const getTrains = async ({ departureStation, destinationStation }) => {
    try {
      const { GetBoardWithDetailsResult } = await getTrainServices({
        departureStation,
        destinationStation
      });
      setJourneyTimetable(GetBoardWithDetailsResult.trainServices);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid item xs={12}>
      <StyledH1>
        From {departureStation} to {destinationStation}
      </StyledH1>
      {journeyTimetable && <Timetable journeyTimetable={journeyTimetable} />}
    </Grid>
  );
};

export default Results;
