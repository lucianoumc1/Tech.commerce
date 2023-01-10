import React from "react";
import { Link } from "react-router-dom";
import search from "../assets/search.png";
import cart from "../assets/cart.png";
import Logo from "./Logo";

type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <header className="flex items-center justify-between w-full p-4 shadow-sm h-20 pr-12 mb-4">
      <div className="flex gap-12 items-center">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex items-center justify-between gap-5">
            <li>
              <Link
                className="text-base font-medium text-gray-400 hover:text-black"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-gray-400 hover:text-black"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-gray-400 hover:text-black"
                to="/about-us"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-gray-400 hover:text-black"
                to="/contact-us"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-4 ">
        <Link className="font-semibold text-base text-black mr-6" to="/login">
          Login
        </Link>

        <img className="h-6 " src={search} alt="search" />
        <img className="h-6" src={cart} alt="cart" />
      </div>
    </header>
  );
}

export default Header;
