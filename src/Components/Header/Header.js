import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  const [user] = useAuthState(auth);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/Shop">Shop</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="/About">About</Link>
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/Login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
