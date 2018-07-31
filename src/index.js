import React from "react";
import ReactDOM from "react-dom";
import "./helpers/firebaseInit";
import "./index.css";
import App from "./App";
import "./global-styles.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
