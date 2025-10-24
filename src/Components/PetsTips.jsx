import React from "react";
const winterCareTips = [
  {
    id: 1,
    title: "Keep Your Pets Warm",
    description:
      "Use cozy blankets and sweaters to protect your pets from cold weather.",
  },
  {
    id: 2,
    title: "Hydration Matters",
    description:
      "Even in winter, make sure your pets have access to fresh water at all times.",
  },
  {
    id: 3,
    title: "Moisturize Paws",
    description:
      "Apply paw balm to prevent cracks and dryness caused by cold surfaces.",
  },
  {
    id: 4,
    title: "Limit Outdoor Time",
    description:
      "Avoid long outdoor walks during extreme cold and always keep an eye on frostbite signs.",
  },
];

const PetsTips = () => {
  return (
    <div>
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-indigo-700">
            Winter Care Tips for Pets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
            {winterCareTips.map((tip) => (
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                key={tip.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetsTips;
