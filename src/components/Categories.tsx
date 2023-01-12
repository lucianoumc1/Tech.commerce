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
    <div className="grid grid-cols-4 grid-rows-2 max-w-7xl w-full min-w-sm gap-6 my-6">
      <div className="col-span-1">
        <Card
          littelText="Enjoy"
          mediumText="With"
          biggerText="Earphone"
          color="from-gray-800 to-gray-600"
          image={wirelessEarphones}
          imageProps="-right-16 -bottom-8"
        />
      </div>
      <div className="col-span-1">
        <Card
          littelText="New"
          mediumText="Wear"
          biggerText="Gadget"
          color="from-yellow-400 to-yellow-300"
          image={smartwatch}
          imageProps="h-[90%] bottom-0 -right-10"
        />
      </div>
      <div className="col-span-2">
        <Card
          littelText="Trend"
          mediumText="Devices"
          biggerText="Laptop"
          color="from-red-600 to-red-400"
          image={laptop}
          imageProps="h-[350px] -bottom-10 right-0"
        />
      </div>
      <div className="col-span-2">
        <Card
          littelText="Best"
          mediumText="Gaming"
          biggerText="Console"
          color=""
          image={ps5}
          imageProps="h-[350px] -top-12 right-12"
        />
      </div>
      <div className="col-span-1">
        <Card
          littelText="Play"
          mediumText="Game"
          biggerText="Oculus"
          color="from-emerald-500 to-emerald-400"
          image={oculus}
          imageProps="h-[150px] top-24 right-0"
        />
      </div>
      <div className="col-span-1">
        <Card
          littelText="New"
          mediumText="Amazon"
          biggerText="Speker"
          color="from-blue-500 to-blue-400"
          image={speaker}
          imageProps="h-[140px] top-24 right-0"
        />
      </div>
    </div>
  );
}
export default Categories;
