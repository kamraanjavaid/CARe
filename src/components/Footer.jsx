import React from "react";
import "./common.css";
import { FacebookFilled, TwitterSquareFilled, InstagramFilled } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>CARe</h3>
        <p>Drive your journey with comfort and confidence.</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Cars</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#"><FacebookFilled /></a>
          <a href="#"><TwitterSquareFilled /></a>
          <a href="#"><InstagramFilled /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CARe. All rights reserved.</p>
      </div>
    </footer>
  );
}
