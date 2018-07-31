import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledParagraph = styled.p`
  color: hsl(275, 68%, 6%);
  font-weight: lighter;
  font-family: Roboto;
  text-align: left;
  margin: 10px;
`;
const StyledDiv = styled.div`
  && {
    margin: 10px;
    border: 1px dashed yellow;
    background: #ffffff59;
  }
`;

const ServiceAlerts = props => {
  const { serviceAlerts } = props;

  const displayAlerts =
    serviceAlerts && serviceAlerts.length > 0
      ? { display: "block" }
      : { display: "none" };
  return (
    <StyledDiv style={displayAlerts}>
      {serviceAlerts &&
        serviceAlerts.map((message, index) => (
          <StyledParagraph
            key={index}
            dangerouslySetInnerHTML={{ __html: message.value }}
          />
        ))}
    </StyledDiv>
  );
};

ServiceAlerts.propTypes = {
  serviceAlerts: PropTypes.array
};

export default ServiceAlerts;
