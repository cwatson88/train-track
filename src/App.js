import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./assets/Header.svg";
import Toolbar from "./components/toolbar/Toolbar";
import { ContextConsumer, ContextProvider } from "./mainContext";
import Results from "./pages/Results";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import NetworkStatusMessage from "./shared/NetworkStatusMessage";

const StyledHeader = styled.header`
   {
    text-align: center;
    background-image: linear-gradient(0deg, #004e74 0%, #674f66 100%);
    max-width: 100%;
    img {
      padding-top: 15px;
      max-width: 100%;
    }
  }
`;

const App = props => {
  return (
    <Router>
      <Route
        render={({ location, history }) => (
          <ContextProvider>
            <ContextConsumer>
              {({ state: cxState, actions }) => (
                <Fragment>
                  <NetworkStatusMessage />
                  <StyledHeader>
                    <img src={Header} alt="header" />
                  </StyledHeader>
                  <Switch location={location}>
                    <Route exact path="(/|/index.html)" component={Search} />
                    <Route
                      path="/:departureStation/to/:destinationStation"
                      component={Results}
                    />
                    <Route path="/favourites" component={Favourites} />
                  </Switch>
                  <Toolbar location={location} history={history} />
                </Fragment>
              )}
            </ContextConsumer>
          </ContextProvider>
        )}
      />
    </Router>
  );
};

export default App;
