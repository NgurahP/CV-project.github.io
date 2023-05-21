import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll/modules";

function Home() {
  return (
    <div
      id="home"
      className="h-screen md:max-[766px]:mt-20 w-full bg-hero bg-no-repeat bg-cover bg-center sm:bg-cover bg-fixed"
    >
      <div className="max-w-screen-lg flex flex-col item-center justify-start h-full ml-[10%] px-2 md:flex-row">
        <div className="flex flex-col mt-[50%] sm:mb-[50%] justify-center h-auto">
          <h2 className="text-xl w-28 md:text-6xl md:w-80 sm:text-6xl sm:w-80 font-bold border-b-2 border-[#FFE6E6] text-[#22A39F]">
            About Me
          </h2>
          <p className="text-[#FFE6E6] text-lg sm:text-2xl py-4 max-w-md">
            I am a junior programmer and student at the Wira Harapan Vocational
            High School, I am currently a street vendor at Taksu Tech, for more
            details, click the button below.
          </p>

          <div>
            <Link to={"about"} smooth duration={500}>
              <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#22A39F] cursor-pointer group">
                More
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdKeyboardArrowRight size={30} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
