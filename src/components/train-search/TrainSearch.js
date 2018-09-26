import { Grid, Button } from "@material-ui/core";
import { Train } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Component, default as React } from "react";
import StationFinder from "../station/StationFinder";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  && {
    margin: 20px;
  }
`;

class TrainSearch extends Component {
  constructor(props) {
    super(props);
    this.departure = React.createRef();
    this.destination = React.createRef();
  }

  scrollViewable = item => {
    item.scrollIntoView();
  };

  render() {
    const { updateStation, getTrains } = this.props;
    return (
      <Grid container justify="center" alignItems="flex-start" direction="row">
        <StyledGrid item xs={12}>
          <StationFinder
            onClick={() => this.scrollViewable(this.departure.current)}
            ref={this.departure}
            label="I'm starting at:"
            stationType="departureStation"
            updateStation={updateStation()}
          />
        </StyledGrid>
        <StyledGrid item xs={12}>
          <StationFinder
            onClick={() => this.scrollViewable(this.destination.current)}
            ref={this.destination}
            label="I want to get to:"
            stationType="destinationStation"
            updateStation={updateStation()}
          />
        </StyledGrid>
        <Button
          onClick={getTrains()}
          variant="raised"
          color="secondary"
          aria-label="Search Trains"
          style={{ marginTop: "30px" }}
          component={Link}
          to="/results"
        >
          <Train />
          Get Journey!
        </Button>
      </Grid>
    );
  }
}

TrainSearch.propTypes = {};

export default TrainSearch;
