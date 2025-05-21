import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuOutlined } from "@ant-design/icons";
import "./common.css";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="navbar"
    >
      <div className="logo"><Logo/>CARe</div>

      <div className="menu-icon" onClick={toggleMenu}>
        <MenuOutlined />
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Cars</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </motion.nav>
  );
}
