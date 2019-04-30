import React from "react";
import axios from "./axios";

export default class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    submit(e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append("file", this.form);
        console.log(this.form);
        axios.post("/upload", formData).then(({ data }) => {
            if (data.error) {
                this.setState({ error: data.error });
            } else {
                console.log("Image is uploaded");
                this.props.setImage(data.users_image);
            }
        });
    }
    render() {
        return (
            <div className="changepic">
                <h1>Change your profile pic?</h1>
                <form>
                    <input
                        type="file"
                        onChange={e => (this.form = e.target.files[0])}
                    />
                    <button onClick={e => this.submit(e)}>Upload</button>
                </form>
            </div>
        );
    }
}
