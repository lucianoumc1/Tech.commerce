import React from "react";
import Card from "../components/Card";

import wirelessEarphones from "../assets/wireless-earphones.png";
import smartwatch from "../assets/smartwatch.png";
import laptop from "../assets/laptop.png";
import ps5 from "../assets/ps5.png";
import oculus from "../assets/oculus.png";
import speaker from "../assets/speaker.png";

function Categories(): React.ReactElement {
  return (
    <div className="grid grid-cols-4 grid-flow-row w-full gap-2 md:gap-6 my-4">
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <Card
          littelText="Enjoy"
          mediumText="With"
          biggerText="Earphone"
          color="from-gray-800 to-gray-600"
          image={wirelessEarphones}
          positions="h-[350px] object-cover right-0 -top-10"
        />
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <Card
          littelText="New"
          mediumText="Wear"
          biggerText="Gadget"
          color="from-yellow-400 to-yellow-200"
          image={smartwatch}
          positions="h-[200px] -bottom-4 -right-10"
          textTop={true}
        />
      </div>
      <div className="col-span-4 md:col-span-2">
        <Card
          littelText="Trend"
          mediumText="Devices"
          biggerText="Laptop"
          color="from-red-600 to-red-400"
          image={laptop}
          positions="h-[300px] -bottom-10 right-0"
          textTop={true}
        />
      </div>
      <div className="col-span-4 md:col-span-2">
        <Card
          littelText="Best"
          mediumText="Gaming"
          biggerText="Console"
          color=""
          image={ps5}
          positions="h-[300px] -top-0 right-0"
        />
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <Card
          littelText="Play"
          mediumText="Game"
          biggerText="Oculus"
          color="from-emerald-600 to-emerald-400"
          image={oculus}
          positions="h-[150px] sm:h-[180px] lg:h-[120px] bottom-0 right-0"
          textTop={true}
        />
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <Card
          littelText="New"
          mediumText="Amazon"
          biggerText="Speker"
          color="from-blue-500 to-blue-400"
          image={speaker}
          positions="h-[150px] sm:h-[180px] lg:h-[120px] bottom-0 right-0"
          textTop={true}
        />
      </div>
    </div>
  );
}
export default Categories;
