import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default ({ falseParameter }) => {
  return(
    <div id="nav-bar">
      <div id="devvy-cho-logo">
        <Link to="/">
          <div></div>
        </Link>
      </div>
      <div id="text-nav-links">
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/addinfo">
          <div>Add Info</div>
        </Link>
        <Link to="/">
          <div>Extra</div>
        </Link>
      </div>
    </div>
  );
};