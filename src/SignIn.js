import { useHistory } from "react-router-dom";
import { useState } from "react";
import {Link} from "react-router-dom";

export function SignIn() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signIn-content">
      <img
        className="profile-logo"
        src="https://www.pngitem.com/pimgs/m/514-5149286_profile-logo-hd-png-download.png"
      />
      <h2 className="popup-heading">Welcome Back</h2>
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
          <label for="Password">Password</label>
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
        className="sign-in-button"
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
            .then((data) => data.json())
            .then(() => true ? history.push("/") : console.log(""))
      }}>
        &nbsp; Sign In &nbsp;
      </button>
      <p>
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
}
