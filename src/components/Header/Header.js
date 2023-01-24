import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/hotstarlogo.svg";
import "./Header.css";
import Login from "../Login/Login";

const Header = () => {
  const [login, setLogin] = useState(false)

 

  const clickHandler = () => {
    // alert("hello")
    setLogin(true)
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
        <Link onClick={clickHandler} className="login">Login</Link>
        <Login onclose={() => setLogin(false)} login={login}  />
      </div>
    </nav>
  );
};
export default Header;
