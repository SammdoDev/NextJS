"use client";

import { Menu as MenuIcon, X, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-gray-900 to-black w-full px-4 py-4 shadow-md border-b border-gray-800 sticky top-0 z-90 bg-black bg-opacity-70 backdrop-blur-md">
      <nav className="relative flex items-center justify-between md:justify-start">
        <div className="md:hidden">
          <img
            src="/images/profile.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-600"
          />
        </div>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-white text-xl font-bold md:relative md:translate-x-0 md:left-0 md:hidden"
        >
          Filmin<span className="text-blue-500">ID</span>
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        <div className="hidden md:flex items-center gap-4 ml-auto w-full justify-between">
          <Link
            href="/"
            className="text-white text-2xl font-bold tracking-wide"
          >
            Filmin<span className="text-blue-500">ID</span>
          </Link>

          <ul className="flex flex-col md:flex-row gap-6 text-white">
            <li className="hover:text-blue-500 transition-colors font-semibold duration-300">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-blue-500 transition-colors font-semibold duration-300">
              <a href="/genre">Genre</a>
            </li>
          </ul>

          <div className="relative w-72">
            <input
              type="text"
              placeholder="Cari film atau Series..."
              className="w-full bg-gray-800 text-white placeholder:text-gray-400 pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <img
            src="/images/profile.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-600"
          />
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden mt-4 space-y-4 px-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari film atau bioskop..."
              className="w-full bg-gray-800 text-white placeholder:text-gray-400 pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
