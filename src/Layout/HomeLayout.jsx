import React, { useEffect } from "react";
import Navber from "../Components/Navber";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

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
