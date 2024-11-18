"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Massage Expert</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden block text-white"
        >
          ☰
        </button>
        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex gap-4 absolute md:static bg-gray-900 md:bg-transparent top-full left-0 w-full md:w-auto`}
        >
          <li>
            <a href="#about" className="block md:inline-block py-2 px-4">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="block md:inline-block py-2 px-4">
              Services
            </a>
          </li>
          <li>
            <a href="#reviews" className="block md:inline-block py-2 px-4">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className="block md:inline-block py-2 px-4">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
