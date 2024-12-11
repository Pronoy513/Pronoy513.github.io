import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = ({ onClick = () => {} }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={onClick}>
            {name}
          </a>
        </li>
      ))}
      <li
        key="Resume"
        className="nav-li p-2 rounded-md max-sm:mb-2 border-2 border-stone-50 hover:border-rose-300"
      >
        <a href={"/assets/Resume.pdf"} className="nav-li_a" download>
          Resume
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="text-white max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Pronoy Kundu
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle state"
              className="w-6 h-6"
            />
          </button>
          <nav className=" sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="px-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
