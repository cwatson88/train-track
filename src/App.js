import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import TrainSearch from "./components/TrainSearch/TrainSearch";
import { getService } from "./helpers/apiCaller";
import { Now } from "./helpers/timeDate";
import Timetable from "./components/Timetable/Timetable";

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
    currentJourney: ""
  };

  componentDidMount = () => {
    const journey = { ...this.state.journey };
    journey.time = Now.time;
    journey.date = Now.date("-");
    this.setState({ journey });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.journey !== this.state.journey){
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
    if (date && departureStation && destinationStation && time) {
      // reset departureStation to equal the CRS Code
      // console.log(departureStation);
      const departureStationCRS = departureStation.stationCRS;
      const destinationStationCRS = destinationStation.stationCRS;

      // console.log(getService.station(departureStationCRS, date, time, destinationStationCRS))

      const currentJourney 
      = await getService.live(
        departureStationCRS,
        date,
        time,
        destinationStationCRS
      );
      await this.setState({ currentJourney });
      // getService.station("bhi", "2018-06-07", "07:00", "eus")
    } else {
      console.log("items arent all updated yet");
    }
  };

  render() {
    return (
      <Grid container className="App" justify="center">
        <Grid item xs={12}>
          <header className="App-header">
            <h1 className="App-title">
              Welcome to Train Buddy..
              <span role="img" aria-label="bumped head emoji">
                &#x1F631;
              </span>
              <span role="img" aria-label="train emoji">
                &#x1F686;
              </span>
            </h1>
          </header>
        </Grid>
        <Grid item xs={12}>
          <TrainSearch
            updateStation={this.updateStation}
            updateDate={this.updateDate}
            updateTime={this.updateTime}
          />
        </Grid>
        <Grid>
          <Timetable journeyTimetable={this.state.currentJourney} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
