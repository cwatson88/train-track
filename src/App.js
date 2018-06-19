import React, { Component, Fragment } from "react";
import Grid from'@material-ui/core/Grid'
import "./App.css";
import TrainSearch from "./components/TrainSearch/TrainSearch";
import { getService } from "./helpers/apiCaller";

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
    journeys: [
      {
        departure: {
          station: "London Euston",
          time: "17:30"
        },
        arrival: {
          station: "Birmingham International",
          time: "18:45"
        },
        status: "on time"
      }
    ]
  };

  
  updateDate = e => {
    const userPreferences = { ...this.state.userPreferences };
    userPreferences.currentDate = e.target.value;
    this.setState({ userPreferences });
  };
  updateTime = e => {
    const userPreferences = { ...this.state.userPreferences };
    userPreferences.currentTime = e.target.value;
    this.setState({ userPreferences });
  };

  getTrains = async () => {
    const res = await getService.station("bhi", "2018-06-07", "07:00", "eus");
    console.log(res);
  };

  render() {
    return <Grid container className="App" justify="center">
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
          <TrainSearch updateStation={this.updateStation} updateDate={this.updateDate} updateTime={this.updateTime} />
        </Grid>
        <Fragment>
          {<button onClick={this.getTrains}>click me</button>}
        </Fragment>
      </Grid>;
  }
}

export default App;
