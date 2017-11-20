import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  if(localStorage.username){
    return (
      <div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    )
  }else{
    return (
      <div className="unauth-nav-links">
        <Link to="/">Home</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Nav;