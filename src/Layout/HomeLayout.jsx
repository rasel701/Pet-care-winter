import React from "react";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navber />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
