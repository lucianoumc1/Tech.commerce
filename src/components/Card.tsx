import React from "react";
import headphone from "../assets/headphones.png";

interface Props {
  littelText: string;
  mediumText: string;
  biggerText: string;
  color: string;
  image: string;
  imageProps: string | null;
}

function Card({
  littelText,
  mediumText,
  biggerText,
  color,
  image,
  imageProps = "",
}: Props): React.ReactElement {
  return (
    <div
      className={`bg-gradient-to-r ${
        color || "from-neutral-300 to-neutral-100"
      } rounded-2xl shadow-md flex flex-col items-start p-6 max-w-7xl w-full h-64  relative overflow-hidden`}
    >
      <div className="flex flex-col w-full">
        <span className="text-md font-semibold text-white">{littelText}</span>
        <span className="text-3xl font-bold text-white">{mediumText}</span>
        <h4 className="uppercase text-4xl font-extrabold text-white font-Archivo-Black py-0 opacity-60">
          {biggerText}
        </h4>
        <button className="rounded-full px-6 py-2 w-max mt-4 bg-white text-gray-500">
          Browse
        </button>
        <img
          className={`absolute  ${imageProps}`}
          src={image}
          alt="headphone"
        />
      </div>
    </div>
  );
}
export default Card;
