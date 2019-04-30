import React from "react";
import axios from "./axios";
import OtherProfile from "./otherprofile";
import { Link, Router } from "react-router-dom";

class OtherProfile extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get("/user/" + id).then(({ data }) => {
            if (data.redirect) {
                this.props.history.push("/");
            }
        });
    }
}
// <Route
//     path="/user/:id"
//     render={props => (
//         <OtherProfile
//             key={props.match.url}
//             match={props.match}
//             history={props.history}
//         />
//     )}
// />;
