import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import man2manLogo from "../images/Man2Man.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white p-6 bg-purple-800 md:bg-transparent">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="">
          <img className="w-[80px]" src={man2manLogo} alt="man2man_logo" />
          <h1 className="text-l font-bold">Business Directory</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isOpen ? <HiX /> : <HiMenuAlt3 />} {/* Toggle between menu and close icon */}
          </button>
        </div>

        {/* Navigation Links - Hidden on mobile by default */}
        <nav className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto mt-4 lg:mt-0`}>
          <Link onClick={toggleMenu} to="/" className="block px-4 py-2 font-[600] text-[20px]">Home</Link>
          <Link onClick={toggleMenu} to="/" className="block px-4 py-2 font-[600] text-[20px]">Listings</Link>
          <Link onClick={toggleMenu} to="/" className="block px-4 py-2 font-[600] text-[20px]">About</Link>
          <Link onClick={toggleMenu} to="/" className="block px-4 py-2 font-[600] text-[20px]">Contact</Link>
          <button onClick={toggleMenu} type="button" className="block lg:inline-block bg-black text-white px-4 py-3 rounded-md mt-2 lg:mt-0">
            + Add listing
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
