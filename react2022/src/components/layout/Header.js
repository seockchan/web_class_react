import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header id="header" className={props.color}>
      <div className="header__port">
        <Link to="/portfolio">portfolio</Link>
      </div>
      <div className="header__logo">
        <Link to="/">WEB</Link>
      </div>
      <div className="header__menu">
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Reference">Reference</Link>
          </li>
          <li>
            <Link to="/Movie">Movie</Link>
          </li>
          <li>
            <Link to="/Youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
