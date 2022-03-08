import React from "react";
import imgLogo from "../images/airbnb-logo.png";
export default function Navbar() {
  return (
    <nav>
      <img src={imgLogo} className="nav--logo" />
    </nav>
  );
}
