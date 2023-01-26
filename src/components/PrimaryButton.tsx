import React, { MouseEventHandler } from "react";

type Props = {
  text: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

function PrimaryButton({ text, handleClick }: Props) {
  return (
    <button
      className="block w-full mx-auto max-w-lg py-2 rounded-xl mt-6 bg-violet-500 text-white text-lg font-bold"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
