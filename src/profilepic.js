import React from "react";

export default function ProfilePic({
    image,
    firstname,
    lastname,
    clickHandler
}) {
    console.log(image);
    return <img onClick={clickHandler} src={image || "/mountainlogo.png"} />;
}
