import React from "react";
import Profile from "src/assets/img/foto cv.jpg";

// tipe data personal list
// interface info {
//   title: string;
//   about: string;
// }

const About = () => {
  //   // persolan list data
  //   const personal: Array<info> = [
  //     {
  //       title: "Name",
  //       about: "Ngurah Putra Amerta Widhi Gunaya",
  //     },
  //     {
  //       title: "Gender",
  //       about: "Male",
  //     },
  //     {
  //       title: "Birthdate",
  //       about: "March 24, 2006",
  //     },
  //     {
  //       title: "Age",
  //       about: "17",
  //     },
  //     {
  //       title: "Address",
  //       about: "Jl.Raya Padang Luwih No.20, Dalung, Kuta Utara, Badung, Bali",
  //     },
  //     {
  //       title: "Nationality",
  //       about: "Indonesian",
  //     },
  //   ];
  return (
    <div id="about" className="w-full h-screen bg-[#F3EFE0] text-[#222222]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:min-[760px]:pt-10">
        <div>
          <img
            src={Profile}
            alt="profile"
            className="rounded-full pb-4 mx-auto w-1/4 md:w-1/4  "
          />
        </div>

        <div className="pb-8 mt-4 flex justify-center items-center w-full">
          <p className="text-2xl sm:text-4xl font-bold text-[#22A39F] inline">
            Personal Information
          </p>
        </div>
        <div className="">
          <div className="justify-center grid grid-cols-2 divide-[#222222] divide-x-2 w-full md:max-[760px]:m-0 p-0">
            <div className="text-center text-lg border-[#222222] p-2 border-b-2">
              Name
            </div>
            <div className="text-center text-lg border-[#222222] p-2 border-b-2">
              Ngurah Putra Amerta Widhi Gunaya
            </div>
          </div>
          <div className="justify-center grid grid-cols-2 divide-[#222222] divide-x-2 border-t-0 w-full md:max-[760px]:m-0 p-0">
            <div className="text-center text-lg p-2">Gender</div>
            <div className="text-center text-lg p-2">Male</div>
          </div>
          <div className="justify-center grid grid-cols-2 divide-[#222222] divide-x-2 divide-y-2 border-t-0 w-full md:max-[760px]:m-0 p-0">
            <div className="text-center text-lg p-2">Birthdate</div>
            <div className="text-center text-lg p-2">March 24, 2006</div>
          </div>
          <div className="justify-center grid grid-cols-2 divide-[#222222] divide-x-2 divide-y-2 border-t-0 w-full md:max-[760px]:m-0 p-0">
            <div className="text-center text-lg p-2">Age</div>
            <div className="text-center text-lg p-2">17</div>
          </div>
          <div className="justify-center grid grid-cols-2 divide-[#222222] divide-x-2 divide-y-2 border-t-0 w-full md:max-[760px]:m-0 p-0">
            <div className="text-center text-lg p-2">Address</div>
            <div className="text-center text-lg p-2">
              Jl.Raya Padang Luwih No.20, Dalung, Kuta Utara, Badung, Bali
            </div>
          </div>
          <div className="justify-center grid grid-cols-2 divide-[#222222] divide-x-2 divide-y-2 border-t-0 w-full md:max-[760px]:m-0 p-0">
            <div className="text-center text-lg p-2">Nationality</div>
            <div className="text-center text-lg p-2">Indonesian</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
