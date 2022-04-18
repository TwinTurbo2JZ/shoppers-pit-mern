import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <div className="container flex nav__items">

      
          <Link to="/" className=" nav__list nav__name nav__item">
            <p>Shopper's Pit</p>
          </Link>
        
        

        <div className="">
            <ul className="nav__lists">
              <li>
                <Link to="/register" className="nav__list">
                  <p>Register</p>
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav__list">
                  <p>Log in</p>
                </Link>
              </li>
              <li>
                <Link to="#" className="nav__list">
                  <p>Browse Products</p>
                </Link>
              </li>
            </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
