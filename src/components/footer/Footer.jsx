import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        
        <div className="left-part">
          <h3>Our Service</h3>
          <p>About Us</p>
          <p>Our Work</p>
          <p>Pricing</p>
          <p>Help Center</p>
          <p>Login</p>
        </div>
        <div className="middle-part">
          <h3>Company</h3>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
        <div className="right-part">
          <h3>Follow Us</h3>
          <p>Faceebook</p>
          <p>Instagram</p>
          <p>Linkdein</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
