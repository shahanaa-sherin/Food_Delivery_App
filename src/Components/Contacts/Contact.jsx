import { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-heading"data-aos="fade-right" >Contact Us</h1>
       <div className="hr"></div>
      </div>
      <div className="contact-info" data-aos="slide-up">
        <h1>Feel free to reach out to us!</h1>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i> 1234 Street Name, City,
          Country
        </div>
        <div className="info-item">
          <i className="fas fa-phone-alt"></i> +123 456 7890
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i> info@yourcompany.com
        </div>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Contact;
