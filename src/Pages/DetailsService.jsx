import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const DetailsService = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [service, setServices] = useState({});
  console.log(service);

  useEffect(() => {
    const findService = data.find((item) => item.serviceId == id);
    setServices(findService);
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    e.target.reset();
  };

  return (
    <div className="w-11/12 mx-auto  my-20">
      <div className="">
        <div className=" bg-cyan-100 rounded-lg ">
          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
            <img
              className="w-[550px] h-[400px] object-cover shadow-2xs rounded-lg"
              src={service.image}
              alt=""
            />
            <div className="py-8 px-2">
              <div className=" space-y-3 mt-4 ">
                <h2 className="text-3xl font-bold text-indigo-700">
                  {service.serviceName}
                </h2>

                <p className="text-lg font-semibold text-gray-800">
                  Price: ${service.price}
                </p>
                <p className="text-sm text-gray-500">
                  Category: {service.category}
                </p>
                <p className="text-sm text-gray-500">
                  Rating: {service.rating}
                </p>
                <p className="text-sm text-gray-500">
                  Slots: {service.slotsAvailable}
                </p>
                <p className="text-sm text-gray-500">
                  Provider: {service.providerName}
                </p>
                <p className="text-sm text-gray-500">
                  Contact: {service.providerEmail}
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-7 p-3 text-center">
            {service.description}
          </p>
        </div>
        <div className=" col-span-4 ">
          <div className="mt-10 bg-blue-50 rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-center mb-4 text-indigo-700">
              Book This Service
            </h3>
            <form
              onSubmit={handleBooking}
              className="max-w-md mx-auto flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600  text-white py-3 rounded-lg font-semibold cursor-pointer"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
