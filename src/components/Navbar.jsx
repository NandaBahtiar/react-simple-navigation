import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [visibleColor, setvisibleColor] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < 10 || currentScrollPos > 1000);
      setvisibleColor(currentScrollPos > 1000);
      console.log(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Gaya untuk NavLink yang aktif
  const activeLinkStyle = {
    color: "red",
    textDecoration: "underline",
  };

  return (
    <nav
      style={{
        backgroundColor: visibleColor ? "#f8f9fa" : "coral",
        padding: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",

        top: 0,
        zIndex: 1000,
        transition: "transform 0.3s ease-in-out",
        transform: visible ? "translateY(0)" : "translateY(-100%)", // Logika show/hide
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
