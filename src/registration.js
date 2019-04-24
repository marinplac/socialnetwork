import React from "react";
import axios from "axios";

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    submit() {
        axios
            .post("/register", {
                first: this.first,
                last: this.last,
                email: this.email,
                pass: this.pass
            })
            .then(({ data }) => {
                // this.setState({
                //     error: true ovde mora da se doradi
                // })
                location.replace("/");
            })
            .catch();
    }

    render() {
        const handleInput = e => {
            this[e.target.name] = e.target.value;
        };
        return (
            <div>
                {this.state.error && <div className="error">Ooops</div>}
                <input name="first" onChange={handleInput} />
                <p>First name</p>
                <input name="last" onChange={handleInput} />
                <p>Last name</p>
                <input name="email" onChange={handleInput} />
                <p>Email</p>
                <input name="pass" onChange={handleInput} />
                <p>Password</p>
                <button onClick={e => this.submit()}>Join us</button>
            </div>
        );
    }
}
