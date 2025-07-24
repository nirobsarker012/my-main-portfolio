import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const GithubContributionsGraph = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center px-4">
      {/* Section Title */}
      <div className="mx-auto my-10 border-b-[3px] border-[#55E6C1] px-4 pb-1 text-center">
        <h1 className="text-2xl font-semibold text-gray-300 md:text-3xl">
          Days I Code
        </h1>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="overflow-x-auto">
        <GitHubCalendar
          username="nirobsarker012"
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              "data-tooltip-id": "react-tooltip",
              "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
            })
          }
        />
      </div>

      {/* Tooltip for Hovered Cells */}
      <ReactTooltip
        id="react-tooltip"
        className="!bg-black !text-gray-300 !text-sm !px-3 !py-2 rounded-md shadow-lg z-50"
      />
    </div>
  );
};

export default GithubContributionsGraph;
