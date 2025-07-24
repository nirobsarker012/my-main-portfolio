import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

const SocialIcon = () => {
  const iconStyle =
    "rounded-sm p-[6px] text-white transition-transform duration-300 hover:scale-110";

  return (
    <div className="flex items-center gap-3">
      <h1 className="text-[20px] font-medium text-gray-300">Follow On</h1>
      <Link
        to="https://www.facebook.com/nirob.dmc.10"
        target="_blank"
        className={`cursor-pointer bg-[#1363DF] ${iconStyle}`}
      >
        <FaFacebookF size={20} />
      </Link>
      <Link
        to="https://github.com/nirobsarker012"
        target="_blank"
        className={`cursor-pointer bg-[#000000] ${iconStyle}`}
      >
        <IoLogoGithub size={20} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/nirob-sarker-a9880b288/"
        target="_blank"
        className={`cursor-pointer bg-[#2155CD] ${iconStyle}`}
      >
        <FaLinkedinIn size={20} />
      </Link>
    </div>
  );
};

export default SocialIcon;
