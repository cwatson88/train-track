import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddAlarm from "@material-ui/icons/AddAlarm";
// https://www.thetrainline.com/train-companies  (all the logos)

const StyledContainer = styled(Grid)`
   {
    background-color: #e0e0e030;
    border-radius: 15px;
    min-height: 50px;
    margin: 20px;
    padding: 10px;
  }
`;

const Status = ({ status, delayed, className }) => (
  <Grid item xs={3} className={className}>
    <Grid container direction="column">
      <Grid item>Status:</Grid>
      <Grid item>
        <p>{status}</p>
      </Grid>
    </Grid>
  </Grid>
);

const StyledStatus = styled(Status)`
  color: ${props => (props.delayed === true ? "#ff4b4b" : "#C3DC2E")};
`;

class Service extends Component {
  render() {
    const { journey } = this.props;
    const { platform, std, etd, operator, operatorCode } = journey;
    // std is scheduled time to depart (I think)
    // etd is estimated time to depart

    console.log(`${operatorCode.toLowerCase()}.png`);
    return (
      <StyledContainer container direction="row">
        <Grid item xs={12}>
          <Grid container direction="row" alignItems="flex-start">
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
                <Grid>
                  <img
                    src={require(`../../assets/${operatorCode.toLowerCase()}.png`)}
                    alt="train operator logo"
                    width={"50px"}
                  />
                </Grid>
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
          <Grid container direction="row">
            <Grid item xs={4}>
              <IconButton aria-label="Delete">
                <AddAlarm />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton aria-label="Delete">
                <AddAlarm />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton aria-label="Delete">
                <AddAlarm />
              </IconButton>
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
