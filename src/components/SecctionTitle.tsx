import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

function SecctionTitle({ title, subtitle }: Props): React.ReactElement {
  return (
    <div className="text-center mb-16">
      <h3 className="text-black font-bold text-5xl font-Archivo-Black mb-2">
        {title}
      </h3>
      <span className="text-gray-500 text-lg font-bold">{subtitle}</span>
    </div>
  );
}

export default SecctionTitle;
