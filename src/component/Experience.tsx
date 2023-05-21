import React from "react";
import html from "../assets/imgprojek/exp/html-pngwing.com.png";
import css from "../assets/imgprojek/exp/pngwing.com.png";
import java from "../assets/img/kisspng-java-platform-enterprise-edition-computer-icons-j-java-5adcc6d9352c53.8637052715244182652178.png";
import php from "../assets/imgprojek/exp/php-pngwing.com.png";
import react from "../assets/img/apps.png";
import tailwind from "../assets/img/tailwindcss_logo_icon_167923.png";
import sql from "../assets/imgprojek/exp/sql-pngwing.com.png";
import c from "../assets/imgprojek/exp/cplusplus_plain_logo_icon_146580.png";

interface exptype {
  id: number;
  src: string;
  title: string;
  style: string;
}

const Experience = () => {
  const exp: Array<exptype> = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "hover:shadow-[#E44D26] transition",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "hover:shadow-[#264DE4]",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "hover:shadow-[#DB380E]",
    },
    {
      id: 4,
      src: php,
      title: "PHP",
      style: "hover:shadow-[#5C469C]",
    },
    {
      id: 5,
      src: react,
      title: "ReactJs",
      style: "hover:shadow-[#00DBFC]",
    },
    {
      id: 6,
      src: tailwind,
      title: "TailWindcss",
      style: "hover:shadow-[#47ABB3]",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "hover:shadow-[#000000]",
    },
    {
      id: 8,
      src: c,
      title: "C++",
      style: "hover:shadow-[#9C033A]",
    },
  ];

  return (
    <div id="experience" className="bg-[#008ECC] w-full h-[120vh] sm:h-screen">
      <div
        className="max-w-screen-lg mx-auto p-6
        flex flex-col justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-2xl sm:text-5xl font-bold border-b-4 border-[#434242] p-2 inline">
            Experience
          </p>
          <p className="py-6 text-md sm:text-xl">
            these are the programming language i've work with
          </p>
        </div>

        {/* Isi Exp */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {exp.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 transition duration-[0.5s] ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <div className="mt-4 text-lg">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
