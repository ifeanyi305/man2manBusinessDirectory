import React from "react";
import ListingCard from "./ListingCard";

const listings = [
  { id: 1, name: "Tech Hub", category: "Technology", address: "123 Tech Street" },
  { id: 2, name: "Cafe Delight", category: "Food", address: "45 Main Avenue" },
  { id: 3, name: "Fashion Store", category: "Clothing", address: "67 Fashion Blvd" },
  { id: 4, name: "Health Clinic", category: "Healthcare", address: "12 Wellness Way" },
];

const FeaturedListings = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
