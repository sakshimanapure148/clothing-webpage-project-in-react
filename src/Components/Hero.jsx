
import React from "react";
import "../Style/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">
          NEW COLLECTION 2026
        </p>

        <h1>
          Elevate Your
          <br />
          Everyday <span>Style.</span>
        </h1>

        <p className="hero-description">
          Discover the latest trends in fashion.
          Find your perfect look with our new
          collection of modern clothing.
        </p>

        <div className="hero-buttons">
          <a href="#shop" className="shop-btn">
            Shop Now →
          </a>

          <a href="#collection" className="explore-btn">
            Explore Collection
          </a>
        </div>

        <div className="hero-features">
          <div>
            <strong>500+</strong>
            <p>New Styles</p>
          </div>

          <div>
            <strong>50K+</strong>
            <p>Happy Customers</p>
          </div>

          <div>
            <strong>100%</strong>
            <p>Quality Fashion</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
          alt="Woman wearing a stylish fashion outfit"
        />

        <div className="hero-badge">
          <span>NEW ARRIVAL</span>
          <strong>Fresh Looks</strong>
          <p>Made for you</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
