import React from "react";
import axios from "./axios";
// import Profile from "./profile";

export default class BioEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
        this.changeBio = this.changeBio.bind(this);
        this.saveBio = this.saveBio.bind(this);
    }
    submit(e) {
        console.log("it runs!");
        e.preventDefault();
    }
    changeBio() {
        this.setState({
            editMode: true
        });
    }
    saveBio() {
        this.setState({
            editMode: false
        });
        axios.post("/user/bio", { bio: this.bio }).then(({ data }) => {
            this.props.updateBio(this.bio);
        });
    }
    render() {
        const handleInput = e => {
            this[e.target.name] = e.target.value;
        };
        if (this.state.editMode) {
            return (
                <div id="bio">
                    <h1>Bio</h1>
                    <textarea name="bio" onChange={handleInput} />
                    <button id="savebio" onClick={this.saveBio}>
                        save
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Bio</h1>

                    <button onClick={this.changeBio}>change bio</button>
                </div>
            );
        }
    }
}
