import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
