import React from "react";
import AboutTabs from "./AboutTabs";
import SocialIcon from "../SocialIcon";
import my_img from "../../../assets/images/Auth_Img/Nirob_Sarker.jpeg";
import { AnimatePresence, easeInOut, motion } from "motion/react";

export const fedup = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};

const About = () => {
  return (
    <>
      <div id="about" className="container py-14 ">
        <div className="mx-auto my-10 w-[120px] border-b-[3px] border-[#55E6C1] text-2xl font-semibold md:w-[150px] md:text-3xl">
          <AnimatePresence mode="wait">
            <motion.h1
              variants={fedup(0.1)}
              initial="hidden"
              whileInView="show"
              className="text-center text-gray-300"
            >
              About Me
            </motion.h1>
          </AnimatePresence>
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
