import React from "react";
import axios from "./axios";
import Profile from "./profile";
import OtherProfile from "./otherprofile";
import { BrowserRouter, Route } from "react-router-dom";
// import Chat from "./chat";
import Friends from "./friends";
import ProfilePic from "./profilepic";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setImage = this.setImage.bind(this);
        this.updateBio = this.updateBio.bind(this);
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
    updateBio(newbio) {
        console.log("updated bio");
        this.setState({
            bio: newbio
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
            <div>
                <div id="headerofprofile">
                    <img src="/mountainlogo.png" />
                    <ProfilePic
                        firstname={this.state.firstname}
                        image={this.state.users_image}
                        clickHandler={() =>
                            this.setState({
                                isUploaderVisible: true
                            })
                        }
                    />
                </div>
                <div id="container">
                    <BrowserRouter>
                        <div>
                            <Route
                                exact
                                path="/"
                                render={() => (
                                    <Profile
                                        image={this.state.users_image}
                                        setImage={this.setImage}
                                        bio={this.state.bio}
                                        updateBio={this.updateBio}
                                    />
                                )}
                            />
                            <Route path="/user/:id" component={OtherProfile} />
                            <Route path="/friends" component={Friends} />
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}
