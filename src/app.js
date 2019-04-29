import React from "react";
import axios from "./axios";
import ProfilePic from "./profilepic";
import Uploader from "./uploader";
import Profile from "./profile";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        axios.get("/user").then(({ data }) => {
            console.log(data);
            this.setState(data);
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
                <img src="/mountainlogo.png" />
                <ProfilePic
                    image={this.state.image}
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    clickHandler={() =>
                        this.setState({ isUploaderVisible: true })
                    }
                />

                <Profile
                    first={this.state.firstname}
                    last={this.state.lastname}
                    profilePic={
                        <ProfilePic
                            id={this.state.id}
                            first={this.state.firstname}
                            last={this.state.lastname}
                            image={this.state.image}
                            onClick={this.showUploader}
                        />
                    }
                />
                {this.state.isUploaderVisible && (
                    <Uploader
                        setImage={image => this.setState({ image: image })}
                    />
                )}
            </div>
        );
    }
}
