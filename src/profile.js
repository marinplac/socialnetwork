import React from "react";
import ProfilePic from "./profilepic";
import BioEditor from "./bioeditor";

import Uploader from "./uploader";

export default function Profile(props) {
    return (
        <div id="profilesection">
            <ProfilePic image={props.image} />
            <Uploader setImage={props.setImage} />
            <BioEditor bio={props.bio} updateBio={props.updateBio} />
            <p>{props.bio}</p>
        </div>
    );
}
