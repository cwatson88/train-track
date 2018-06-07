import React, { Component, Fragment } from "react";
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
  }

  getTrains = async() => {
    const res = await getService.station("bhi", "2018-06-07", "07:00", "eus");
    console.log(res)  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome to Train Pain...
            <span role="img" aria-label="bumped head emoji">
              &#x1F631;
            </span>
            <span role="img" aria-label="train emoji">
              &#x1F686;
            </span>
          </h1>
        </header>
        <TrainSearch></TrainSearch>
        <Fragment>
          {
            <button onClick={this.getTrains}>click me</button> 
          }
        </Fragment>
      </div>
    );
  }
}

export default App;
