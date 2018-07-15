import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import TrainSearch from "./components/TrainSearch/TrainSearch";
import {
  getTrainServices,
  getQuickestTrainServices
} from "./helpers/apiCaller";
// import { Now } from "./helpers/timeDate";
import Timetable from "./components/Timetable/Timetable";
import ServiceAlerts from "./components/ServiceAlerts/ServiceAlerts";
import FastestJourney from "./components/Filters/FastestJourney";
import VirginTrains from "./components/Filters/VirginTrains";
import Refresh from "./components/Refresh";
import { WifiTethering } from "@material-ui/icons";

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
    refreshRate: "manual"
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.journey !== this.state.journey) {
      this.getTrains();
    }
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
    const {
      date,
      departureStation,
      destinationStation,
      time
    } = this.state.journey;

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
      <Grid container className="App" justify="center">
        <Grid item xs={12}>
          <header className="App-header">
            <h1 className="App-title">
              ===Main Train===
              <br />
              <span
                onClick={this.addRemoveClasses}
                className={this.state.animate}
                role="img"
                aria-label="train emoji"
              >
                &#x1F686;
              </span>
            </h1>
          </header>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "50px" }}>
          <ServiceAlerts serviceAlerts={this.state.serviceAlerts} />
          <TrainSearch
            updateStation={this.updateStation}
            updateDate={this.updateDate}
            updateTime={this.updateTime}
          />
        </Grid>
        <Grid item xs={12}>
          <VirginTrains
            virginTrains={this.state.virginTrains}
            getVirginTrains={this.getVirginTrains}
            disabled={this.state.virginTrainsDisabled}
          />

          <FastestJourney
            quickestJourney={this.state.quickestJourney}
            setQuickestJourney={this.setQuickestJourney}
            disabled={this.state.fastestJourneyDisabled}
          />
          <Refresh
            refreshRate={this.state.refreshRate}
            changeRefreshRate={this.changeRefreshRate}
          />
          <div onClick={this.refreshTrains}>
            <WifiTethering className="live" />Live
          </div>

          <Timetable
            journeyTimetable={this.state.currentJourney}
            virginTrains={this.state.virginTrains}
          />
        </Grid>
      </Grid>
    );
  }
}

export default App;
