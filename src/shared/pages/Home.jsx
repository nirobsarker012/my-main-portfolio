import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Skills from "../components/Skill/Skills";
import DayCode from "../components/DayCode/DayCode";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs/Blogs";

const Home = () => {
  return (
    <div className="w-full bg-black pop">
      {/* Dark Noise Colored Background */}

      <div
        className="relative"
        style={{
          background: "#000000",
          backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      >
        {/* <div
          className="absolute inset-0"
          
        /> */}
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <DayCode />
        <Project />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
