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

  state = {
    disableButton: true
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.departureStation !== prevProps.departureStation ||
      this.props.destinationStation !== prevProps.destinationStation
    ) {
      this.props.destinationStation && this.props.departureStation
        ? this.setState({ disableButton: false })
        : this.setState({ disableButton: true });
    }
  }

  scrollViewable = item => {
    item.scrollIntoView();
  };

  render() {
    const { updateStation, destinationStation, departureStation } = this.props;
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
          disabled={this.state.disableButton}
          variant="raised"
          color="secondary"
          aria-label="Search Trains"
          style={{ marginTop: "30px" }}
          component={Link}
          to={`/${departureStation.stationCRS}/to/${
            destinationStation.stationCRS
          }`}
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
