import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./assets/Header.svg";
import Toolbar from "./components/toolbar/Toolbar";
import { ContextConsumer, ContextProvider } from "./mainContext";
import Results from "./pages/Results";
import Search from "./pages/Search";

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
                  <Route exact path="/" component={Search} />
                  <Route path="/results" component={Results} />
                  <Toolbar />
                </Grid>
              </Grid>
            )}
          </ContextConsumer>
        </ContextProvider>
      </Router>
    );
  }
}

export default App;
