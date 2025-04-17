import React, { useState } from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? featuresData : featuresData.slice(0, 3);

  return (
    <section
      id="features"
      className="w-full py-20 border-b border-gray-800 bg-gray-900 text-gray-100"
    >
      <div className="text-center mb-12">
        <Title title="Features" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 p-4 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {visibleFeatures.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {featuresData.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Features;
