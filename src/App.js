import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
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

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location, history }) => (
            <ContextProvider>
              <ContextConsumer>
                {({ state: cxState, actions }) => (
                  <Grid
                    container
                    style={{ textAlign: "center" }}
                    className="App"
                    justify="center"
                  >
                    <Grid item xs={12}>
                      <NetworkStatusMessage />
                      <StyledHeader>
                        <img src={Header} alt="header" />
                      </StyledHeader>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: "74px" }}>
                      <Switch location={location}>
                        <Route
                          exact
                          path="(/|/index.html)"
                          render={props => <Search {...props} />}
                        />
                        <Route
                          path="/:departureStation/to/:destinationStation"
                          render={props => <Results {...props} />}
                        />
                        <Route
                          path="/favourites"
                          render={props => <Favourites {...props} />}
                        />
                      </Switch>
                      <Toolbar location={location} history={history} />
                    </Grid>
                  </Grid>
                )}
              </ContextConsumer>
            </ContextProvider>
          )}
        />
      </Router>
    );
  }
}

export default App;
