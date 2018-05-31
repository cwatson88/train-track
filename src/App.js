import React, { Component, Fragment } from "react";
import "./App.css";

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
        <Fragment>
          {
            this.state.journeys.map(
            (journey) => (
              <div> { journey.departure.time } </div>
            ) 
          )}
        </Fragment>
      </div>
    );
  }
}

export default App;
