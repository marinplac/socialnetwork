import React from "react";
import axios from "./axios";

export default class FriendButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const id = this.props.recipient_id;
        const self = this;
        axios.get("/user/friendrequest/" + id + "/json").then(({ data }) => {
            console.log(data, "this is data of friendrequest");
        });
    }
    render() {
        return (
            <div id="sendfriendrequest">
                <button>Send friend req</button>
            </div>
        );
    }
}
