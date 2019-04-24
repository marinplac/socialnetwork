import React from "react";
import ReactDOM from "react-dom";

import Registration from "./registration";

let elem;

if (location.pathname == "/welcome") {
    // console.log("do something");
    elem = <Registration />;
} else {
    // console.log("do something else");
    elem = <img className="logo" src="/images/nature.jpg" />;
}

ReactDOM.render(elem, document.querySelector("main"));
