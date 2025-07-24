import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
