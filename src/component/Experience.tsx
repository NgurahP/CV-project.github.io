import React from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import java from "../assets/img/kisspng-java-platform-enterprise-edition-computer-icons-j-java-5adcc6d9352c53.8637052715244182652178.png";
import php from "../assets/img/PHP-logo.svg.png";
import react from "../assets/img/apps.png";
import tailwind from "../assets/img/tailwindcss_logo_icon_167923.png";

const Experience = () => {
  const exp = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-[#E44D26]",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-[#264DE4]",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-[#DB380E]",
    },
    {
      id: 4,
      src: php,
      title: "PHP",
      style: "shadow-[#787CB4]",
    },
    {
      id: 5,
      src: react,
      title: "ReactJs",
      style: "shadow-[#00DBFC]",
    },
    {
      id: 6,
      src: tailwind,
      title: "TailWindcss",
      style: "shadow-[#47ABB3]",
    },
  ];

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-gray-500 to-black w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p4
        flex flex-col justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-400 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            these are the programming language i've work with
          </p>
        </div>

        {/* Isi Exp */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {exp.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:translate-y-1 duration-[0.5s] ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <div className="mt-4">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
