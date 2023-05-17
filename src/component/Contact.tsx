import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact">
      <div className="">
        <div>
          <p>Contact</p>
        </div>

        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
