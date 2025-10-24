import React, { use } from "react";

const fetchData = fetch("/expertVets.json").then((res) => res.json());

const ExpertVets = () => {
  const vets = use(fetchData);

  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-indigo-700">
            Meet Our Expert Vets
          </h2>
          <div
            data-aos="flip-left"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {vets.map((vet) => (
              <div
                key={vet.id}
                className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{vet.name}</h3>
                <p className="text-indigo-600 font-medium">{vet.specialty}</p>
                <p className="text-gray-500 mt-2">{vet.experience}</p>
                <div className="mt-3">
                  <p className="text-sm text-indigo-700 hover:underline">
                    {vet.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertVets;
