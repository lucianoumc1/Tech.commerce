import React from "react";
import headphone from "../assets/headphones.png";

function CoverCard(): React.ReactElement {
  return (
    <div className="bg-gradient-to-r relative from-neutral-300 to-neutral-100 rounded-2xl shadow-md mx-12 flex flex-col items-start px-6 md:px-12 py-6 md:py-16 w-full overflow-hidden">
      <div className="flex flex-col item-center  w-full">
        <span className="text-xl font-semibold">Beats Solo</span>
        <span className="text-4xl font-bold">Wireless</span>
        <h4 className="leading-[0.85] uppercase text-4xl md:text-8xl font-extrabold text-white font-Archivo-Black">
          headphone
        </h4>
        <button className="rounded-full bg-red-500 text-white px-2 md:px-4 py-2 w-max text-xs md:text-base mt-4">
          Shop by category
        </button>
        <img
          className="h-[90%] absolute left-[50%] md:left-48 top-6 z-0 "
          src={headphone}
          alt="headphone"
        />
      </div>
      <div className="self-end hidden md:block z-10">
        <h6 className="font-semibold text-right text-base mb-2">Description</h6>
        <p className=" text-right text-sm font-light w-56 text-gray-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sint
          magni quis ullam volu
        </p>
      </div>
    </div>
  );
}
export default CoverCard;
