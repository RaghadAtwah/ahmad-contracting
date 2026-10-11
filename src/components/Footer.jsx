import AYLogo from "../assets/AYLogo.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section 1 - Logo */}
        <div className="footer-about">
          <img src={AYLogo} alt="AY Logo" className="footer-logo" />

          <p>
            نبني بثقة، وننجز بجودة والتزام. نقدم خدمات البناء والترميم والصيانة
            باحترافية وجودة عالية.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div className="footer-section">
          <h3>روابط سريعة</h3>

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

        {/* Section 3 - Services */}
        <div className="footer-section">
          <h3>خدماتنا</h3>

          <ul>
            <li>البناء</li>
            <li>الترميم والصيانة</li>
            <li>هدم وإزالة</li>
            <li>تشطيبات</li>
            <li>توريد</li>
          </ul>
        </div>

        {/* Section 4 - Contact */}
        <div className="footer-section">
          <h3>تواصل معنا</h3>

          <ul className="footer-contact">
            <li>
              <a href="tel:+962785552493" dir="ltr">
                 0785552493 📞
              </a>
            </li>

            <li>
              <a href="mailto:Qaddomi95@gmail.com"> Qaddomi95@gmail.com ✉️ </a>
            </li>

            <li>
              <span>📍 Amman - Jordan</span>
            </li>

            <li>
              <span>🕐 السبت - الخميس | 8:00 ص - 6:00 م</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
