import React from "react";

import guaranteeIcon from "../assets/icons/guarantee-check.png";
import headphoneIcon from "../assets/icons/headphone-icon.png";
import shippingIcon from "../assets/icons/shipping.png";
import walletIcon from "../assets/icons/wallet.png";

const itemStats = [
  {
    icon: guaranteeIcon,
    title: "Free Shipping",
    desc: "Free shipping on all order",
  },
  {
    icon: headphoneIcon,
    title: "Money Guarantee",
    desc: "30 day money back",
  },
  {
    icon: shippingIcon,
    title: "Online Support 24/7",
    desc: "Technical support 24/7",
  },
  {
    icon: walletIcon,
    title: "Secure Payment",
    desc: "All cards accepted",
  },
];

function StatsSection(): React.ReactElement {
  return (
    <div className="flex items-center justify-between gap-x-4 w-full my-12">
      {itemStats.map((item) => (
        <div className="flex gap-4 items-center" key={item.title}>
          <img src={item.icon} alt={item.icon} className="h-14 opacity-80" />
          <div>
            <h6 className="font-semibold text-base m-0 p-0">{item.title}</h6>
            <span className="text-gray-400 m-0 p-0 text-sm">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;
