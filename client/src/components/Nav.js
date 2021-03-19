import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const body = document.getElementsByTagName("body")[0];
const background = document.createElement("div");
background.setAttribute("id", "backgroundLayer");
body.appendChild(background);
const openNav = () => {
  if (window.innerWidth > 1200) return;
  const nav = document.getElementById("small-nav");
  if (nav.style.left == "0px") {
    nav.style.left = "-50%";
    background.style.backgroundColor = "rgba(0,0,0,0)";
    background.style.pointerEvents = "none";
    document.getElementById("cbox").checked = false;
  } else if (nav.style.left == "-50%" || nav.style.left == "") {
    nav.style.left = "0px";
    background.style.pointerEvents = "all";
    background.style.backgroundColor = "rgba(0,0,0,0.5)";
  }
};
background.addEventListener("click", openNav);

const Nav = () => {
  return (
    <>
      <div onClick={openNav} className=" menu-icon">
        <input id="cbox" className="menu-icon__cheeckbox" type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav id="small-nav">
        <ul className="nav-ul">
          <li>
            <Link
              onClick={openNav}
              className={`${useLocation().pathname == "/about" ? "focus" : ""}`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={openNav}
              className={`${useLocation().pathname == "/goals" ? "focus" : ""}`}
              to="/goals"
            >
              Goals
            </Link>
          </li>
          <li>
            <Link
              onClick={openNav}
              className={`${useLocation().pathname == "/" ? "focus" : ""}`}
              to="/"
            >
              Timers
            </Link>
          </li>
          <li>
            <Link
              onClick={openNav}
              className={`${
                useLocation().pathname == "/review" ? "focus" : ""
              }`}
              to="/review"
            >
              Review
            </Link>
          </li>
          <li>
            <Link
              onClick={openNav}
              className={`${
                useLocation().pathname == "/contact" ? "focus" : ""
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
