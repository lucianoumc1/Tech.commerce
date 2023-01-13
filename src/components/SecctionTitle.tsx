import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

function SecctionTitle({ title, subtitle }: Props): React.ReactElement {
  return (
    <div className="text-center mb-10">
      <h3 className="text-black font-bold text-4xl">{title}</h3>
      <span className="text-gray-500 text-base">{subtitle}</span>
    </div>
  );
}

export default SecctionTitle;
