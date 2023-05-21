import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

interface cont {
  icon: any;
  link: string;
  style: string;
}

const Contact = () => {
  const contact: Array<cont> = [
    {
      icon: <MdEmail />,
      link: "mailto:ngurahputra2425@gmail.com",
      style: "hover:bg-[#F04235]",
    },
    {
      icon: <BsWhatsapp />,
      link: "https://wa.me/+6289653218537",
      style: "hover:bg-[#00A000]",
    },
    {
      icon: <BsInstagram />,
      link: "https://www.instagram.com/ngurahputra2403/",
      style:
        "bg-gradient-to-tr hover:from-[#EFC000] hover:from-10% hover:via-[#EE0712] hover:via-20% hover:to-[#7838B0] hover:to-70%",
    },
  ];
  return (
    <div id="contact" className="flex flex-col items-center h-1/5 bg-[#434242]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className="border-b-4 my-4
         border-[#F3EFE0]"
        >
          <p className="text-lg sm:text-xl">Contact Me</p>
        </div>
        <div className="flex flex-row justify-center py-4 items-center">
          {contact.map(({ icon, link, style }) => (
            <a
              href={link}
              className={`mx-4 p-2 text-xl hover:scale-105 text-white transition border rounded-full ${style}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      {/* <div>
        <div>
            <a
              href="https://wa.me/+6289653218537"
              className="border rounded-xl bg-slate-500"
            >
              <BsWhatsapp />
            </a>
            <a
              href="mailto:ngurahputra2425@gmail.com"
              className="border rounded-xl bg-slate-500"
            >
              <MdEmail />
            </a>
            <a
              href="https://www.instagram.com/ngurahputra2403/"
              className="border rounded-xl bg-slate-500"
            >
              <BsInstagram />
            </a>
          </div>
      </div> */}
    </div>
  );
};

export default Contact;
