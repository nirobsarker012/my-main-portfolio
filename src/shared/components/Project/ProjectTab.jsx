import React, { useEffect } from "react";
import { MdLaptopChromebook } from "react-icons/md";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const ProjectTab = ({ projects }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const projectsToShow =
    location.pathname === "/" ? projects.slice(0, 6) : projects;

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {projectsToShow.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg border border-gray-700 bg-[#252425] duration-300 hover:border-[#55E6C1]/50"
          >
            <div className="overflow-hidden">
              <Link to={item.live} target="_blank">
                <img
                  className="h-[220px] w-full transform object-cover duration-500 group-hover:scale-105"
                  src={item.img}
                  alt={item.project_name}
                />
              </Link>
            </div>

            <div className="p-5">
              <h1 className="mb-3 text-center text-xl font-bold text-white">
                {item.project_name}
              </h1>

              <div className="my-4 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to={item.live}
                  target="_blank"
                  className="flex items-center gap-1 rounded-md bg-[#55E6C1] px-3 py-1 font-medium text-black duration-300 hover:bg-[#101010] hover:text-[#55E6C1] hover:shadow hover:shadow-[#55E6C1]/10"
                >
                  <MdLaptopChromebook className="text-lg" />
                  <span>Live</span>
                </Link>
                <Link
                  to={item.client}
                  target="_blank"
                  className="flex items-center gap-1 rounded-md bg-[#55E6C1] px-3 py-1 font-medium text-black duration-300 hover:bg-[#101010] hover:text-[#55E6C1] hover:shadow hover:shadow-[#55E6C1]/10"
                >
                  <FaGithub className="text-lg" />
                  <span>Client</span>
                </Link>
                {item.server && (
                  <Link
                    to={item.server}
                    target="_blank"
                    className="flex items-center gap-1 rounded-md bg-[#55E6C1] px-3 py-1 font-medium text-black duration-300 hover:bg-[#101010] hover:text-[#55E6C1] hover:shadow hover:shadow-[#55E6C1]/10"
                  >
                    <FaGithub className="text-lg" />
                    <span>Server</span>
                  </Link>
                )}
              </div>

              <div className="mt-5">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-[#333333] px-3 py-1 text-xs font-medium text-[#55E6C1] duration-300 hover:bg-[#55E6C1] hover:text-black"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {location.pathname === "/" ? (
        <Link
          className="mx-auto mb-20 mt-14 flex w-44 cursor-pointer items-center justify-center rounded-sm bg-[#55E6C1] py-2 text-center font-semibold text-black duration-300 hover:scale-95 hover:bg-[#252425] hover:text-[#55E6C1]"
          to="https://github.com/nirobsarker012"
        >
          View All Projects{" "}
          <span className="ml-2">
            <FaArrowRight />
          </span>
        </Link>
      ) : (
        <Link
          className="mx-auto mb-20 mt-14 flex w-40 cursor-pointer items-center justify-center rounded-sm bg-[#55E6C1] py-2 text-center font-semibold text-black duration-300 hover:scale-95 hover:bg-[#252425] hover:text-[#55E6C1]"
          to="https://github.com/nirobsarker012"
          target="_blank"
        >
          Explore More
          <span className="ml-2">
            <FaGithub />
          </span>
        </Link>
      )}
    </div>
  );
};

export default ProjectTab;
