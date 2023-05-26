import React from "react";
import { useForm, DeepMap, FieldError } from "react-hook-form";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

interface Cont {
  icon: any;
  link: string;
  style: string;
}

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{
    userName: string;
    email: string;
    text: string;
  }>();

  console.log("errors", errors);

  const contact: Array<Cont> = [
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
    <div id="contact" className="w-full h-screen bg-[#434242] p-4 text-black">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-xl md:text-4xl font-bold inline border-b-2 md:border-b-4 border-[#F3EFE0]">
            Contact Me
          </p>
          <p className="py-6 text-md md:text-xl">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            autoComplete="off"
            action="https://getform.io/f/a876231f-2e8d-4159-9c0e-8522ac72ee59"
            method="POST"
            className="flex flex-col w-full md:w-1/2 md:mr-4">
            <input
              {...register("userName", {
                required: { value: true, message: "Please Enter Your name" },
                minLength: {
                  value: 3,
                  message:
                    "Incorrect Input. Enter your name at least 3 characters long",
                },
                maxLength: {
                  value: 40,
                  message:
                    "Incorrect input, the name entered cannot be longer than 40 characters",
                },
              })}
              type="text"
              name="userName"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-[#F3EFE0] focus:outline-none"
            />
            {errors.userName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.userName.message}
              </p>
            )}

            <input
              {...register("email", {
                required: "Please Enter Your Email",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 p-2 bg-transparent border-2 rounded-md text-[#F3EFE0] focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {String(errors.email.message) || ""}
              </p>
            )}

            <textarea
              {...register("text", { required: "Please send me a message" })}
              placeholder="Enter your message"
              name="text"
              className="mt-2 p-2 bg-transparent border-2 rounded-md text-[#F3EFE0] focus:outline-none h-32 md:h-52"></textarea>
            {errors.text && (
              <p className="mt-1 text-sm text-red-500">
                {String(errors.text.message) || ""}
              </p>
            )}

            <button
              type="submit"
              className="text-[#434242] w-fit px-6 py-3 my-8 mx-auto flex items-center bg-[#F3EFE0] rounded-md cursor-pointer hover:text-[#008ECC] hover:bg-[#fff3f1] hover:scale-105 duration-300 hover:ease-in-out drop-shadow-lg">{`Submit`}</button>
          </form>
          <div className="flex flex-row mx-auto pb-32 justify-center items-center md:flex-col md:ml-4">
            {contact.map(({ icon, link, style }) => (
              <a
                href={link}
                className={`md:my-4 mx-4 p-2 text-xl hover:scale-105 text-white transition border rounded-full ${style}`}
                target="_blank"
                rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
