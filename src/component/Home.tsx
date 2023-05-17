import React from "react";
import HeroImage from "src/assets/img/Hero-bg.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div
      id="home"
      className="h-screen md:max-[766px]:mt-20 w-full bg-gradient-to-b from-[#D21312] from-20% to-[#070A52] to-80%"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-auto">
          <h2 className="text-4xl sm:text-7xl font-bold border-b-2 border-[#FFE6E6] text-white">
            About Me
          </h2>
          <p className="text-[#CBF1F5] py-4 max-w-md">
            I am a junior programmer and student at the Wira Harapan Vocational
            High School, I am currently a street vendor at Taksu Tech, for more
            details, click the button below.
          </p>

          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center hover:bg-gradient-to-tr hover:from-[#070A52] hover:to-[#AF0404] rounded-md bg-gradient-to-bl from-[#FF0000]  to-[#414141] cursor-pointer group">
              More
              <span className="group-hover:rotate-90 duration-300 ">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="hero"
            className="rounded-full mx-auto w-2/4 md:w-3/6  "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
