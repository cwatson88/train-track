import React, { Component, createContext } from "react";
// import Button from './Button';

const ContextContext = createContext();

const ContextConsumer = ContextContext.Consumer;

class ContextProvider extends Component {
  state = {
    count: 0
  };

  actions = {
    incrementCount: () => this.incrementCount(),
    decrementCount: () => this.decrementCount()
  };

  incrementCount = () => {
    this.setState(
      prevState => {
        return { count: prevState.count + 1 };
      },
      () => console.log("INCREMENT", this.state.count)
    );
  };
  decrementCount = () => {
    this.setState(
      prevState => {
        return { count: prevState.count - 1 };
      },
      () => console.log("DECREMENT", this.state.count)
    );
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
