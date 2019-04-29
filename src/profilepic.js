import React from "react";

export default function ProfilePic({ image, first, last, clickHandler }) {
    console.log(image);
    return <img onClick={clickHandler} src={image || "/nature.jpg"} />;
}
