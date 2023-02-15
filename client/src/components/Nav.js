import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const openNav = () => {};
  return (
    <>
      <div onClick={openNav} className=" menu-icon">
        <input id="cbox" className="menu-icon__cheeckbox" type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav>
        <ul className="nav-ul">
          <li>
            <Link
              onClick={openNav}
              className={`${
                useLocation().pathname === "/tasks" ? "focus" : ""
              }`}
              to="/tasks"
            >
              Tasks
            </Link>
          </li>
          <li>
            <Link
              onClick={openNav}
              className={`${useLocation().pathname == "/" ? "focus" : ""}`}
              to="/"
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              onClick={openNav}
              className={`${
                useLocation().pathname == "/completed" ? "focus" : ""
              }`}
              to="/completed"
            >
              Completed
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
