import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      {/* Navber */}
      <Navbar />

      {/* Daynamic layoutes */}
      <div className="">
        <Outlet />
      </div>

      {/* Footer */}
    </div>
  );
};

export default MainLayouts;
