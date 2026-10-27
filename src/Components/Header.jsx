
import React from "react";
import "../Style/Header.css";

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        STYLE<span>WEAR</span>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#men">Men</a>
        <a href="#women">Women</a>
        <a href="#kids">Kids</a>
        <a href="#sale" className="sale">Sale</a>
      </nav>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search clothing..."
        />
        <button aria-label="Search">⌕</button>
      </div>

      {/* Header Icons */}
      <div className="header-icons">
        <a href="#account" title="Account">♙</a>
        <a href="#wishlist" title="Wishlist">♡</a>
        <a href="#cart" title="Shopping Cart">🛍</a>
      </div>
    </header>
  );
}

export default Header;
