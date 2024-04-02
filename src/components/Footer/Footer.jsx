import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import crean from '../../images/crean.jpeg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span><img src={crean} alt='crean' style={{ height: "50px", width: "70px", borderRadius: "10px" }} /></span>
        </div>
        {/* <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div> */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
