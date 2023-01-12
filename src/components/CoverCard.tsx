import React from "react";
import headphone from "../assets/headphones.png";

interface Props {}

function CoverCard({}: Props): React.ReactElement {
  return (
    <div className="bg-gradient-to-r from-neutral-300 to-neutral-100 rounded-2xl shadow-md mx-12 flex flex-col items-start px-12 py-16 w-full overflow-hidden">
      <div className="flex flex-col item-center relative w-full">
        <span className="text-xl font-semibold">Beats Solo</span>
        <span className="text-5xl font-bold">Wireless</span>
        <h4 className="leading-[0.85] uppercase text-[10rem] font-extrabold text-white font-Archivo-Black py-0">
          headphone
        </h4>
        <button className="rounded-full bg-red-500 text-white px-6 py-2 w-max">
          Shop by category
        </button>
        <img
          className="h-[150%] absolute top-3/8 left-1/3  opacity-80"
          src={headphone}
          alt="headphone"
        />
      </div>
      <div className="self-end hidden md:block">
        <h6 className="font-semibold text-right text-base mb-2">Description</h6>
        <p className=" text-right text-sm font-light w-72 text-gray-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sint
          magni quis ullam volu
        </p>
      </div>
    </div>
  );
}
export default CoverCard;
