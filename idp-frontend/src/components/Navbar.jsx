import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(false); // close menu on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <h1 className="logo">IDP System</h1>

      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      )}

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link></li>
        <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link to="/goals" onClick={() => setOpen(false)}>Goals</Link></li>
        <li><Link to="/idp" onClick={() => setOpen(false)}>IDP</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
