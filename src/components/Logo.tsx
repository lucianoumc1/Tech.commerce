import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

type Props = {};

function Logo({}: Props) {
  return (
    <div>
      <Link to="/">
        <img className="h-6" src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
