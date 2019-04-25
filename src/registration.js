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
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            })
            .then(({ data }) => {
                // this.setState({
                //     error: true ovde mora da se doradi
                // })
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
                <input name="firstname" onChange={handleInput} />
                <p>First name</p>
                <input name="lastname" onChange={handleInput} />
                <p>Last name</p>
                <input name="email" onChange={handleInput} />
                <p>Email</p>
                <input name="password" onChange={handleInput} />
                <p>Password</p>
                <button onClick={e => this.submit()}>Join us</button>
            </div>
        );
    }
}
