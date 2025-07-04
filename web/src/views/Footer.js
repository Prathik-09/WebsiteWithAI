import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <span className="logo">☕</span>
          <strong>_cafe_</strong>_Holding Company
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Social Media</h4>
            <ul>
              <li>YouTube</li>
              <li>X</li>
              <li>(digital nomad)</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Investments</h4>
            <ul>
              <li>AI Marketplace</li>
              <li>Bumpups</li>
              <li>Skool</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Education</h4>
            <ul>
              <li>Content Catalog</li>
              <li>Take This Website</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Explore more ways to build—whether it's in the mountains, by the beach, or right in your apartment.
        </p>
        <p className="copyright">
          Copyright © 2025 Webcafe Commerce. All rights reserved.
        </p>
        <p className="country">United States</p>
      </div>
    </footer>
  );
} 
export default Footer;