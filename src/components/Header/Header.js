import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/hotstarlogo.svg";
import "./Header.css";
import Login from "../Login/Login";
import PhoneNumber from "../Login/PhoneNumberModal";
import OTPModal from "../Login/OTPModal";

const Header = () => {
  const [login, setLogin] = useState()

  console.log(login, "login");

  const clickHandler = (a) => {
    // alert("hello")
    setLogin(a)
  }
  return (
    <nav className="nav-container">
      <Link to="/">
        <img src={logo} alt="" className="hotstarLogo" />
      </Link>
      <ul>
        <li>
          <div className="dropdown-btn">
            <Link to="/" className="nav-link">
              <div>TV</div>
            </Link>
            <div className="dropdown-content" >
              <Link to="#">Mood Mix</Link>
              <Link to="#">Other Show</Link>
              <Link to="#">Hotstar Special</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown-btn">
            <Link to="/" className="nav-link">
              <div>Movies</div>
            </Link>
            <div className="dropdown-content" >
              <Link to="#">Odia</Link>
              <Link to="#">Hindi</Link>
              <Link to="#">Bengali</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown-btn">
            <Link to="/" className="nav-link">
              <div>Sports</div>
            </Link>
            <div className="dropdown-content" >
              <Link to="#">Cricket</Link>
              <Link to="#">Hockey</Link>
              <Link to="#">Football</Link>
            </div>
          </div>
        </li>
        <li>
          <Link to="/" className="nav-link">
            <div>Disney+</div>
          </Link>
        </li>
      </ul>
      <div className="rightSide">
        <input className="search" type="text" placeholder="Search" />
        <button className="subscribe-btn">SUBSCRIBE</button>
        <Link onClick={() => clickHandler(1)} className="login">Login</Link>
        {login === 1 && <Login onclose={(a) => clickHandler(a)} />}
        {login === 2 && <PhoneNumber onclose={(a) => clickHandler(a)} />}
        {login === 3 && <OTPModal onclose={(a) => clickHandler(a)} />}
      </div>
    </nav>
  );
};
export default Header;
