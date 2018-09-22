import React, { createContext } from "react";

const { Provider, Consumer } = createContext(defaultValue);

const state = {
  contextTrain:'this train'
}

<Provider value={state}>
{this.props.children}
</Provider>

export default Provider;
