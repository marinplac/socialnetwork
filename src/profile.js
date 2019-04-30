import React from "react";
import ProfilePic from "./profilepic";
// import BioEditor from "./bioeditor";
// import Profile from "./profile";
import Uploader from "./uploader";

export default function Profile(props) {
    return (
        <div>
            <ProfilePic image={props.image} />
            <Uploader setImage={props.setImage} />
        </div>
    );
}
