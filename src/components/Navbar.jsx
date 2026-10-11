import { useState } from "react";
import LogoNavbar from "../assets/AYIcon.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="logo-navbar">
        <a href="/">
          <img src={LogoNavbar} alt="Ahmad's Yaseen Logo" />
        </a>
      </div>

      <div className="pages-navbar">
        <ul>
          <li>
            <a href="#whoWeAre">من نحن</a>
          </li>
          <li>
            <a href="#projects">مشاريعنا</a>
          </li>
          <li>
            <a href="#process">آلية العمل</a>
          </li>
          <li>
            <a href="#contact">تواصل معنا</a>
          </li>
        </ul>
      </div>

      <div className="btn-navbar">
        <a href="#contact">ابدأ مشروعك</a>
      </div>

      <button
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-pages">
            <a href="#whoWeAre">من نحن</a>
            <a href="#projects">مشاريعنا</a>
            <a href="#process">آلية العمل</a>
            <a href="#contact">تواصل معنا</a>
          </div>

          <div className="mobile-menu-buttons">
            <div className="navbar-buttons">
              <a href="#contact">ابدأ مشروعك</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
