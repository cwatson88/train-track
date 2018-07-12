import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import TrainSearch from "./components/TrainSearch/TrainSearch";
import { getTrainServices } from "./helpers/apiCaller";
import { Now } from "./helpers/timeDate";
import Timetable from "./components/Timetable/Timetable";
import ServiceAlerts from "./components/ServiceAlerts/ServiceAlerts";
import TrainCompany from "./components/Filters/TrainCompany";

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
    trainCompany: {}
  };

  componentDidMount = () => {
    const journey = { ...this.state.journey };
    journey.time = Now.time;
    journey.date = Now.date("-");
    this.setState({ journey });
    console.log("mounted");
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

      const result = await getTrainServices(
        destinationStationCRS,
        departureStationCRS
      );
      const currentJourney = await result.trainServices;
      const serviceAlerts = await result.nrccMessages;
      await this.setState({ currentJourney, serviceAlerts });
    } else {
      console.log("items arent all updated yet");
    }
  };
  updateTrainCompany(trainCompany) {
    console.log(trainCompany);
    this.setState({ trainCompany });
    // this.state.currentJourney.flter(
    //   service => service.operatorCode === trainCompany.ATOC
    // );
  }
  addRemoveClasses = () => {
    const animate = !this.state.visible
      ? "example-enter-active"
      : "example-enter";
    this.setState({ animate, visible: !this.state.visible });
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
          <TrainCompany updateTrainCompany={this.updateTrainCompany} />
          <Timetable journeyTimetable={this.state.currentJourney} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
