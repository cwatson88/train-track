import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const StyledContainer = styled(Grid)`
   {
    background-color: #e0e0e030;
    border-radius: 15px;
    min-height: 50px;
    margin: 20px;
    padding: 10px;
  }
`;

const Status = ({ status, delayed }) => (
  <Grid item xs={3}>
    <Grid container direction="column">
      <Grid item>Status:</Grid>
      <Grid item>
        <p>{status}</p>
      </Grid>
    </Grid>
  </Grid>
);

const StyledStatus = styled(Status)`
  color: ${props => (props.delayed === true ? "#000" : "#C3DC2E")};
`;

class Service extends Component {
  render() {
    const { journey } = this.props;
    const { platform, std, etd, operator } = journey;
    // std is scheduled time to depart (I think)
    // etd is estimated time to depart
    return (
      <StyledContainer container direction="row">
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item>Leaves at:</Grid>
                <Grid item>{std}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item>Platform:</Grid>
                <Grid item>{platform}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item>Operator:</Grid>
                <Grid item>{operator}</Grid>
              </Grid>
            </Grid>
            <StyledStatus
              status={etd}
              delayed={etd === "Delayed" ? true : false}
            />
          </Grid>
          <Grid container direction="row">
            <Grid item xs={12}>
              <hr />
            </Grid>
          </Grid>
          <Grid />
        </Grid>
      </StyledContainer>
    );
  }
}

Service.propTypes = {
  journey: PropTypes.object
};

export default Service;
