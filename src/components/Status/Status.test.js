import React from "react";
import ReactDOM from "react-dom";
import Status from "./Status"

describe("status should render and have the correct props", () => {
  it("should render the component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Status />, div);
    ReactDOM.unmountComponentAtNode(div)
  });
});

