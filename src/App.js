import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Header from "./assets/Header.svg";
import {
  getQuickestTrainServices,
  getTrainServices
} from "./helpers/apiCaller";
import Results from "./pages/Results";
import Search from "./pages/Search";
import Toolbar from "./components/toolbar/Toolbar";
import { ContextProvider } from "./mainContext";

const StyledHeader = styled.header`
   {
    text-align: center;
    background-image: linear-gradient(0deg, #004e74 0%, #674f66 100%);
    max-width: 100%;
    img {
      max-width: 100%;
    }
  }
`;
class App extends Component {
  state = {
    userPreferences: {
      daysOfTravel: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
      ],
      currentTime: "",
      currentDate: "",
      hoursOfTravel: {
        start: "0900",
        stop: "1900"
      }
    },
    journey: {
      departureStation: "",
      destinationStation: "",
      time: "",
      date: ""
    },
    journeyTimetable: [],
    currentJourney: [],
    serviceAlerts: [],
    animate: "example-enter",
    visible: false,
    quickestJourney: false,
    quickestJourneyDisabled: true,
    virginTrains: true,
    virginTrainsDisabled: false,
    refreshRate: "manual",
    display: {
      search: true,
      results: false
    }
  };

  componentDidMount() {}
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.journey !== this.state.journey) {
      this.getTrains();
    }
  };
  updateDisplay = e => (item, value) => {
    const display = { ...this.state };
    display[item] = value;
    this.setState({ display });
  };
  updateDate = e => {
    const journey = { ...this.state.journey };
    journey.date = e.target.value;
    this.setState({ journey });
  };
  updateTime = e => {
    const journey = { ...this.state.journey };
    journey.time = e.target.value;
    this.setState({ journey });
  };
  updateStation = (stationType, stationDetails) => {
    const journey = { ...this.state.journey };
    journey[stationType] = stationDetails;
    this.setState({ journey });
  };

  getTrains = async () => {
    const { departureStation, destinationStation } = this.state.journey;

    if (departureStation && destinationStation) {
      // reset departureStation to equal the CRS Code
      const departureStationCRS = departureStation.stationCRS;
      const destinationStationCRS = destinationStation.stationCRS;

      const apiCallForTrains = async () =>
        (await this.state.quickestJourney)
          ? await getQuickestTrainServices(
              destinationStationCRS,
              departureStationCRS
            )
          : await getTrainServices(destinationStationCRS, departureStationCRS);

      const result = await apiCallForTrains();
      const currentJourney = await result.trainServices;
      // this.state.quickestJourney
      //   ? await result.departures
      //   : await result.trainServices;
      const serviceAlerts = await result.nrccMessages;

      await this.setState({ currentJourney, serviceAlerts });
    } else {
      console.log("items arent all updated yet");
    }
  };

  addRemoveClasses = () => {
    const animate = !this.state.visible
      ? "example-enter-active"
      : "example-enter";
    this.setState({ animate, visible: !this.state.visible });
  };
  setQuickestJourney = value => {
    this.setState({ quickestJourney: value });
  };
  getVirginTrains = value => {
    this.setState({ virginTrains: value });
  };
  changeRefreshRate = refresh => {
    this.setState({ refreshRate: refresh });
    this.refreshData();
  };
  refreshData = () => {
    if (this.state.refreshRate !== "manual") {
      clearInterval();

      setInterval(() => {
        this.getTrains();
      }, this.state.refreshRate);
    } else {
      this.getTrains();
    }
  };

  render() {
    return (
      <ContextProvider>
        <Grid container className="App" justify="center">
          <Grid item xs={12}>
            <StyledHeader>
              <img src={Header} alt="header" />
            </StyledHeader>
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: "74px" }}>
            <Search
              display={this.state.display.search}
              updateStation={this.updateStation}
              updateDate={this.updateDate}
              updateTime={this.updateTime}
              serviceAlerts={this.state.serviceAlerts}
            />
            <Results
              display={this.state.display.results}
              virginTrains={this.state.virginTrains}
              getVirginTrains={this.getVirginTrains}
              disabled={this.state.virginTrainsDisabled}
              journeyTimetable={this.state.currentJourney}
            />
            <Toolbar />
          </Grid>
        </Grid>
      </ContextProvider>
    );
  }
}

export default App;
