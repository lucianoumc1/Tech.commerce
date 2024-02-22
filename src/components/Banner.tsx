import React from "react";
import headphoneBanner from "../assets/headphone-banner.png";

// interface Props = {};

function Banner({}) {
  return (
    <div className="bg-gradient-to-r from-red-700 to-red-500 rounded-2xl shadow-md my-32 flex justify-start items-center flex-wrap px-12 py-16 w-full">
      <div className="relative flex-shrink ">
        <span className="text-base text-white">20% OFF</span>
        <h4 className="uppercase text-7xl sm:text-8xl font-bold text-white font-Archivo-Black w-1/2 leading-[0.85]">
          fine smile
        </h4>
        <span className="text-base text-white">15 Nov to 7 Dec</span>
        <img
          className="h-[380px] absolute hidden sm:block sm:-top-32 sm:left-60"
          src={headphoneBanner}
          alt="headphone"
        />
      </div>
      <div className="flex-1 mt-6 ">
        <h5 className="text-4xl font-bold text-white">Summer Sale</h5>
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sint
          magni quis ullam volu
        </p>
        <button className="rounded-full bg-white px-8 py-2 w-max mt-6 text-red-600">
          Shop
        </button>
      </div>
    </div>
  );
}

export default Banner;
