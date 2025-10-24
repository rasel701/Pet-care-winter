import React from "react";
import Navber from "../Components/Navber";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div>
      <header>
        <Navber />
      </header>
      <main>
        {navigation.state === "loading" ? <LoadingSpinner /> : <Outlet />}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
