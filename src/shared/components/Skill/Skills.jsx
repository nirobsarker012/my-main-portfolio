import React from "react";
import {
  personalSkills,
  skillsBackend,
  skillsFrontend,
  skillTools,
} from "../../data/SkillData";
import GithubContributionsGraph from "../GihubContributionGraph";
import SkillCategory from "./SkillCategory";

const Skills = () => {
  return (
    <div id="skill" className="container">
      <div>
        <div className="mx-auto my-10 w-[66px] border-b-[3px] border-[#55E6C1]   text-2xl font-semibold md:w-[80px] md:text-3xl">
          <h1 className="text-center text-gray-300">Skills</h1>
        </div>
        <p className="-mt-5 text-center text-gray-300">
          Here are some of my skills on which I have been <br />
          working for the past 2 years.
        </p>

        <>
          <div className="grid grid-cols-1 gap-5 md:gap-10 py-10 md:grid-cols-2">
            <SkillCategory title="Frontend" skills={skillsFrontend} />
            <SkillCategory title="Backend" skills={skillsBackend} />
            <SkillCategory title="Tools" skills={skillTools} />
            <SkillCategory title="Personal Skills" skills={personalSkills} />
          </div>
          {/* github contributions graph */}
          <GithubContributionsGraph />
        </>
      </div>
    </div>
  );
};

export default Skills;
