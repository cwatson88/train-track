import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
   {
    position: absolute;
    width: 403px;
    height: 105px;
    background: linear-gradient(270deg, #eeeeee 0%, #d8d8d8 100%);
    background-blend-mode: soft-light;
    border-radius: 15px;
  }
`;
class container extends Component {
  render() {
    return <StyledContainer />;
  }
}

export default container;
