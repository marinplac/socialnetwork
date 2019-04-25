import React from "react";
import axios from "./axios";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    submit(e) {
        console.log("it runs!");
        e.preventDefault();
        axios
            .post("/login", {
                email: this.email,
                password: this.password
            })
            .then(({ data }) => {
                if (data.success) {
                    console.log("data success: ", data.success);
                    location.replace("/");
                } else {
                    this.setState({ error: true });
                }
            })
            .catch(err => {
                console.log(err, " error in axios post login");
            });
    }

    render() {
        const handleInput = e => {
            this[e.target.name] = e.target.value;
        };
        return (
            <div id="login">
                {this.state.error && (
                    <div className="error">Ooops! Something went wrong.</div>
                )}

                <p>Email</p>
                <input
                    name="email"
                    placeholder="email"
                    onChange={handleInput}
                />
                <p>Password</p>
                <input name="password" type="password" onChange={handleInput} />
                <div id="login">
                    <button onClick={e => this.submit(e)}>Log in</button>
                </div>
            </div>
        );
    }
}
