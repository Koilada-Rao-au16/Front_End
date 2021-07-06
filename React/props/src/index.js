import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App"
import Home from "./container/Home";

ReactDOM.render(
    <React.StrictMode>
      <App/>
      <Home/>
    </React.StrictMode>,

    document.getElementById("root")
);
