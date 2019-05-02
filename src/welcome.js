import React from "react";
// import axios from "./axios";
import Registration from "./registration";
import { HashRouter, Route } from "react-router-dom";
import Login from "./login";

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>MOUNTAIN LOVERS</h1>
                <div id="welcome">
                    <h1>Welcome!</h1>
                    <img src="/mountainlogo.png" />
                    <HashRouter>
                        <div>
                            <Route exact path="/" component={Registration} />
                            <Route path="/login" component={Login} />
                        </div>
                    </HashRouter>
                </div>
            </div>
        );
    }
}
