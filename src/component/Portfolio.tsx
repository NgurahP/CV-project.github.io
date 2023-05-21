import React from "react";
import portfolio1 from "../assets/imgprojek/portfolio.jpg";

const Portfolio = () => {
  return (
    <div id="portofolio" className="bg-[#F3EFE0] text-[#424242] h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-6xl font-bold inline border-b-4 border-[#222222]">
            Portfolio
          </p>
          <p className="py-6 text-xl sm:text-2xl">
            Check out some of my work here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-400 rounded-lg">
            <img
              src={portfolio1}
              alt="portofolio"
              className="rounded-md duration-200 transition hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 rounded-md transition hover:bg-[#008ECC] hover:text-[#F3EFE0] hover:scale-105">
                Code
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 rounded-md transition hover:bg-[#008ECC] hover:text-[#F3EFE0] hover:scale-105">
                <a
                  href="https://ngurahputra2425portfolio.on.drv.tw/Portfolio/Projek/portfolio.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
