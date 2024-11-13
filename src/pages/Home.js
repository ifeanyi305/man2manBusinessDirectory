import React from "react";
import { useNavigate } from "react-router-dom";
import PopularCategories from "../components/PopularCategories";
import FeaturedListings from "../components/FeaturedListings";
import { FaBuilding } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import Header from "../components/Header";

const Home = () => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      icon: <FaBuilding className="text-red-500 text-4xl" />,
      title: "Choose A Category",
      description:
        "Browse through various categories like restaurants, hotels, healthcare, and more to find what suits your needs.",
    },
    {
      id: 2,
      icon: <FaBuilding className="text-red-500 text-4xl" />,
      title: "Find What You Need",
      description:
        "Search for specific businesses, services, or professionals listed in the directory to meet your requirements.",
    },
    {
      id: 3,
      icon: <FaBuilding className="text-red-500 text-4xl" />,
      title: "Select The Best Option",
      description:
        "Compare listings, read reviews, and select the best-rated businesses that cater to your preferences.",
    },
    {
      id: 4,
      icon: <FaBuilding className="text-red-500 text-4xl" />,
      title: "Explore Business Details",
      description:
        "Get detailed information about the business, including contact details, location, working hours, and customer reviews.",
    },
  ];
  

  const testimonials = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "David Johnson",
      role: "Small Business Owner",
      feedback:
        "Man2Man Business Directory has been a game-changer for my restaurant. It boosted our online presence and brought in more local customers than ever before!",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/64.jpg",
      name: "Sarah Williams",
      role: "Freelance Designer",
      feedback:
        "I was able to quickly find reliable service providers in my area. The user interface is intuitive, making it easy to navigate and find exactly what I needed.",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "James Brown",
      role: "Marketing Consultant",
      feedback:
        "The Man2Man business directory is perfect for discovering top-rated local businesses. The reviews and ratings helped me choose the best options for my clients.",
    },
  ];
  

  const handleSearch = () => {
    navigate(`/listings?search=${search}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/directone/images/bg_1.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10">
          <div className="absolute fixed px-[7%] top-0 left-0 w-full">
            <Header />
          </div>
          <div className="text-center text-white px-4">
            <h1 className="md:text-[50px] text-[30px] font-extrabold mb-4">Find the Best Business in Your City</h1>
            <p className="mb-6">Discover top-rated listings and popular categories in your area.</p>
            {/* Search Bar */}
            <div className="md:flex justify-center gap-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="p-3 w-full md:w-64 border rounded-lg text-gray-900"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <input
                type="text"
                placeholder="Location"
                className="p-3 w-full md:w-64 my-2 md:my-0 border rounded-lg text-gray-900"
              />
              <div>
                <button
                  onClick={handleSearch}
                  className="bg-black w-full text-white p-3 rounded-lg font-bold"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        {/* Popular Categories */}
        <PopularCategories />
        {/* Featured Listings */}
        <FeaturedListings />
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-red-500 font-semibold mb-2 uppercase">
            Testimonial
          </h2>
          <h3 className="text-3xl font-bold mb-10">Happy People</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 mt-4 md:mt-0 rounded-lg shadow-lg relative"
              >
                <div className="absolute bg-red-500 rounded-full p-6 -top-8 left-1/2 transform -translate-x-1/2 ">
                  <FaQuoteLeft className="text-white text-2xl" />
                </div>
                <p className="text-gray-700 mt-8 mb-6">{testimonial.feedback}</p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <span className="text-red-500 text-sm">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black p-4">
        <p className="text-center text-red-500 text-[13px]">Let's Find Out</p>
        <p className="text-center text-white text-[27px] font-[600]">How it works</p>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-red-100 p-4 rounded-full">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
