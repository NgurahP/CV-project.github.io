import React from "react";
import sd from "../assets/img/sd.jpg";
import smp from "../assets/img/smp.jpg";
import smk from "../assets/img/smk.jpg";

const Education = () => {
  const Edu = [
    {
      id: 1,
      src: sd,
      title: "Immanuel Elementary School",
      tahun: "(2012 - 2018)",
    },
    {
      id: 2,
      src: smp,
      title: "2 Harapan Christian Middle School",
      tahun: "(2018 - 2021)",
    },
    {
      id: 3,
      src: smk,
      title: "Wira Harapan Vocational High School",
      tahun: "(2021 - Now)",
    },
  ];

  return (
    <div
      id="education"
      className="bg-gradient-to-b from-gray-500 to-black w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4
        flex flex-col justify-center w-full h-full text-white"
      >
        <div>
          <p className="text-2xl font-bold border-b-4 border-gray-400 p-2 inline">
            Education
          </p>
        </div>
        <div className="w-full grid flex-col sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {Edu.map(({ id, src, title, tahun }) => (
            <div key={id}>
              <img src={src} alt="" className="w-80 max-sm:w-2/5 mx-auto" />
              <div className="mt-4">{title}</div>
              <div>{tahun}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
