import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Timetable from "../components/timetable/Timetable";
import { getTrainServices, dataStub } from "../utils/apiCaller";
import styled from "styled-components";

// TODO:style the h1 below
const StyledH1 = styled.h1`
  font-family: Raleway;
`;
class Results extends Component {
  state = {
    journeyTimetable: null,
    offlineTesting: false,
    departureStation: "",
    destinationStation: ""
  };
  // TODO: needs a train like loader!
  componentDidMount() {
    const { departureStation, destinationStation } = this.props.match.params;
    this.setState({ departureStation, destinationStation });
    this.getTrains({ departureStation, destinationStation });
  }

  getTrains = ({ departureStation, destinationStation }) => {
    if (this.state.offlineTesting) {
      this.setState({ journeyTimetable: dataStub.trainServices });
    } else {
      getTrainServices({ departureStation, destinationStation }).then(
        timetable =>
          this.setState({ journeyTimetable: timetable.trainServices })
      );
    }
  };

  render() {
    const {
      match,
      location,
      destinationStation,
      departureStation
    } = this.props;
    return (
      <Grid item xs={12}>
        <StyledH1>
          From {this.state.departureStation} to {this.state.destinationStation}
        </StyledH1>
        {this.state.journeyTimetable && (
          <Timetable journeyTimetable={this.state.journeyTimetable} />
        )}
      </Grid>
    );
  }
}

Results.propTypes = {};

export default Results;
