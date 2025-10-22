import React from "react";
import { Link } from "react-router";

const PopularServices = ({ item }) => {
  const { serviceId, serviceName, rating, price, image } = item;
  return (
    <div className=" p-3 rounded-lg shadow-2xl">
      <img
        className="w-[90%] h-[300px] object-cover mx-auto rounded-lg"
        src={image}
        alt=""
      />
      <div className="px-5.5 space-y-1.5 mt-2">
        <h2 className="text-lg font-semibold">
          Service-Name : <span className="text-gray-500">{serviceName}</span>
        </h2>
        <h3 className="text-lg font-semibold">
          Rating : <span className="text-gray-500">{rating}</span>
        </h3>
        <p className="text-lg font-semibold">
          Price : <span className="text-gray-500">{price}</span>
        </p>
        <div className="flex justify-center items-center">
          <Link
            to={`/popular-section/${serviceId}`}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-lg transition cursor-pointer"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
