import { useHistory } from "react-router-dom";
import { useState } from "react";
import {Link} from "react-router-dom";

export function SignUp() {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const postCredentials = () => {
    //     fetch("", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify()
    //     })
    //     .then((data) => data.json())
    // }
    return (
        <div className="signUp-content">
            <img
                className="profile-logo"
                src="https://www.pngitem.com/pimgs/m/514-5149286_profile-logo-hd-png-download.png"
            />
            <h2 className="popup-heading">Hello, Welcome!</h2>
            <p>Please provide the below details</p>
            <div className="user-details">
                <div className="input-fields">
                    <label for="Username">Username</label>
                    <input
                        type="text"
                        id="username"
                        required
                        placeholder="Username"
                        onChange={(event) => setUsername(event.target.value)}
                    ></input>
                </div>
                <div className="input-fields">
                    <label for="Password">Set Password</label>
                    <input
                        type="text"
                        id="password"
                        required
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                </div>
                <div className="input-fields">
                    <label for="Password">Re-enter Password</label>
                    <input
                        type="text"
                        id="password"
                        required
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                </div>
            </div>
            <button
                className="sign-up-button"
                onClick={() => {
                    const credentials = {
                        username: username, 
                        password: password
                    }
                    fetch("", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(credentials)
                    })
                    .then(() => history.push("/movies"));
              }}>
                &nbsp; Sign Up &nbsp;
            </button>
            <p>
                Already have an account? <Link to="/sign-in">Sign In</Link>
            </p>
          </div>
    );
}
