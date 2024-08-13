import "./Footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">Foodies</h2>
          <p className="footer-text">&copy; 2024 YourCompany Pvt. Ltd.</p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Foodies One</a>
            </li>
            <li>
              <a href="#">Foodies Instamart</a>
            </li>
            <li>
              <a href="#">Foodies Genie</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Contact us</h2>
          <ul className="footer-links">
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Partner with us</a>
            </li>
            <li>
              <a href="#">Ride with us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Legal</h2>
          <ul className="footer-links">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
