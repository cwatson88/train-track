import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./assets/Header.svg";
import Toolbar from "./components/toolbar/Toolbar";
import { ContextConsumer, ContextProvider } from "./mainContext";
import Results from "./pages/Results";
import Search from "./pages/Search";
import { Transition, Spring } from "react-spring";

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
          render={({ location }) => (
            <ContextProvider>
              <ContextConsumer>
                {({ state, actions }) => (
                  <Grid container className="App" justify="center">
                    <Grid item xs={12}>
                      <StyledHeader>
                        <img src={Header} alt="header" />
                      </StyledHeader>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: "74px" }}>
                      <Transition
                        // native
                        config={{ tension: 1, friction: 10 }}
                        keys={location.pathname}
                        from={{ opacity: 0, transform: "rotate(-20deg)" }}
                        enter={{ opacity: 1, transform: "rotate(0deg)" }}
                        leave={{ opacity: 0, transform: "rotate(180deg)" }}
                      >
                        {styles => (
                          <Switch location={location}>
                            <Route
                              exact
                              path="/"
                              render={props => (
                                <Search {...props} styles={styles} />
                              )}
                            />
                            <Route
                              exact
                              path="/index.html"
                              render={props => (
                                <Search {...props} styles={styles} />
                              )}
                            />
                            <Route
                              path="/:departure/to/:destination"
                              render={props => (
                                <Results {...props} styles={styles} />
                              )}
                            />
                          </Switch>
                        )}
                      </Transition>
                      <Toolbar />
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
