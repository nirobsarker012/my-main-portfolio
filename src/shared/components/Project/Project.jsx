import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ProjectData } from "../../data/ProjectData";
import ProjectTab from "./ProjectTab";

const Projects = () => {
  const frontend = ProjectData.filter((item) => item.category === "frontend");
  const fullStack = ProjectData.filter(
    (item) => item.category === "full-stack"
  );

  return (
    <div id="projects" className="container">
      <div className="mx-auto my-10 w-[102px] border-b-[3px] border-[#55E6C1]   text-2xl font-semibold md:w-[125px] md:text-3xl">
        <h1 className="text-center text-gray-300">Projects</h1>
      </div>
      <div>
        <Tabs>
          <TabList className="text-center text-gray-300">
            <Tab>ALL</Tab>
            <Tab>FRONTEND</Tab>
            <Tab>FULL STACK</Tab>
          </TabList>
          <TabPanel>
            <ProjectTab projects={ProjectData} />
          </TabPanel>
          <TabPanel>
            <ProjectTab projects={frontend} />
          </TabPanel>
          <TabPanel>
            <ProjectTab projects={fullStack} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
