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
import { Transition, config } from "react-spring";

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
                        native
                        config={{ tension: 1, friction: 10 }}
                        keys={location.pathname.split("/").filter(a => a)[0]}
                        from={{ transform: "translateY(500px)", opacity: 0 }}
                        enter={{ transform: "translateY(0px)", opacity: 1 }}
                        leave={{ transform: "translateY(500px)", opacity: 0 }}
                      >
                        {style => (
                          <Switch location={location}>
                            <Route
                              exact
                              path="/"
                              render={() => <Search style={style} />}
                            />
                            <Route
                              path="/results"
                              render={() => <Results style={style} />}
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
