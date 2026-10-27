
import React from "react";
import "../Style/Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Brand Information */}
        <div className="footer-section footer-brand">
          <h2>
            STYLE<span>WEAR</span>
          </h2>

          <p>
            Discover your unique style with the
            latest fashion trends. We bring you
            quality clothing for every occasion.
          </p>

          <div className="social-links">
            <a href="https://instagram.com" aria-label="Instagram">IG</a>
            <a href="https://facebook.com" aria-label="Facebook">FB</a>
            <a href="https://pinterest.com" aria-label="Pinterest">P</a>
            <a href="https://youtube.com" aria-label="YouTube">YT</a>
          </div>
        </div>

        {/* Shopping Links */}
        <div className="footer-section">
          <h3>SHOP</h3>
          <ul>
            <li><a href="#men">Men's Clothing</a></li>
            <li><a href="#women">Women's Clothing</a></li>
            <li><a href="#kids">Kids' Collection</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#sale">Special Offers</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h3>HELP & SUPPORT</h3>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#shipping">Shipping Information</a></li>
            <li><a href="#returns">Returns & Exchanges</a></li>
            <li><a href="#tracking">Track Your Order</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <ul>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section footer-newsletter">
          <h3>JOIN OUR NEWSLETTER</h3>

          <p>
            Subscribe to receive updates about
            new collections and special offers.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />

            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} StyleWear.
          All rights reserved.
        </p>

        <div className="payment-methods">
          <span>VISA</span>
          <span>Mastercard</span>
          <span>UPI</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
