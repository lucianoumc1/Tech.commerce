import React from "react";
import headphone from "../assets/headphones.png";

function CoverCard(): React.ReactElement {
  return (
    <div className="relative bg-gradient-to-b from-neutral-400 to-neutral-100 rounded-2xl shadow-md flex flex-col justify-center p-6 w-full min-h-[420px] sm:min-h-[640px]">
      <div className="mx-auto w-max max-w-full overflow-hidden">
        <h4 className="text-base  md:text-2xl font-semibold m-0 md:pl-2 text-center md:text-left">
          Beats Solo
        </h4>
        <h4 className="text-4xl md:text-6xl font-bold font-Archivo-Black mb-2 md:pl-2  text-center md:text-left">
          Wireless
        </h4>
        <h4 className=" leading-[0.85] uppercase font-extrabold text-white font-Archivo-Black w-full text-[12vw] xl:text-[9.8rem] mb-4 text-center">
          headphone
        </h4>
        <div className="md:pl-2 text-center md:text-left">
          <button className="rounded-full bg-red-500 text-white px-6 py-3 text-xs">
            Shop by category
          </button>
        </div>
        <img
          className="max-h-[420px] object-contain md:absolute md:h-3/4 md:left-1/3 top-[10%] z-10 mx-auto  "
          src={headphone}
          alt="headphone"
        />
      </div>
      <div className="self-end hidden md:block z-20">
        <h6 className="font-bold text-right text-base mb-2">Description</h6>
        <p className=" text-right text-sm font-light w-56 text-gray-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sint
          magni quis ullam volu
        </p>
      </div>
    </div>
  );
}
export default CoverCard;
