import React from "react";
import Profile from "src/assets/img/foto cv.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-[#070A52] from-15% to-[#D21312] to-85% text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:min-[760px]:pt-10">
        <div>
          <img
            src={Profile}
            alt="profile"
            className="rounded-full pb-4 mx-auto w-1/4 md:w-1/4  "
          />
        </div>
        <div className="pb-8 mt-4 flex justify-center w-full">
          <p className="text-4xl font-bold inline">Personal Information</p>
        </div>
        <div className="justify-center grid grid-cols-2 border-solid rounded-xl divide-x border-t-0 w-[90%] md:max-[760px]:m-0 p-0">
          <div className="text-center p-2">Name</div>
          <div className="text-center p-2">
            Ngurah Putra Amerta Widhi Gunaya
          </div>
        </div>
        <div className="justify-center grid grid-cols-2 border-solid rounded-xl divide-x divide-y border-t-0 w-[90%] md:max-[760px]:m-0 p-0">
          <div className="text-center p-2">Gender</div>
          <div className="text-center p-2">Male</div>
        </div>
        <div className="justify-center grid grid-cols-2 border-solid rounded-xl divide-x divide-y border-t-0 w-[90%] md:max-[760px]:m-0 p-0">
          <div className="text-center p-2">Birthdate</div>
          <div className="text-center p-2">March 24, 2006</div>
        </div>
        <div className="justify-center grid grid-cols-2 border-solid rounded-xl divide-x divide-y border-t-0 w-[90%] md:max-[760px]:m-0 p-0">
          <div className="text-center p-2">Age</div>
          <div className="text-center p-2">17</div>
        </div>
        <div className="justify-center grid grid-cols-2 border-solid rounded-xl divide-x divide-y border-t-0 w-[90%] md:max-[760px]:m-0 p-0">
          <div className="text-center p-2">Address</div>
          <div className="text-center p-2">
            Jl.Raya Padang Luwih No.20, Dalung, Kuta Utara, Badung, Bali
          </div>
        </div>
        <div className="justify-center grid grid-cols-2 border-solid rounded-xl divide-x divide-y border-t-0 w-[90%] md:max-[760px]:m-0 p-0">
          <div className="text-center p-2">Nationality</div>
          <div className="text-center p-2">Indonesian</div>
        </div>
      </div>
    </div>
  );
};

export default About;
