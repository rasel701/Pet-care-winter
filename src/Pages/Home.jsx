import React from "react";
import HeroSection from "../Components/HeroSection";
import PopularServices from "../Components/PopularServices";
import { useLoaderData } from "react-router";
import PetsTips from "../Components/petsTips";
import ExpertVets from "../Components/ExpertVets";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {
  const data = useLoaderData();
  console.log(import.meta.env.VITE_Name);

  return (
    <div>
      <HeroSection />
      <section className="pupular-service">
        <h2 className="text-3xl text-center font-bold mb-5">
          Popular Services
        </h2>
        <div className="grid lg:grid-cols-3 justify-center items-center p-3 max-w-11/12 mx-auto gap-6 ">
          {data.map((item) => (
            <PopularServices key={item.serviceId} item={item} />
          ))}
        </div>
      </section>
      <section className="tips mt-8">
        <PetsTips />
      </section>
      <section className="expertVest">
        <ExpertVets />
      </section>
      <section>
        <WhyChooseUs />
      </section>
    </div>
  );
};

export default Home;
