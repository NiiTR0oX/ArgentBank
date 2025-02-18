import React from "react";
import "./header.scss";
import logo from "./../../assets/images/argentBankLogo.png";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData , logout } from "./../../Redux/ProfileSlice.js";

export default function Header() {
  const dispatch = useDispatch();
  const {user}  = useSelector ((state) => state.profile);
  const {token} = useSelector((state) => state.login);

  const LogOut = () => {
    dispatch(logout())
  }
  
  useEffect(() => {
  
        if (token && !user){
            dispatch(fetchUserData(token))
        }
      }, [dispatch, token, user]);

    return (
        <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      { ! user && (
      <div>
        {/* refaire une condition pour afficher le nom du compte et logout */}
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle header-signin"></i>
          <p>Sign In</p>
        </Link>
      </div>
      )}
      { user && (
      <div>
          <a className="main-nav-item" href="/user">
            <i className="fa fa-user-circle"></i>
            {user.userName}
          </a>
          <a className="main-nav-item" href="/" onClick={LogOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      )}
    </nav>
    )
}