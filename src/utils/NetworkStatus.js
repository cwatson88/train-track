import React, { Component } from "react";

class NetworkStatus extends Component {
  state = {
      network: window.navigator.connection,
      online:true
  };
    componentDidMount() {
        window.addEventListener("online", () => { setState({online:navigator.onLine })})
    window.navigator.connection.onchange = () => {
      this.setState({ network: window.navigator.connection });
    };
  }
  render() {
    const { network } = this.state;
    return (
      <div>
        <p>Your download speed is:{network.downlink}</p>
        <p>your network is equivilent to: {network.effectiveType}</p>
        <p>your ping is: {network.rtt}</p>
      </div>
    );
  }
}

export default NetworkStatus;
