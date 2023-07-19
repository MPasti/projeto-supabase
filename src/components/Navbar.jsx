// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/contact"> Contato </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
