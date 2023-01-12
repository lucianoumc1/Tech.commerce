import React from "react";
import headphoneBanner from "../assets/headphone-banner.png";

// interface Props = {};

function Banner({}) {
  return (
    <div className="bg-red-600 rounded-2xl shadow-md my-20 flex justify-start items-center px-12 py-16 w-full h-80 relative ">
      <div className="flex flex-col item-center flex-1">
        <span className="text-base text-white">20% OFF</span>
        <h4 className="uppercase text-8xl font-bold text-white font-Archivo-Black w-1/2 leading-[0.85]">
          fine smile
        </h4>
        <span className="text-base text-white">15Nov to 7 Dec</span>
      </div>
      <div className=" hidden md:block flex-1">
        <span className="text-base font-bold text-white">15Nov to 7 Dec</span>
        <h5 className="text-4xl font-bold text-white">Summer Sale</h5>
        <p className="text-white ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sint
          magni quis ullam volu
        </p>
        <button className="rounded-full bg-white text-gray-400 px-8 py-2 w-max mt-6">
          Shop
        </button>
      </div>
      <img
        className="h-[400px] absolute -top-28 left-60"
        src={headphoneBanner}
        alt="headphone"
      />
    </div>
  );
}

export default Banner;
