import React from "react";
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-section branding">
          <h2>Groth</h2>
          <p>Empowering your business with the tools you need.</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Orders</a></li>
          </ul>
        </nav>

        {/* Services */}
        <nav className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Enquiry</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">User</a></li>
          </ul>
        </nav>

        {/* Logout Section */}
        <div className="footer-section">
          <h3>Account</h3>
          <a href="#">Logout</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Groth. All rights reserved.</p>
      </div>
    </footer>
  );
}
