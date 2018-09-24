import React, { Component, createContext } from "react";
import {
  getQuickestTrainServices,
  getTrainServices
} from "./helpers/apiCaller";

const ContextContext = createContext();

const ContextConsumer = ContextContext.Consumer;

class ContextProvider extends Component {
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

  actions = {
    updateDisplay: () => this.updateDisplay,
    updateDate: () => this.updateDate,
    updateTime: () => this.updateDisplay,
    updateStation: () => this.updateStation,
    addRemoveClasses: () => this.addRemoveClasses,
    setQuickestJourney: () => this.setQuickestJourney,
    getVirginTrains: () => this.getVirginTrains,
    changeRefreshRate: () => this.changeRefreshRate,
    refreshData: () => this.refreshData,
    getTrains: () => this.getTrains
  };

  updateStation = (stationType, stationDetails) => {
    const journey = { ...this.state.journey };
    journey[stationType] = stationDetails;
    this.setState({ journey });
  };

  addRemoveClasses = () => {
    const animate = !this.state.visible
      ? "example-enter-active"
      : "example-enter";
    this.setState({ animate, visible: !this.state.visible });
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

  getTrains = async () => {
    const { departureStation, destinationStation } = this.state.journey;
    console.log("both are set");
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

  render() {
    const { Provider } = ContextContext;
    const { state, actions } = this;
    return (
      <Provider value={{ state, actions }}>{this.props.children}</Provider>
    );
  }
}

export { ContextProvider, ContextConsumer };
