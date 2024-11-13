import React from "react";

const ListingCard = ({ listing }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">{listing.name}</h3>
      <p className="text-gray-600">{listing.category}</p>
      <p className="text-gray-500">{listing.address}</p>
      <button className="mt-4 bg-black text-white py-1 px-4 rounded-lg">
        View Details
      </button>
    </div>
  );
};

export default ListingCard;
