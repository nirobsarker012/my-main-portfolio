import React, { useState } from "react";
import AboutInfo from "./AboutInfo";
import Education from "../Education";

const AboutTabs = () => {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (id) => {
    setToggle(id);
  };

  const tabClass = (id) =>
    toggle === id ? "block animate-fade-in-up" : "hidden";

  return (
    <div className="my-10">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2 border-b border-[#252425] sm:gap-5">
        <button
          className={`${
            toggle === 1
              ? "bg-[#55E6C1] text-black"
              : "text-white border border-gray-300"
          } mb-2 rounded-full px-14 py-2 text-[18px] font-medium sm:mb-5 md:px-20 cursor-pointer`}
          onClick={() => handleToggle(1)}
        >
          About Me
        </button>
        <button
          className={`${
            toggle === 2
              ? "bg-[#55E6C1] text-black"
              : "text-white border border-gray-300"
          } mb-2 rounded-full px-14 py-2 text-[18px] font-medium sm:mb-5 md:px-20 cursor-pointer`}
          onClick={() => handleToggle(2)}
        >
          Educations
        </button>
      </div>

      <div className={tabClass(1)}>
        <AboutInfo />
      </div>
      <div className={tabClass(2)}>
        <Education />
      </div>
    </div>
  );
};

export default AboutTabs;
