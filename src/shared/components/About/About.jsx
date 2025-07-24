import React from "react";
import AboutTabs from "./AboutTabs";
import SocialIcon from "../SocialIcon";
import my_img from "../../../assets/images/logo/WhatsApp Image 2025-07-24 at 15.21.20.jpeg";
import DecryptedText from "../DecryptedText";

const About = () => {
  return (
    <>
      <div id="about" className="container py-14 ">
        <div className="mx-auto my-10 w-[120px] border-b-[3px] border-[#55E6C1] text-2xl font-semibold md:w-[150px] md:text-3xl">
          {/* <h1 className="text-center text-gray-300">About Me</h1> */}
          <DecryptedText
            speed={100}
            maxIterations={20}
            characters="ABCD1234!?"
            // className="revealed"
            parentClassName="all-letters text-gray-300"
            encryptedClassName="encrypted text-gray-300"
            text="About Me"
            className="text-center text-gray-300"
            animateOn="view"
            revealDirection="center"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 xl:justify-between">
          <div>
            <img
              className="h-[280px] w-[280px] object-cover ring-[3px] ring-[#55E6C1] md:h-[480px]  md:w-[400px]"
              src={my_img}
              alt="my_img"
            />
          </div>
          <div className="max-w-[650px]">
            <AboutTabs />

            {/* social icons */}
            <SocialIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
