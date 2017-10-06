import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "ionicons/dist/css/ionicons-core.min.css";
import "ionicons/dist/css/ionicons.min.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
