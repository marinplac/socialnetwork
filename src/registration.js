import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    submit() {
        axios
            .post("/login", { email: this.email, password: this.password })
            .then(({ data }) => {});

        axios
            .post("/register", {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            })
            .then(({ data }) => {
                location.replace("/");
            })
            .catch(err => {
                console.log(err, " error in axios register");
            });
    }

    render() {
        const handleInput = e => {
            this[e.target.name] = e.target.value;
        };
        return (
            <div id="registration">
                {this.state.error && <div className="error">Ooops</div>}
                <p>First name</p>
                <input
                    name="firstname"
                    placeholder="firstname"
                    onChange={handleInput}
                />
                <p>Last name</p>
                <input
                    name="lastname"
                    placeholder="lastname"
                    onChange={handleInput}
                />
                <p>Email</p>
                <input
                    name="email"
                    placeholder="email"
                    onChange={handleInput}
                />
                <p>Password</p>
                <input name="password" type="password" onChange={handleInput} />

                <div id="buttonjoinus">
                    <button onClick={e => this.submit()}>Join us</button>
                </div>

                <div>
                    <Link to="/login">Members please log in.</Link>
                </div>
            </div>
        );
    }
}
