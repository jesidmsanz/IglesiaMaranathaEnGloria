import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Frontend/components/home";
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Router>
    <Homepage />
  </Router>,
  document.getElementById("root")
);
