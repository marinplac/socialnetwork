import React from "react";
import axios from "./axios";
// import ProfilePic from "./profilepic";
// import Uploader from "./uploader";
import Profile from "./profile";
// import { BrowserRouter, Route, Router, Link } from "react-router-dom";
// import BioEditor from "./bioeditor";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setImage = this.setImage.bind(this);
    }
    componentDidMount() {
        axios.get("/user").then(({ data }) => {
            console.log(data);
            this.setState(data);
        });
    }
    setImage(image) {
        console.log("setimage");
        this.setState({
            users_image: image
        });
    }
    render() {
        if (!this.state.id) {
            return (
                <div className="waitasec">
                    Wait a sec!
                    <img
                        id="waitaseclogo"
                        src="https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/source.gif"
                    />
                </div>
            );
        }
        return (
            // <BrowserRouter>
            <div>
                <img src="/mountainlogo.png" />
                <Profile
                    image={this.state.users_image}
                    setImage={this.setImage}
                />
            </div>
        );
    }
}
