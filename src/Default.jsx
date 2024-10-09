import { Link } from "react-router-dom";

function Default() {
  return (
    <div className="select-div">
      <Link to="/login" className="select">
        Log in
      </Link>
      <Link to="/signup" className="select">
        Sign up
      </Link>
    </div>
  );
}

export default Default;
