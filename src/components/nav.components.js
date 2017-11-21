import React from 'react';
// import { Link } from 'react-router-dom';

const Nav = () => {
  if(localStorage.username){
    return (
      <div>
        <div className="nav-links">
          <p>>Home</p>
          <p>Logout</p>
        </div>
      </div>
    )
  } else {
    return (
      // currently no live links to the nav !!!!
      <div className="unauth-nav-links">
        <p>Home</p>
        <p>New Topic</p>
        <p>Reload</p>
        <p>Login</p>
      </div>
    );
  }
}

export default Nav;