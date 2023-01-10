import React from "react";
import { Link } from "react-router-dom";

import youtubeIcon from "../assets/icons/socialMedia/youtube.png";
import instagramIcon from "../assets/icons/socialMedia/instagram.png";
import twitterIcon from "../assets/icons/socialMedia/twitter.png";
import facebookIcon from "../assets/icons/socialMedia/facebook.png";

const socialMediaList = [
  {
    name: "YouTube",
    link: "/#",
    logo: youtubeIcon,
  },
  {
    name: "Instagram",
    link: "/#",
    logo: instagramIcon,
  },
  {
    name: "Twitter",
    link: "/#",
    logo: twitterIcon,
  },
  {
    name: "Facebook",
    link: "/#",
    logo: facebookIcon,
  },
];

function SocialMedia() {
  return (
    <div>
      <ul className="flex gap-4 items-center justify-start">
        {socialMediaList.map((item) => (
          <li
            className="hover:scale-110 transition-transform"
            key={item.name}
            title={item.name}
          >
            <a href={item.link} target="_blank">
              <img src={item.logo} alt={item.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
