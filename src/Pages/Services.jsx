import React from "react";
import { useLoaderData } from "react-router";
import PopularServices from "../Components/PopularServices";

const Services = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-3xl my-5 font-bold underline text-gray-500">
        All Services
      </h2>
      <div className="grid lg:grid-cols-3 justify-center items-center p-3 max-w-11/12 mx-auto gap-6 ">
        {data.map((item) => (
          <PopularServices key={item.serviceId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
