import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll/modules";

interface linkItem{
  id : number;
  link : string;
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
        link: "portofolio",
      },
    ],
    links2: Array<linkItem> = [
      {
        id: 4,
        link: "education",
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
  return (
    <div className="flex justify-between items-center w-[75%] mx-[12%] mt-4 px-4 h-14 text-white bg-gradient-to-b from-[#ED2B2A] to-[#D21312] rounded-2xl drop-shadow-none fixed">
      {/* Start */}
      <ul className="hidden md:min-[1044px]:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-light text-white hover:-translate-y-1 hover:border-b-2 hover:bg-[#070A52] border-[#F15A59] transition rounded-xl duration-[0.5s]"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <h1 className="text-3xl font-signature">My CV</h1>
      </div>

      <ul className="hidden md:min-[1044px]:flex">
        {links2.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-light text-white hover:-translate-y-1 hover:border-b-2 hover:bg-[#070A52] border-[#F15A59] transition rounded-xl duration-[0.5s]"
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
        className="cursor-pointer pr-4 z-10 duration-300 text-white md:min-[1044px]:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Isi */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute rounded-2xl top-0 left-0 w-full h-min bg-gradient-to-b from-[#D21312] to-[#F15A59]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 hover:bg-slate-400 hover:text-black rounded-3xl duration-[0.5s]"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          {links2.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-110 hover:bg-slate-400 hover:text-black rounded-3xl duration-[0.5s]"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
