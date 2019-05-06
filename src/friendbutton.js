import React from "react";
import axios from "./axios";

export default class FriendButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buttontext: "" };
    }
    componentDidMount() {
        const id = this.props.recipient_id;
        const self = this;
        axios.get("/user/friendrequest/" + id + "/json").then(({ data }) => {
            console.log(data, "this is data of friendrequest");
            this.setState({ buttontext: data.buttontext });
        });
    }

    submit() {
        console.log(this.state.buttontext);
        const id = this.props.recipient_id;
        if (this.state.buttontext == "send friend request") {
            axios
                .post("/user/makefriendship/" + id + "/json")
                .then(({ data }) => {
                    this.setState({ buttontext: data.buttontext });
                });
        } else if (this.state.buttontext == "cancel friend request") {
            console.log("about to cancel frienship");
            axios
                .post("/user/cancelfriendship/" + id + "/json")
                .then(({ data }) => {
                    this.setState({ buttontext: data.buttontext });
                });
        } else if (this.state.buttontext == "accept friend request") {
            console.log("about to accept friendship");
            axios
                .post("/user/acceptfriendship/" + id + "/json")
                .then(({ data }) => {
                    this.setState({ buttontext: data.buttontext });
                });
        } else {
            axios
                .post("/user/endfriendship/" + id + "/json")
                .then(({ data }) => {
                    this.setState({ buttontext: data.buttontext });
                });
        }
    }
    render() {
        return (
            <div id="sendfriendrequest">
                <button onClick={e => this.submit(e)}>
                    {this.state.buttontext}
                </button>
            </div>
        );
    }
}
