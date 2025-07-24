import React from "react";
import footer_img from "../../assets/images/logo/ChatGPT Image Jul 22, 2025, 09_48_36 PM.png";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-[1200px] border-t border-[#252425] ">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-3 py-5">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={footer_img}
            alt="footer_img"
          />
          <h1 className="text-[20px] font-medium text-gray-300">
            Nirob Sarker
          </h1>
        </div>
        {/* social icons */}
        <SocialIcon />
      </div>
      <div className="mt-5 pb-7 text-center  text-gray-300 sm:mt-0">
        <p>
          All Right Reserved © {year}{" "}
          <span className="font-semibold text-[#55E6C1] hover:underline">
            <Link
              to="https://www.linkedin.com/in/nirob-sarker-a9880b288/"
              target="_blank"
            >
              Nirob Sarker
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
