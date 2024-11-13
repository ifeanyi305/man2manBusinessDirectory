import React from "react";
import ListingCard from "../components/ListingCard";
import { useLocation } from "react-router-dom";

const dummyData = [
  { id: 1, name: "Tech Hub", category: "Technology", address: "123 Tech Street" },
  { id: 2, name: "Cafe Delight", category: "Food", address: "45 Main Avenue" },
  { id: 3, name: "Fashion Store", category: "Clothing", address: "67 Fashion Blvd" },
];

const Listings = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("search") || "";

  const filteredData = dummyData.filter((listing) =>
    listing.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Business Listings</h2>
      {filteredData.length > 0 ? (
        filteredData.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))
      ) : (
        <p>No listings found</p>
      )}
    </div>
  );
};

export default Listings;
