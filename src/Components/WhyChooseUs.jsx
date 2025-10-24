import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { GiLoveMystery } from "react-icons/gi";
import { TbClockHour3Filled } from "react-icons/tb";
import { SiTrustedshops } from "react-icons/si";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Expert Vet Doctors",
      desc: "Licensed and trained professionals for your pet’s health needs.",
      icon: <FaUserDoctor />,
    },
    {
      id: 2,
      title: "High Quality Care",
      desc: "We treat pets like family with love and safety.",
      icon: <GiLoveMystery />,
    },
    {
      id: 3,
      title: "24/7 Customer Support",
      desc: "Emergency service available anytime you need us.",
      icon: <TbClockHour3Filled />,
    },
    {
      id: 4,
      title: "Trusted Treatment",
      desc: "Providing best medicines & verified care methods.",
      icon: <SiTrustedshops />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why <span className="text-indigo-600">Choose Us</span>
      </h2>

      <div
        data-aos="zoom-in-down"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4"
      >
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl duration-300"
          >
            <div className="flex justify-center flex-col gap-2 items-center">
              <div className="text-5xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
