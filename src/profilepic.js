import React from "react";

export default function ProfilePic({ image, first, last, clickHandler }) {
    console.log(image);
    return (
        <img
            id="profilepic"
            onClick={clickHandler}
            src={image || "/nature.jpg"}
        />
    );
}
