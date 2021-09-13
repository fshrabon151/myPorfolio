import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-3 px-2">
      <div className="logo">
        <h1 className="text-xl text-purple-600 font-medium">
          {"<F Shrabon/>"}
        </h1>
      </div>
      <div className="nav">
        <ul className="flex flex-row flex-wrap text-base text-purple-600 font-medium">
          <li>
            <NavLink exact to="/" className="hover:text-purple-400 p-2">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className="hover:text-purple-400 p-2">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/portfolio"
              className="hover:text-purple-400 p-2"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="hover:text-purple-400 p-2">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
