import React, { createContext } from "react";

const { Provider, Consumer } = createContext(defaultValue);

const state = {
  contextTrain:'this train'
}

<Provider value={state}/>

  <Consumer>
    {value => /* render something based on the context value */}
  </Consumer>

const mainContent = () => {
  return <div />;
};

export default mainContent;
