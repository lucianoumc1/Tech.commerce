import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="flex items-start justify-between overflow-hidden px-4 gap-6 w-full max-w-screen-xl my-12 mx-auto">
        <div className="flex-1">
          <Logo />
          <span className="text-sm text-gray-500 my-6 block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus at aut consectetur
          </span>
          <SocialMedia />
        </div>

        <div className="flex-1 mx-auto">
          <h6 className="font-bold text-lg mb-3">Quick Links</h6>
          <ul>
            <li className="font-semibold text-gray-700">
              <Link to="">Home</Link>
            </li>
            <li className="font-semibold text-gray-700">
              <Link to="">About</Link>
            </li>
            <li className="font-semibold text-gray-700">
              <Link to="">Shop</Link>
            </li>
            <li className="font-semibold text-gray-700">
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h6 className="font-bold text-lg mb-3">Contact</h6>
          <span className="">
            (+954) 11-2330-8771 Universidad 7631 - G. Catan
          </span>
        </div>

        <div className="flex-1">
          <h6 className="font-bold text-lg">Suscribe to Our Email</h6>
          <h4 className="font-bold text-2xl mb-3">For Latest News & Updates</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
