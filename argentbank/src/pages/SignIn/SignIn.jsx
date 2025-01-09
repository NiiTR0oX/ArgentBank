import "./signin.scss";
import Button from "./../../components/Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/LoginSlice.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const { loading, loginError, token } = useSelector((state) => state.login);
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password){
      console.log("Veuillez remplir les champs.")
    } else {
      dispatch(loginUser({ email, password }));
      navigate("/user")
    }
    
  };

  if (token) {
    return <p>Vous êtes connecté !</p>; // Remplace par une redirection ou un autre composant
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <Button className="sign-in-button" disabled={loading} btnText="Sign In">
            {loading ? "Loading..." : "Sign In"}
          </Button>
          {loginError && <p className="error-message">{loginError}</p>}
        </form>
      </section>
    </main>
  );
}
