import React, { Component } from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  background-color: ${props => props.backgroundColor};
  width: 100vw;
  height: 20px;
  color: white;
`;

class NetworkStatusMessage extends Component {
  state = {
    online: true
  };
  componentDidMount() {
    const showStatus = online => {
      this.setState({ online });
    };

    window.addEventListener("load", () => {
      // 1st, we set the correct status when the page loads
      navigator.onLine ? showStatus(true) : showStatus(false);

      // now we listen for network status changes
      window.addEventListener("online", () => {
        showStatus(true);
      });

      window.addEventListener("offline", () => {
        showStatus(false);
      });
    });
  }
  render() {
    return (
      <div>
        {!this.state.online ? (
          <StyledMessage backgroundColor="red">
            You're going nowhere fast...you are offline <span>&#x1F645; </span>
          </StyledMessage>
        ) : (
          <StyledMessage backgroundColor="green">
            Yay back online!<span>&#x1F603;</span>
          </StyledMessage>
        )}
      </div>
    );
  }
}

export default NetworkStatusMessage;
