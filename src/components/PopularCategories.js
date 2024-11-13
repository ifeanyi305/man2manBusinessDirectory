import React from "react";

const categories = [
  { icon: "🏬", name: "Restaurants" },
  { icon: "🏨", name: "Hotels" },
  { icon: "🛍️", name: "Shopping" },
  { icon: "🚗", name: "Automotive" },
  { icon: "💼", name: "Business" },
  { icon: "🏋️", name: "Fitness" },
];

const PopularCategories = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Popular Categories</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {categories.map((category, index) => (
          <div key={index} className="p-6 w-40 bg-white rounded-lg shadow-lg">
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="font-bold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
