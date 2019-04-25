import React from "react";
// import axios from "axios";
import Registration from "./registration";

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <img className="logo" src="/nature.jpg" />
                <h1>MOUNTAIN LOVERS</h1>
                <div id="boxregister">
                    <Registration />
                </div>
            </div>
        );
    }
}
