import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);
  const [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!userValue || !passValue) {
      setMsg("please fill out both fields");
      return;
    }
    setMsg("Login Successful!");
    setUserValue("");
    setPassValue("");

    setTimeout(() => {
      setMsg("");
    }, 3000);
  }

  return (
    <div className="main-div">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
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
        <div className="btns">
          <Link to="/signup">Sign up</Link>
          <button className="submit" type="submit">
            Log in
          </button>
        </div>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Login;
