import "./Header.css";
import { LOGO_URL } from "../../Utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [btnName, setbtnName] = useState("Sign In");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
          <h3 className="logo-text">Other</h3>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>
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
