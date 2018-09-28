import React, { Component } from "react";
import { ContextConsumer } from "./mainContext";

class BannerNotification extends Component {
  render() {
    return <ContextConsumer>{({ state, actions }) => <div />}</ContextConsumer>;
  }
}

export default BannerNotification;
