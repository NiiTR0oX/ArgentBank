import "./signin.scss";
import Button from "./../../components/Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../redux/loginslice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const { loading, error, isLoggedIn } = useSelector((state) => state.login);
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
    navigate("/user")
  };

  if (isLoggedIn) {
    return <p>Vous êtes connecté !</p>; // Remplace par une redirection ou un autre composant
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button className="sign-in-button" disabled={loading} btnText="SignIn">
            {loading ? "Loading..." : "Sign In"}
          </Button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </section>
    </main>
  );
}
