import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./welcome";

let elem;

if (location.pathname == "/welcome") {
    // console.log("do something");
    elem = <Welcome />;
} else {
    // console.log("do something else");
    elem = <img className="logo" src="mountainlogo.png" />;
}

ReactDOM.render(elem, document.querySelector("main"));
