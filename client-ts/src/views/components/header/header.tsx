import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const header: React.FC<Props> = ({}) => {
  return (
    <div className="header">
      <div className="header container  row">
        <Link to="/" className="header__name header__list">
          Shopper's Pit
        </Link>

        <ul className="header__lists">
          <li>
            <Link to="/register" className="header__list">
              <p>Register</p>
            </Link>
          </li>
          <li>
            <Link to="/login" className="header__list">
              Log in
            </Link>
          </li>
          <li>
            <Link to="#" className="header__list">
              Trips
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
