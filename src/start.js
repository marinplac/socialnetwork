import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./welcome";
import App from "./app";

let elem;

if (location.pathname == "/welcome") {
    // console.log("do something");
    elem = <Welcome />;
} else {
    // console.log("do something else");
    elem = <App />;
}

ReactDOM.render(elem, document.querySelector("main"));
