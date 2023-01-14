import React from "react";
import ihponeLogo from "../assets/brands/iphone.png";
import sony from "../assets/brands/sony.png";

function Brands() {
  return (
    <section className="bg-neutral-300 h-60 flex items-center justify-around mb-6 w-full">
      <picture className="">
        <img className="h-20 opacity-40" src={ihponeLogo} alt="" />
      </picture>
      <picture className="">
        <img className="h-20 opacity-50" src={sony} alt="" />
      </picture>
      <picture className="">
        <img className="h-20 opacity-50" src={ihponeLogo} alt="" />
      </picture>
      <picture className="">
        <img className="h-20 opacity-50" src={ihponeLogo} alt="" />
      </picture>
    </section>
  );
}

export default Brands;
