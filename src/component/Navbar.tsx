import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll/modules";

interface linkItem {
  id: number;
  link: string;
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // list Navbar
  const links: Array<linkItem> = [
      {
        id: 1,
        link: "home",
      },
      {
        id: 2,
        link: "about",
      },
      {
        id: 3,
        link: "education",
      },
    ],
    links2: Array<linkItem> = [
      {
        id: 4,
        link: "portofolio",
      },
      {
        id: 5,
        link: "experience",
      },
      {
        id: 6,
        link: "contact",
      },
    ];

  // change navbar background
  const changeNav = () => {
    if (window.pageYOffset >= 1320) {
      setNavbar(true);
    } else if (window.pageYOffset >= 800) {
      setNavbar(true);
    } else if (window.pageYOffset >= 600) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNav);

  return (
    <div
      className={`flex justify-between items-center w-[75%] mx-[12%] mt-4 px-4 h-24 rounded-2xl z-10 fixed ${
        navbar
          ? `bg-[#222222] transition duration-300`
          : `bg-transparent transition duration-300`
      }`}
    >
      {/* Start */}
      <ul className="hidden md:min-[1022px]:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-2 mx-1 text-md cursor-pointer capitalize font-light hover:scale-105 text-[#F3EFE0] hover:bg-[#F3EFE0] hover:text-[#222222] transition rounded-lg duration-[0.5s]"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <h1 className="text-3xl md:text-6xl sm:text-4xl font-signature text-[#F3EFE0]">
          My CV
        </h1>
      </div>

      <ul className="hidden md:min-[1022px]:flex">
        {links2.map(({ id, link }) => (
          <li
            key={id}
            className="px-2 mx-1 text-md cursor-pointer capitalize font-light hover:scale-105 text-[#F3EFE0] hover:bg-[#F3EFE0] hover:text-[#222222] transition rounded-lg duration-[0.5s]"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Responsive Nav */}

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 duration-300 text-white md:min-[1022px]:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Isi */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute rounded-2xl top-0 left-0 w-full h-min bg-[#222222] text-[#F3EFE0]">
          {links.map(({ id, link }) => (
            <Link to={link} smooth duration={500}>
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-2xl sm:text-4xl hover:scale-90 hover:bg-[#F3EFE0] hover:text-[#222222] rounded-3xl duration-[0.5s] transition"
              >
                {link}
              </li>
            </Link>
          ))}
          {links2.map(({ id, link }) => (
            <Link to={link} smooth duration={500}>
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-2xl sm:text-4xl  hover:scale-90 hover:bg-[#F3EFE0] hover:text-[#222222] rounded-3xl duration-[0.5s] transition"
              >
                {link}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
