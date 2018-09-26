import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
// https://www.thetrainline.com/train-companies  (all the logos)

const StyledContainer = styled(Grid)`
   {
    background-color: #e0e0e030;
    border-radius: 15px;
    min-height: 50px;
    margin: 20px;
    padding: 10px;
    box-shadow: 3px 10px 11px 2px #00000030;
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
  p {
    color: ${props => (props.delayed === true ? "#ff4b4b" : "#C3DC2E")};
  }
`;

const ResultParagraph = styled.p`
  color: #80dbff;
`;
const getTrainProviderImage = operatorCode => {
  try {
    return require(`../../assets/${operatorCode.toLowerCase()}.png`);
  } catch (e) {
    console.log(e);
    return require("../../assets/vt.png");
  }
};

class Service extends Component {
  render() {
    const { journey } = this.props;
    const { platform, std, etd, operator, operatorCode } = journey;
    // std is scheduled time to depart (I think)
    // etd is estimated time to depart

    return (
      <StyledContainer container>
        <Grid item xs={12}>
          <Grid container direction="row" alignItems="flex-start">
            <Grid item xs={3}>
              <Grid container direction="column" justify="space-between">
                <Grid item>Leaves at:</Grid>
                <Grid item>
                  <ResultParagraph>{std}</ResultParagraph>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container direction="column" justify="space-between">
                <Grid item>Platform:</Grid>
                <Grid item>
                  <ResultParagraph>{platform}</ResultParagraph>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container direction="column" justify="space-between">
                <Grid item>Operator:</Grid>
                <Grid>
                  <img
                    src={getTrainProviderImage(operatorCode)}
                    alt="train operator logo"
                    width={"50px"}
                  />
                  <ResultParagraph>{operator}</ResultParagraph>
                </Grid>
              </Grid>
            </Grid>
            <StyledStatus
              status={etd}
              delayed={etd === "Delayed" ? true : false}
            />
          </Grid>
        </Grid>
        {/* <Grid container direction="column">
          <Grid item xs={6}>
            <IconButton aria-label="Delete">
              <AddAlarm />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton aria-label="Delete">
              <AddAlarm />
            </IconButton>
          </Grid>
        </Grid> */}
      </StyledContainer>
    );
  }
}

Service.propTypes = {
  journey: PropTypes.object
};

export default Service;
