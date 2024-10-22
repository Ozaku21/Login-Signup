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
      setMsg("Please fill out both fields");
      return;
    }
    // Additional validation can be added here

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
            aria-label="Username"
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
            aria-label="Password"
          />
          <button
            className="pass-visibility"
            type="button"
            onClick={() => setVisiblePass(!visiblePass)}
            aria-label={visiblePass ? "Hide password" : "Show password"}
          >
            <FontAwesomeIcon icon={visiblePass ? faEyeSlash : faEye} />
          </button>
        </div>
        <div className="btns">
          <button className="submit" type="submit">
            Log in
          </button>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Login;
