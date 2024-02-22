import React from "react";
import headphone from "../assets/headphones.png";

interface Props {
  littelText: string;
  mediumText: string;
  biggerText: string;
  color: string;
  image: string;
  positions: string;
  textTop?: boolean;
}

function Card({
  littelText,
  mediumText,
  biggerText,
  color,
  image,
  positions = "",
  textTop = false,
}: Props): React.ReactElement {
  return (
    <div
      className={`bg-gradient-to-r ${
        color || "from-neutral-300 to-neutral-100"
      } rounded-2xl shadow-md p-6 w-full h-64 relative overflow-hidden`}
    >
      <div
        className={`${
          textTop ? "justify-start" : "justify-end"
        } flex flex-col  w-full h-full`}
      >
        <h6 className="text-md font-semibold text-white">{littelText}</h6>
        <h6 className="text-3xl font-bold text-white">{mediumText}</h6>
        <h6 className="uppercase text-4xl font-extrabold text-white font-Archivo-Black opacity-70">
          {biggerText}
        </h6>
        <button className="rounded-full px-6 py-2 w-max mt-2 bg-white text-gray-500">
          Browse
        </button>
        <img className={`absolute  ${positions}`} src={image} alt="headphone" />
      </div>
    </div>
  );
}
export default Card;
