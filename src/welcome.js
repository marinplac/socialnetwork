import React from "react";
// import axios from "./axios";
import Registration from "./registration";
import { HashRouter, Route } from "react-router-dom";
import Login from "./login";

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div id="logodiv">
                    <img id="logopic" src="/mountainlogo.png" />
                </div>
                <div id="titlemountainlovers">
                    <h1>MOUNTAIN LOVERS</h1>
                    <p>Welcome!</p>
                </div>

                <div id="welcome">
                    <HashRouter>
                        <div id="registrationandloginform">
                            <Route exact path="/" component={Registration} />
                            <Route path="/login" component={Login} />
                        </div>
                    </HashRouter>
                </div>
            </div>
        );
    }
}
