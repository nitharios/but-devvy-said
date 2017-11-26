import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default ({ falseParameter }) => {
  return(
    <div id="nav-bar">
      <div id="devvy-cho-logo">
        <Link to="/about">
          <div></div>
        </Link>
      </div>
      <div id="text-nav-links">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/addinfo">
          <div>Add</div>
        </Link>
        <Link to="/">
          <div>Extra</div>
        </Link>
      </div>
    </div>
  );
};