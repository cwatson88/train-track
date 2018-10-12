import React from "react";
import ReactDOM from "react-dom";
import "./utils/firebaseInit";
import "./index.css";
import App from "./App";
import "./global-styles.js";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://d9b3d683aded4bc7b67d4d49042424fb@sentry.io/1287271"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
