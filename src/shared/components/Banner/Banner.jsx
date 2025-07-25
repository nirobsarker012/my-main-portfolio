import React from "react";
import portfolio_illustration from "../../../assets/images/portfolio-illustration.png";
import { BsDownload, BsEye } from "react-icons/bs";
import TypeWriter from "../TypeWriter";
import SplitText from "../SplitText";
import CodeCard from "../CordCard";
const Banner = () => {
  const handleScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      const topOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="mx-auto flex container flex-wrap items-center justify-center pt-32 lg:pt-40 gap-10 xl:justify-between">
      <div className="order-last mb-14 lg:order-first lg:mb-0">
        <SplitText
          text="Nirob Sarker"
          className="text-3xl font-semibold md:text-5xl text-gray-300"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <TypeWriter />
        <div className="flex items-center gap-3">
          <div
            id="view_projects"
            onClick={handleScroll}
            className="ns-big-cursor mt-5 flex w-40 cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#55E6C1] py-2 text-center font-semibold text-black transition-all duration-300 hover:bg-[#252425] hover:text-[#55E6C1]"
          >
            View Projects
            <BsEye className="text-lg" />
          </div>
          <div className="mt-5 flex w-40 cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#55E6C1] py-2 text-center font-semibold text-black transition-all duration-300 hover:bg-[#252425] hover:text-[#55E6C1]">
            <a
              href="/Nirob-CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="ns-big-cursor flex items-center gap-2"
            >
              Download CV
              <BsDownload className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative order-first -mt-12 w-[220px] sm:w-[400px] md:bottom-0 md:-mt-0 md:mb-10 lg:order-last xl:mb-0 xl:w-[450px]">
        <img
          className="animate-spin-custom lg:hidden"
          src={portfolio_illustration}
          alt="portfolio_illustration"
        />
        <div className="absolute left-[32%] top-[50%] text-2xl text-white lg:hidden">
          <marquee
            scrollamount="2.5"
            width="50%"
            direction="down"
            height="20px"
          >
            <div className="text-center text-[14px]">
              React.js Node.js Javascript CSS
            </div>
          </marquee>
        </div>
        <div className="hidden lg:block">
          <CodeCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
