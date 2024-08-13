import { LOGO_URL } from "../../Utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [btnName, setbtnName] = useState("Sign In");
  return (
    <>
      <div className="header" data-aos="fade-down" data-aos-easing="ease-in-out">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
          <h3 className="logo-text">Other</h3>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart"></Link>
              {"  "}
              <FontAwesomeIcon icon={faCartArrowDown} />
              Cart
            </li>
            <li>
              {" "}
              <button
                onClick={() => {
                  btnName === "Sign In"
                    ? setbtnName("Sign Out")
                    : setbtnName("Sign In");
                }}
                className="login-btn"
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
