"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <a href="#" className="logo">Nola</a>
          <nav>
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}>About Nola</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, "#products")}>Our Products</a></li>
              <li><a href="#why-us" onClick={(e) => handleNavClick(e, "#why-us")}>Why Choose Us</a></li>
              <li><a href="#process" onClick={(e) => handleNavClick(e, "#process")}>Process</a></li>
              <li><a href="#contact" className="btn btn-outline" onClick={(e) => handleNavClick(e, "#contact")}>Contact</a></li>
            </ul>
          </nav>
          <div 
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`} 
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Pure Dairy Goodness from Nature.</h1>
            <p>Experience the fresh, rich taste of farm-fresh dairy. Made with love and commitment to quality.</p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary" onClick={(e) => handleNavClick(e, "#products")}>Explore Our Products</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
             <Image 
                src="/images/hero_milk_pouring_1772969797202.png" 
                alt="Fresh milk pouring into glass on a beautiful green farm" 
                width={800} height={650}
                className="hero-image"
             />
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Nola</h2>
            <div className="line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Rooted in Nature</h3>
              <p>At Nola, we believe that the best dairy comes from the happiest cows. For over three decades, we have been committed to sustainable farming, natural processes, and delivering the highest quality dairy straight from our green pastures to your table.</p>
              <p>Every bottle of milk, every block of cheese, and every scoop of butter is a testament to our dedication to purity and freshness. We bring the rich goodness of nature directly to your family&apos;s daily meals.</p>
            </div>
            <div className="about-image-wrapper">
              <Image 
                src="/images/farm_cows_1772970009501.png" 
                alt="Peaceful cows grazing on a lush green pasture" 
                width={800} height={550}
                className="rounded-img shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="products section cream-bg" id="products">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Products</h2>
            <div className="line mx-auto"></div>
            <p className="subtitle">Pure, fresh, and nutritious dairy crafted for you.</p>
          </div>
            
          <div className="product-showcase">
            <div className="product-cards">
              <div className="product-card">
                <div className="product-icon">🥛</div>
                <h3>Fresh Milk</h3>
                <p>Rich, creamy, and full of essential nutrients straight from the farm.</p>
              </div>
              <div className="product-card">
                <div className="product-icon">🥣</div>
                <h3>Natural Yogurt</h3>
                <p>Smooth, cultured, and filled with healthy probiotics.</p>
              </div>
              <div className="product-card">
                <div className="product-icon">🧈</div>
                <h3>Golden Butter</h3>
                <p>Churned to perfection for a rich, spreading and cooking experience.</p>
              </div>
              <div className="product-card">
                <div className="product-icon">🧀</div>
                <h3>Artisanal Cheese</h3>
                <p>Aged nicely with deep, natural flavors perfect for any pairing.</p>
              </div>
            </div>
          </div>
          <div className="products-banner mt-4">
             <Image 
                src="/images/dairy_products_1772969902868.png" 
                alt="Premium Nola Dairy Products array" 
                width={1200} height={450}
                className="rounded-img shadow full-width-img"
             />
          </div>
        </div>
      </section>

      <section className="why-us section" id="why-us">
        <div className="container">
          <div className="section-title text-center">
            <h2>Why Choose Nola</h2>
            <div className="line mx-auto"></div>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🌿</div>
              <h4>Natural Farms</h4>
              <p>Our healthy cows graze freely in lush, non-GMO treated pastures.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <h4>Unmatched Freshness</h4>
              <p>Delivered fresh daily to ensure maximum quality and perfect taste.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✅</div>
              <h4>Quality Control</h4>
              <p>Rigorous testing at every single step to guarantee safety and purity.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💪</div>
              <h4>Rich Nutrition</h4>
              <p>Packed with calcium, pure protein, and vitamins for a healthy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process section cream-bg" id="process">
        <div className="container">
          <div className="section-title text-center">
            <h2>Farm to Table Process</h2>
            <div className="line mx-auto"></div>
            <p className="subtitle">How we bring the best dairy from our home to yours.</p>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Healthy Cows</h4>
              <p>Grass-fed cows on pristine, sustainable land.</p>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Gentle Milking</h4>
              <p>Hygienic, automated, and caring daily processes.</p>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Quick Chilling</h4>
              <p>Instantly cooled to safely lock in freshness.</p>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Your Table</h4>
              <p>Delivered fresh for your family to enjoy today.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>We&apos;d love to hear from you. Reach out to us for any inquiries about our high-quality dairy products or partnerships.</p>
              <div className="info-list">
                <div className="info-item">
                  <span className="icon">📍</span>
                  <p>123 Green Pasture Lane, Nola Valley</p>
                </div>
                <div className="info-item">
                  <span className="icon">📞</span>
                  <p>1-800-NOLA-COW</p>
                </div>
                <div className="info-item">
                  <span className="icon">✉️</span>
                  <p>hello@noladairy.com</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Full Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email Address" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <h2 className="footer-logo">Nola</h2>
          <p>&copy; 2026 Nola Dairy Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
