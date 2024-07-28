import "./Header.css";
import { LOGO_URL } from "../../Utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCartFlatbed,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo-conatiner">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <FontAwesomeIcon icon={faSearch} />
              Search
            </li>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faCartArrowDown} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
