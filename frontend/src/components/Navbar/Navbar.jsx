import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-shadow ${
        isScrolled ? "shadow-lg bg-white/90" : "bg-white/95"
      }`}
    >
      <nav className="max-w-[1350px] mx-auto flex items-center justify-between px-6 md:px-10 h-[12vh]">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold text-zinc-900">
          Insta<span className="text-orange-600 uppercase">s</span>hop
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium text-[17px] transition-all duration-300 ${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-gray-800 hover:text-orange-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-5">
          {/* Search */}
          <div
            className={`relative flex items-center border rounded-full transition-all duration-300 ${
              searchOpen ? "w-48 md:w-64 px-3" : "w-10 px-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className={`transition-all duration-300 bg-transparent outline-none text-gray-800 text-sm w-full ${
                searchOpen ? "opacity-100 px-2" : "opacity-0 w-0"
              }`}
            />
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <CiSearch className="text-2xl" />
            </button>
          </div>

          {/* Icons */}
          <Link
            to="/wishlist"
            className="text-2xl text-gray-700 hover:text-orange-600 transition-transform duration-300 hover:scale-110"
          >
            <FaHeart />
          </Link>
          <Link
            to="/cart"
            className="text-2xl text-gray-700 hover:text-orange-600 transition-transform duration-300 hover:scale-110"
          >
            <FaShoppingBag />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-700 hover:text-orange-600 transition-transform duration-300 md:hidden"
          >
            {menuOpen ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-500 z-40 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-8 text-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-orange-600"
                      : "text-gray-800 hover:text-orange-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
