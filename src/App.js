import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import Header from "./assets/Header.svg";
import Results from "./pages/Results";
import Search from "./pages/Search";
import Toolbar from "./components/toolbar/Toolbar";
import { ContextProvider, ContextConsumer } from "./mainContext";
import * as Sentry from "@sentry/browser";

const StyledHeader = styled.header`
   {
    text-align: center;
    background-image: linear-gradient(0deg, #004e74 0%, #674f66 100%);
    max-width: 100%;
    img {
      max-width: 100%;
    }
  }
`;

Sentry.init({
  dsn: "https://d9b3d683aded4bc7b67d4d49042424fb@sentry.io/1287271"
});

class App extends Component {
  render() {
    return (
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
                <Search />
                <Results />
                <Toolbar />
              </Grid>
            </Grid>
          )}
        </ContextConsumer>
      </ContextProvider>
    );
  }
}

export default App;
