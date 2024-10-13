import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passConfirmValue, setPassConfirmValue] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);
  const [visibleConfirmPass, setVisibleConfirmPass] = useState(false);
  const [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailValue || !userValue || !passValue || !passConfirmValue) {
      setMsg("please fill out both fields");
      return;
    } else if (passValue !== passConfirmValue) {
      setMsg("Passwords do not match");
      return;
    }
    setMsg("Login Successful!");
    setEmailValue("");
    setUserValue("");
    setPassValue("");
    setPassConfirmValue("");

    setTimeout(() => {
      setMsg("");
    }, 3000);
  }

  return (
    <div className="main-div">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className="email-info">
          <input
            type="text"
            name="user"
            value={emailValue}
            placeholder="Email"
            onChange={(e) => setEmailValue(e.target.value)}
            required
          />
        </div>
        <div className="user-info">
          <input
            type="text"
            name="user"
            value={userValue}
            placeholder="Username"
            onChange={(e) => setUserValue(e.target.value)}
            required
          />
        </div>
        <div className="pass-info">
          <input
            type={visiblePass ? "text" : "password"}
            name="Password"
            value={passValue}
            placeholder="Password"
            onChange={(e) => setPassValue(e.target.value)}
            required
          />
          <button
            className="pass-visibility"
            type="button"
            onClick={() => setVisiblePass(!visiblePass)}
          >
            <FontAwesomeIcon icon={visiblePass ? faEyeSlash : faEye} />
          </button>
        </div>
        <div className="pass-info">
          <input
            type={visibleConfirmPass ? "text" : "password"}
            name="Password"
            value={passConfirmValue}
            placeholder="Confirm Password"
            onChange={(e) => setPassConfirmValue(e.target.value)}
            required
          />
          <button
            className="pass-visibility"
            type="button"
            onClick={() => setVisibleConfirmPass(!visibleConfirmPass)}
          >
            <FontAwesomeIcon icon={visibleConfirmPass ? faEyeSlash : faEye} />
          </button>
        </div>
        <div className="btns">
          <Link to="/login">Log in</Link>
          <button className="submit" type="submit">
            Sign up
          </button>
        </div>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Login;
